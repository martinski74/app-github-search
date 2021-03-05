<template>
	<div class="container">
		<router-link to="/" class="btn btn-light">Back To Search</router-link>

		Hireable:
		<i v-if="user.hireable" class="fas fa-check text-success"></i>
		<i v-else class="fas fa-times-circle text-danger"></i>

		<spinner v-if="isLoading"></spinner>
		<div class="card grid-2">
			<div class="all-center">
				<img :src="user.avatar_url" class="round-img" alt="avatar" />
				<h1 class="heading">{{ user.name }}</h1>
				<p>{{ user.location }}</p>
			</div>
			<div class="mt-1">
				<h3 v-if="user.bio">Bio</h3>
				<p v-if="user.bio">{{ user.bio }}</p>
				<a :href="user.html_url" target="_blanc" class="btn btn-dark my-1"
					>Visit Github Profile</a
				>
				<ul>
					<li v-if="user.login">
						<strong>Username: </strong> {{ user.login }}
					</li>
					<li v-if="user.company">
						<strong>Company: </strong>{{ user.company }}
					</li>
					<li v-if="user.blog"><strong>Website: </strong>{{ user.blog }}</li>
				</ul>
			</div>
		</div>
		<div class="card text-center">
			<div class="badge badge-primary">Followers: {{ user.followers }}</div>
			<div class="badge badge-success">Following: {{ user.following }}</div>
			<div class="badge badge-light">Public Repos: {{ user.public_repos }}</div>
			<div class="badge badge-dark">Public Gists: {{ user.public_gists }}</div>
		</div>
		<Repos :repos="repos" />
	</div>
</template>
<script>
	import { mapActions, mapState } from 'vuex';
	export default {
		data() {
			return {
				isLoading: true,
				isExist: null,
			};
		},
		computed: {
			...mapState('users', ['user', 'repos']),
		},
		methods: {
			...mapActions('users', ['getUser', 'getUesrRepos']),
		},

		async created() {
			this.isLoading = true;
			try {
				await this.getUser(this.$route.params.username);
				await this.getUesrRepos(this.$route.params.username);
				this.isLoading = false;
			} catch (error) {
				console.error(error);
				this.isLoading = false;
			}
			console.log(this.user.hireable);
		},
	};
</script>

<style lang="css" scoped>
	.container {
		max-width: 1100px;
		margin: auto;
		overflow: hidden;
		padding: 0 2rem;
	}
	.heading {
		font-size: 2rem;
		font-weight: bolder;
	}
	h3 {
		font-size: 19px;
		font-weight: bolder;
	}
	.round-img {
		width: 150px;
		border-radius: 50%;
		margin: auto;
	}
	ul {
		list-style: none;
		padding-left: 0;
	}
	.all-center {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: auto;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.card {
		padding: 1rem;
		border: #ccc 1px dotted;
		margin: 0.7rem 0;
	}
	.grid-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}
	.badge {
		font-size: 0.8rem;
		font-weight: normal;
		padding: 0.5rem 0.7rem;
		text-align: center;
		margin: 0.5rem;
		color: #fff;
		border-radius: 5px;
	}
	.text-center {
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.badge-primary {
		background-color: #dc3545;
	}
	.badge-success {
		background-color: #28a745;
	}
	.badge-light {
		background-color: #f4f4f4;
		color: #333 !important;
		border: 1px solid #ccc;
	}
	.badge-dark {
		background-color: #333333;
	}
	.btn {
		border-radius: 0;
	}
	.btn-dark {
		padding: 0.4rem 1.3rem;
	}
	.btn-dark:focus {
		box-shadow: none;
	}
	.btn:hover {
		opacity: 0.8;
		color: #666;
	}
</style>
