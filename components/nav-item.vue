<template>
<div
	style="cursor: pointer"
	@mouseenter="showMenu"
	@mouseleave="hideMenu"
	@keyup.enter="toggleMenu"
	@click="hideAll"
>
	<nuxt-link
		class="nav-item"
		:to="item.route"
	>
	{{item.label}}
	</nuxt-link>
	<div
		v-show="parentHover"
		v-if="item.children && level <= maxDepth"
		:class="`sub-menu vertical-menu level-${parseInt(level) + 1} ${item.route.split('/').pop()}`"
	>
		<navItem
			v-for="child in item.children"
			:item="child"
			:key="child.route"
			:level="parseInt(level) + 1"
		>
		{{child.label}}
		</navItem>
	</div>
</div>
</template>

<script>

import navItem from './nav-item'

export default {
	components: {
		navItem
	}
	, data() {
		return {
			parentHover: false
		}
	}
	, props: [
		'item'
		, 'level'
		, 'max-depth'
	]
	, methods: {
		showMenu() {
			if (!this.item.children) {
				return
			}
			this.positionMenu()
			this.parentHover = true
		}
		, hideMenu() {
			this.parentHover = false
		}
		, hideAll() {
			if (!this.item.children || this.level > 0) {
				Array.prototype.forEach.call(
					document.getElementsByClassName('sub-menu')
					, node => {
						node.style.display = 'none'
					}
				)
				this.$store.state.isMobileMenuVisible = false
			}
		}
		, toggleMenu() {
			if (!this.item.children) {
				return
			}
			this.positionMenu()
			this.parentHover = !this.parentHover
		}
		, positionMenu() {
			const itemClass = this.item.route.split('/').pop()
			const [subMenu] = document.getElementsByClassName(`sub-menu ${itemClass}`)

			if (!subMenu) {
				return
			}

			if (this.level > 0) {
				subMenu.style.top = `${this.$el.offsetTop}px`
				subMenu.style.left = `${this.$el.offsetLeft + this.$el.offsetWidth}px`
			}
			else {
				subMenu.style.top = `${this.$el.offsetTop + this.$el.offsetHeight}px`
				subMenu.style.left = `${this.$el.offsetLeft}px`
			}
		}
	}
	, name: 'navItem'
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'

a
	color text-color
	display block
	padding 5px
	text-decoration none
	text-transform uppercase
	@media (min-width: 992px)
		border-top 5px solid transparent
		margin 0 0 0 15px
		padding 0
		&:hover, &:focus
			border-top-color brand-green
			outline none
			text-decoration none
		&.nuxt-link-exact-active, &.nuxt-link-active
			border-top-color brand-green
			text-decoration none

.sub-menu
	flex-direction column
	a
		padding 5px
		color white

	&.services a
		background-color brand-green
		&:hover, &:focus
			background-color silver

	&.winter-deicers a, &.industrial-applications a, &.dust-control a
		background-color silver
		&:hover, &:focus
			background-color brand-blue

	@media (min-width: 992px)
		display flex
		flex-direction column
		left 0px
		margin 0 15px
		min-width 150px
		position absolute
		top 0
		z-index 100

		a:not(:first-child)
			display none

		> div
			&:not(:last-child)
				border-bottom 0.5px solid white
			> a
				border none
				color white
				display block
				margin 0

		&.level-2
			margin 0

		&.services a
			&:hover, &:focus
				background-color silver

		&.winter-deicers a, &.industrial-applications a, &.dust-control a
			&:hover, &:focus
				background-color brand-blue
</style>