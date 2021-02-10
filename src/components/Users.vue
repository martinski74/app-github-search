<template>
	<div class="container user-list">
		<div v-for="user in users" :key="user.id">
			<UserItem :user="user" />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import UserItem from './UserItem';
export default {
	components: {
		UserItem,
	},
	data() {
		return {};
	},
	computed: {
		...mapState('users', ['users']),
	},
};
</script>

<style lang="css" scoped>
.user-list {
	max-width: 1100px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}
</style>
