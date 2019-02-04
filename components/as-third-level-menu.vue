<template>
<ul>
	<li
		v-for="child in thirdLevelNav"
	>
	<nuxt-link :to="child.route">
		<div v-html="child.label"></div>
	</nuxt-link>
	</li>
</ul>
</template>

<script>
import {trim} from 'lodash'

const pathToLevel2 = path => {
	const pieces =  trim(path, '/').split('/')
	const level = pieces.length
	return level === 2
		? path
		: path.substr(0, trim(path, '/').lastIndexOf('/') + 1)
}

export default {
	created() {
		const menu = this.$store.getters.getItemByPath(
			pathToLevel2(this.$router.currentRoute.path)
		)

		if (menu && Array.isArray(menu.children)) {
			this.thirdLevelNav = menu.children
			return
		}
		this.thirdLevelNav = []
	}
	, data() {
		return {
			thirdLevelNav: []
		}
	}
	, watch: {
		'$route'(to) {
			const menu = this.$store.getters.getItemByPath(
				pathToLevel2(to.path)
			)

			if (menu && Array.isArray(menu.children)) {
				this.thirdLevelNav = menu.children
				return
			}
			this.thirdLevelNav = []
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'

ul
	margin 8px 0 0 0
	padding 0
	li
		list-style-type none
		border-bottom 1px dotted text-color
		a
			color text-color
			display block
			&:hover
				background-color brand-green
				color white
				text-decoration none
			&.nuxt-link-exact-active, &.nuxt-link-active
				color black
				font-weight bold
				text-decoration none
				&:hover
					background-color transparent

	@media (min-width: 768px)
		display none
</style>
