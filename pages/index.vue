<template>
<div>
	<div class="top-image">
		<div class="splash-photo"
			:style="splashPhoto.style"
		>
			<img
				:src="splashPhoto.src"
				:srcset="splashPhoto.srcSet"
				alt="Beautiful clear blue sky and green fields"
				class="img-fluid"
				height="2461"
				sizes="100vw"
				width="2560"
			>
			<h1>Dust Control, Winter Deicers, Pavement Products and
			Environmental Services</h1>
		</div>
		<a
			href="#services-boxes"
			v-smooth-scroll
		>
		<img
			alt="bouncing circle icon with down arrow"
			class="circle-down bounce"
			src="~assets/images/icons/circle-down.svg"
		/>
		</a>
	</div>
	<services-boxes id="services-boxes"/>
</div>
</template>

<script>
import servicesBoxes from '~/components/services-boxes'
import srcSetImage from '~/components/srcset-image'
const splashPhoto = require(`~/assets/images/photos/home.jpg`)
splashPhoto.style = {
	backgroundImage: `url(${splashPhoto.placeholder})`
	, backgroundSize: 'cover'
}

export default {
	components: {
		servicesBoxes
		, srcSetImage
	}
	, data() {
		return {
			splashPhoto
		}
	}
}
</script>
<style lang="stylus" scoped>
.top-image
	position relative

@keyframes bounce
	0%, 20%, 50%, 80%, 100%
		transform translateY(0)

	40%
		transform translateY(-30px)

	60%
		transform translateY(-15px)

.circle-down
	display none
	@media (min-width: 992px)
		animation bounce 2s infinite
		bottom 30px
		display block
		height 50px
		left calc(50% - 25px)
		opacity 0.5
		position absolute

.splash-photo
	position relative
	@media (min-width: 992px)
		height calc(100vh - 31.67px - 167px)
		max-height 1067px
		overflow hidden
	h1
		color white
		font-size: responsive 23px 50px
		left 50%
		position absolute
		text-align center
		text-shadow 0 0 8px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 0, 0, 0.7)
		top 50%
		transform translate(-50%, -50%)
		width 90%
</style>