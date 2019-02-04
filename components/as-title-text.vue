<template>
<div v-html="title" style="overflow-wrap: break-word;"></div>
</template>

<script>
const routeToArray = route => {
	const splitPath = route.path.split('/')
	if (!splitPath[splitPath.length - 1]) {
		splitPath.pop()
	}
	splitPath.shift()
	return splitPath.map(p => p.split('-').join(' '))
}

import {get} from 'lodash'

export default {
	created() {
		const item = this.$store.getters.getItemByPath(this.$router.currentRoute.path)
		this.title = get(item, 'label')
	}
	, data() {
		return {
			title: ''
		}
	}
	, watch: {
		'$route'(to) {
			const item = this.$store.getters.getItemByPath(this.$router.currentRoute.path)
			this.title = get(item, 'label')
		}
	}
}
</script>
