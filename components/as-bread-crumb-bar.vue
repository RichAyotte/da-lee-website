<template>
<div class="as-bread-crumb-bar">
	<nuxt-link to="/">
		<img alt="house icon" src="~assets/images/icons/home-blue.svg">
	</nuxt-link>
	<template
		v-for="(breadCrumb, index) in breadCrumbs"
		v-if="breadCrumb"
	>
		/
		<template
			v-if="breadCrumbs.length - 1 === index"
		>
		<strong v-html="breadCrumb"></strong>
		</template>
		<span v-else  v-html="breadCrumb"></span>
	</template>
</div>
</template>

<script>
import {get} from 'lodash'

const routeToArray = route => {
	const splitPath = route.path.split('/')
	if (!splitPath[splitPath.length - 1]) {
		splitPath.pop()
	}
	splitPath.shift()
	return splitPath
}

export default {
	created() {
		const routeArray = routeToArray(this.$router.currentRoute)
		this.breadCrumbs = routeArray.map((value, index) => {
			const path = '/' + routeArray.slice(0, index + 1).join('/')
			let item = this.$store.getters.getItemByPath(path)
			return get(item, 'label', '')
		})
	}
	, data() {
		return {
			breadCrumbs: []
		}
	}
	, watch: {
		'$route'(to) {
			const routeArray = routeToArray(to)
			this.breadCrumbs = routeArray.map((value, index) => {
				const path = '/' + routeArray.slice(0, index + 1).join('/')
				let item = this.$store.getters.getItemByPath(path)
				return get(item, 'label', '')
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'

.as-bread-crumb-bar
	display none
	padding 15px
	text-transform uppercase
	color text-color
	strong
		color black
	img
		height 1rem

	@media (min-width: 992px)
		display block
</style>