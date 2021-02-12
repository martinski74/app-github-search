<template>
	<div class="container">
		<form class="mt-4" @submit.prevent="displayUsers">
			<b-alert
				@dismissed="dismissCountDown = 0"
				:show="dismissCountDown"
				variant="secondary"
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
		<spinner v-if="isLoading"></spinner>
		<button
			v-if="users.length > 0"
			@click="clearUserList"
			class="btn btn-light btn-block mt-4"
		>
			Clear
		</button>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	data() {
		return {
			searchedUser: '',
			dismissCountDown: 0,
			isLoading: false,
		};
	},
	computed: {
		...mapState('users', ['users']),
	},
	methods: {
		...mapActions('users', ['getUsers', 'clearUsers']),
		async displayUsers() {
			if (this.searchedUser) {
				this.isLoading = true;
				await this.getUsers(this.searchedUser);
				this.isLoading = false;
				this.searchedUser = '';
			} else {
				this.dismissCountDown = 2;
			}
		},

		clearUserList() {
			this.clearUsers();
			this.searchedUser = '';
		},
	},

	mounted() {},
};
</script>

<style lang="css" scoped>
.container {
	margin: auto;
	overflow: hidden;
	padding: 0 2rem;
	max-width: 1100px;
}
.alert {
	border-radius: 0;
	background-color: #f4f4f4;
	border: none;
}
input[type='text'] {
	display: block;
	width: 100%;

	font-size: 1.2rem;
	border: 1px solid #ccc;
	margin-top: 25px;
	margin-bottom: 20px;
}
.btn-dark:focus {
	box-shadow: none;
}
.btn {
	padding: 0.4rem 1.3rem;
	font-size: 1rem;
	border: none;
	border-radius: 0;
	transition: opacity 0.2s ease-in;
	outline: none;
}
.btn:hover {
	opacity: 0.8;
}
.btn-light {
	background-color: #f4f4f4;
}
</style>
