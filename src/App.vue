<template>
	<div class="app">
		<NavBar />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
.app {
	font-family: 'Roboto', sans-serif;
	font-size: 1rem;
	line-height: 1.6;
	background-color: #fff;
	color: #333;
}
</style>
