<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="danger">
			<b-navbar-brand class="ml-3"
				><i class="fab fa-github"></i> Githuber</b-navbar-brand
			>

			<b-collapse id="nav-collapse" is-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item right>
						<router-link class="text-white" to="/">Home </router-link>
					</b-nav-item>

					<b-nav-item right class="mr-3">
						<router-link to="/about" class="text-white">
							About
						</router-link>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<style scoped>
.navbar-brand {
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0.1px;
}
.navbar {
	opacity: 0.9;
	margin-bottom: 1rem;
	padding: 0.4rem 1rem;
}
</style>
