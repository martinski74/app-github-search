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
  users:[],
  user:{},
  repos:[]
};


//Actions
const actions = {

  // Search users
  async getUsers({commit}, text){
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

      commit('GET_USERS', res.data.items)
      return res;
  },

  // Celar users
  clearUsers({commit}){
    commit('CLEAR_USERS')
  },

  // Get user 
  async getUser({commit}, username){
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)

    commit('GET_USER', res.data)
    return res;
  },

  // Get user repos
  async getUesrRepos({commit}, username){
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

    commit('GET_REPOS', res.data)
    return res;
  }
};


//Mutations
const mutations ={
  GET_USERS:(state,users) => state.users = users,

  CLEAR_USERS:(state) => state.users = [],

  GET_USER:(state, user) => state.user = user,

  GET_REPOS:(state, repo) => state.repos = repo
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
};
