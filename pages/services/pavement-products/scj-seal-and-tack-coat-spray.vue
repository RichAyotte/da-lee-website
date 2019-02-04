<template>
<div>
	<h1><as-title-text/></h1>
	<p>A cold joint sealer that is applied onto vertical edges and surface base
	before the application of asphalt.</p>

	<ul>
	<li>Prevents water ingress</li>
	<li>Prolongs the life of your repair</li>
	<li>Improves bond</li>
	<li>Can be used in all weathers</li>
	<li>No waste</li>
	<li>Simple and economical to apply</li>
	</ul>

	<p>Packaging: 750ml / 26. fl oz. can</p>
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
