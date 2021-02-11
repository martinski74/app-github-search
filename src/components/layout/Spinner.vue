<template>
	<div class="spinner">
		<img src="../../assets/spinner.gif" alt="loader" />
	</div>
</template>

<script>
export default {
	name: 'spinner',
	data() {
		return {};
	},
};
</script>

<style scoped>
.spinner {
	display: 'block';
	text-align: center;
	width: '200px';
	margin: 'auto';
}
</style>
