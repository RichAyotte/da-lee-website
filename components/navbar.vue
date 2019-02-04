<template>
<nav class="navbar">
	<div>
		<nuxt-link to="/" class="logo">
			<img alt="Da-Lee logo" src="~assets/images/logo.svg" />
		</nuxt-link>
	</div>
	<img
		src="~assets/images/icons/menu.svg"
		class="menu"
		@click="toggleMobileMenu"
		alt="menu icon"
	/>
	<div class="horizontal-menu">
		<navItem
			v-bind:class="{ visible: $store.state.isMobileMenuVisible }"
			v-for="(item, index) in $store.state.navigationItems"
			v-if="item.isVisible !== false"
			:item="item"
			:key="item.route"
			level="0"
			max-depth="1"
		>
		{{item.label}}
		</navItem>
	</div>
</nav>
</template>

<script>
import navItem from './nav-item.vue'

export default {
	components: {
		navItem
	}
	, methods: {
		toggleMobileMenu() {
			this.$store.state.isMobileMenuVisible = !this.$store.state.isMobileMenuVisible
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'

.navbar
	width 100%
	display flex
	flex-direction row
	flex-wrap wrap
	justify-content space-between
	position relative

	.logo
		flex 0 1 50%
		img
			height 50px
		@media (min-width: 992px)
			margin-top 10px
			height 70px
			img
				width auto
				height 80px

	img.menu
		flex 0 1 auto
		height 50px
		@media (min-width: 992px)
			display none


	.horizontal-menu
		background-color white
		display flex
		flex 1 0 100%
		flex-direction column
		flex-wrap wrap
		justify-content flex-end
		> div
			align-items flex-start
			display none
			&.visible
				display block
		@media (min-width: 992px)
			align-items flex-end
			flex 0 0 auto
			flex-direction row
			margin 0 15px
			position relative
			> div
				display block
			> img.menu
				display none
</style>
