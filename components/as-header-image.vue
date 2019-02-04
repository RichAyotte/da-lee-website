<template>
<srcSetImage
	:image="headerPhoto"
	:style="style"
	class="header-photo"
	:height="525"
	ref="headerPhoto"
	:width="2048"
>
</srcSetImage>
</template>
<script>
import {find} from 'lodash'
import srcSetImage from '~/components/srcset-image.vue'
const imageHeaderToHeaderPhoto = imageHeader => {
	const headerPhoto = require(`assets/images/${imageHeader.src}`)
	headerPhoto.style = {
		backgroundImage: `url(${headerPhoto.placeholder})`
		, backgroundSize: 'cover'
		, minHeight: `70px`
		, minWidth: '100%'
	}
	headerPhoto.alt = imageHeader.alt
	return headerPhoto
}
export default {
	components: {
		srcSetImage
	}
	, data() {
		return {
			headerPhoto: {}
			, style: {
				opacity: 1
			}
		}
	}
	, created() {
		const item = this.$store.getters.getItemByPath(this.$router.currentRoute.path)
		if (item && item.imageHeader) {
			this.headerPhoto = imageHeaderToHeaderPhoto(item.imageHeader)
		}
	}
	, watch: {
		'$route'(to) {
			const item = this.$store.getters.getItemByPath(to.path)
			if (item && item.imageHeader) {
				this.headerPhoto = imageHeaderToHeaderPhoto(item.imageHeader)
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.header-photo
	transition opacity .3s
</style>