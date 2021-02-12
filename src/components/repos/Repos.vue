<template>
	<div>
		<div v-for="repo in repos" :key="repo.id">
			<RepoItem :repo="repo" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		repos: {
			type: Array,
			required: true,
		},
	},
};
</script>
