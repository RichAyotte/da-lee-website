<template>
<div v-html="lorem"></div>
</template>

<script>
import loremIpsum from 'lorem-ipsum'
export default {
	data() {
		return {
			lorem: loremIpsum({
				count: 3
				, units: 'paragraphs'
				, format: 'html'
			})
		}
	}
}
</script>
