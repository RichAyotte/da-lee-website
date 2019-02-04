<template>
<div>
	<h1><as-title-text/></h1>
	<p>Designed for the application to asphalt to prevent water ingress and
	progressive fretting, suitable for use on permanent patching schemes and around
	utility cuts.</p>

	<ul>
	<li>No waste, cut as required</li>
	<li>Prevents water ingress immediately</li>
	<li>Prolongs the life of your repair</li>
	<li>Quick and easy to apply</li>
	<li>Fast installation</li>
	<li>Open to traffic: 10 minutes</li>
	<li>Elastic qualities accommodate thermal movement</li>
	<li>60 Skid Resistance Value </li>
	</ul>

	<p>Packaging: 5m (196 inches) x 35mm (1.40 inches) per roll</p>
	<as-product-image />
</div>
</template>

<script>
import asProductImage from '~/components/as-product-image.vue'
import asTitleText from '~/components/as-title-text'
export default {
	components: {
		asTitleText
		, asProductImage
	}
}
</script>
