<template>
<div>
	<as-header-image />
	<as-third-level-menu />
	<div class="row">
		<div class="col-sm-4 as-side-navigation">
			<as-side-navigation />
		</div>
		<div class="col-md-8">
			<nuxt-child />
		</div>
	</div>
</div>
</template>

<script>
import asHeaderImage from '~/components/as-header-image.vue'
import asSideNavigation from '~/components/as-side-navigation'
import asThirdLevelMenu from '~/components/as-third-level-menu'

export default {
	components: {
		asHeaderImage
		, asSideNavigation
		, asThirdLevelMenu
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
h1
	responsive 11px 15px

.as-side-navigation
	display none
	@media (min-width: 768px)
		display block
</style>
