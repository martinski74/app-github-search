import axios from 'axios';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET;
	
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
	
}

//State
const state ={
  users:[]
};


//Actions
const actions = {

  async getUsers({commit}, text){
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

      commit('GET_USERS', res.data.items)
      console.log(res.data.items);
      return res;
  }
};


//Mutations
const mutations ={
  GET_USERS:(state,users) => state.users = users
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
