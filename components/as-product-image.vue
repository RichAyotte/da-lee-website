<template>
<srcSetImage
	:image="productPhoto"
	class="product-photo"
	:height="240"
	ref="productPhoto"
>
</srcSetImage>
</template>
<script>
import {find} from 'lodash'
import srcSetImage from '~/components/srcset-image.vue'
const imageProductToProductPhoto = imageProduct => {
	const productPhoto = require(`assets/images/${imageProduct.src}`)
	productPhoto.style = {
		backgroundImage: `url(${productPhoto.placeholder})`
		, backgroundSize: 'cover'
		, minHeight: `240px`
		, minWidth: `263px`
	}
	productPhoto.alt = imageProduct.alt
	return productPhoto
}
export default {
	components: {
		srcSetImage
	}
	, data() {
		return {
			productPhoto: {}
		}
	}
	, created() {
		const item = this.$store.getters.getItemByPath(this.$router.currentRoute.path)
		if (item && item.imageProduct) {
			this.productPhoto = imageProductToProductPhoto(item.imageProduct)
		}
	}
}
</script>
<style lang="stylus" scoped>
.product-photo
	width: 100%
	@media (min-width: 768px)
		float: right
		width: 263px
</style>