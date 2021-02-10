<template>
	<div class="container">
		<form class="mt-4" @submit.prevent="displayUsers">
			<b-alert :show="3" variant="secondary"
				><i class="fas fa-exclamation-circle mr-1"></i>Please enter search
				term</b-alert
			>
			<input
				type="text"
				name="text"
				placeholder="Search Users..."
				v-model="searchedUser"
			/>
			<input type="submit" value="Search" class="btn btn-dark btn-block" />
		</form>
		<button class="btn btn-light btn-block mt-4">Clear</button>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	data() {
		return {
			searchedUser: '',
		};
	},
	computed: {
		...mapState('users', ['users']),
	},
	methods: {
		...mapActions('users', ['getUsers']),
		displayUsers() {
			this.getUsers(this.searchedUser);
			console.log(this.users);
		},
	},

	mounted() {},
};
</script>

<style lang="css" scoped>
.container {
	max-width: 1100px;
	margin: auto;
	overflow: hidden;
	padding: 0 2rem;
}
input[type='text'] {
	display: block;
	width: 100%;

	font-size: 1.2rem;
	border: 1px solid #ccc;
	margin-top: 25px;
	margin-bottom: 20px;
}
.btn:hover {
	opacity: 0.8;
}
</style>
