<template>
	<div class="container user-list">
		<div v-for="user in users" :key="user.id">
			<UserItem :user="user" />
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {};
		},
		computed: {
			...mapState('users', ['users', 'user']),
		},
	};
</script>

<style lang="css" scoped>
	.user-list {
		max-width: 1065px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
