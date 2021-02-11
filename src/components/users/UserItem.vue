<template>
	<div class="card text-center">
		<img :src="user.avatar_url" alt="avatar" class="round-img" />
		<h3>{{ user.login }}</h3>
		<div>
			<router-link
				:to="`/users/${user.login}`"
				class="btn btn-dark btn-sm my-1"
			>
				More
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	props: {
		user: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
	computed: {
		...mapState('users', ['users']),
	},
	methods: {
		...mapActions('users', ['getUsers']),
	},
};
</script>

<style scoped>
.round-img {
	width: 60px;
	border-radius: 50%;
	margin: auto;
	margin-bottom: 18px;
}
.card {
	padding: 1rem;
	border: 1px dotted #ccc;
	margin: 0.7rem 0;
}
.btn {
	border-radius: 0;
	padding: 0.2rem 1rem;
}
.btn:hover {
	opacity: 0.8;
	color: #666;
}
h3 {
	margin-bottom: 18px;
	font-size: 18px;
	font-weight: bolder;
}
</style>
