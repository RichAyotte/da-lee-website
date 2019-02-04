<template>
	<div>
		<div class="photos">
				<nuxt-link
					v-for="item in items"
					:key="item.label"
					:to="item.route"
				>
				<srcSetImage
					v-bind:image="item.photo"
				/>
				<div class="image-overlay">
					<div class="image-text">{{item.label}}</div>
				</div>
				</nuxt-link>
		</div>
		<div class="container">
		</div>
	</div>
</template>
<script>
import srcSetImage from '~/components/srcset-image'

export default {
	components: {
		srcSetImage
	}
	, data() {
		const items = this.$store.getters.launchItems
		.map(item => {
			item.photo = require(`assets/images/${item.imageLaunch.src}`)
			item.photo.alt = item.imageLaunch.alt
			item.photo.style = {
				backgroundImage: `url(${item.photo.placeholder})`
				, backgroundSize: 'cover'
			}
			return item
		})
		return {
			items
		}
	}
}
</script>

<style lang="stylus" scoped>
.photos
	display flex
	flex-flow row wrap
	padding-bottom 15px
	justify-content space-between
	>a
		position relative
		&:hover >.image-overlay
			opacity 0.7
		margin 15px 0 0
		@media (min-width: 992px)
			flex-basis calc(33% - 7.5px)

.image-overlay
	background-color white
	bottom 0
	height 100%
	left 0
	opacity 0
	position absolute
	right 0
	top 0
	transition .5s ease
	width 100%

.image-text
	font-weight bold
	color black
	font-size responsive 11px 35px
	left 50%
	line-height responsive 11px 35px
	position absolute
	text-align center
	text-transform uppercase
	top 50%
	transform translate(-50%, -50%)
	width 90%
</style>