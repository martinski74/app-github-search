<template>
	<div class="card">
		<h3>
			<a :href="repo.html_url" target="_blanc">{{ repo.name }}</a>
		</h3>
	</div>
</template>

<script>
export default {
	props: {
		repo: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.card {
	padding: 1rem;
	border: 1px dotted #ccc;
	margin: 0.7rem 0;
}
a {
	color: #dc3545;
	text-decoration: none;
}
h3 {
	font-size: 1.17em;
	font-weight: bold;
	margin-bottom: 0;
}
</style>
