<template>
<div>
	<h2>{{subMenuName}}</h2>
	<nav>
	<ul>
		<template v-for="item in subMenu.children">
			<li>
			<nuxt-link :to="item.route">
				<h3 v-html="item.label"></h3>
			</nuxt-link>
			</li>
			<ul
				v-if="subSubMenu.children && $router.currentRoute.path.indexOf(item.route) >= 0"
			>
				<li
					v-for="child in subSubMenu.children"
				>
				<nuxt-link :to="child.route">
					<div v-html="child.label"></div>
				</nuxt-link>
				</li>

			</ul>
		</template>
	</ul>
	</nav>
</div>
</template>

<script>
export default {
	created() {
		const {
			subMenu
			, subMenuName
			, subSubMenu
		} = this.getSubMenu(this.$router.currentRoute.path)

		this.subMenu = subMenu
		this.subMenuName = subMenuName
		this.subSubMenu = subSubMenu
	}
	, data() {
		return {
			subMenu: []
			, subMenuName: ''
			, subSubMenu: []
		}
	}
	, methods: {
		getSubMenu(path) {
			const subPath = path.split('/')
			subPath.shift()
			const subMenuName = subPath.shift()
			const subSubMenuName = subPath.shift()
			return {
				subMenu: this.$store.getters.getItemByPath(`/${subMenuName}`) || []
				, subMenuName
				, subSubMenu: this.$store.getters.getItemByPath(`/${subMenuName}/${subSubMenuName}`) || []
			}
		}
	}
	, watch: {
		'$route'(to) {

			const {
				subMenu
				, subMenuName
				, subSubMenu
			} = this.getSubMenu(to.path)

			this.subMenu = subMenu
			this.subMenuName = subMenuName
			this.subSubMenu = subSubMenu
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
h2
	color brand-blue
	font-size 140%
	text-transform uppercase

a
	color text-color
	display block
	&:hover
		background-color brand-green
		color white
		text-decoration none
		h3
			background-color brand-blue
			color white

	&.nuxt-link-exact-active, &.nuxt-link-active
		color black
		font-weight bold
		text-decoration none
		&:hover
			background-color transparent
		h3
			font-weight bold

	h3
		color brand-blue
		display block
		font-size 120%
		margin-bottom 0
		padding 5px


ul
	padding 0
	ul
		li
			border-bottom 1px dotted text-color
			margin-left 30px

li
	list-style-type none
</style>