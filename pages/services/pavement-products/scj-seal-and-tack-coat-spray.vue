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

	<p>Packaging: 750ml</p>
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="/resources/sds/SCJ_Datasheet_Da_Lee.pdf"
			>>>> Data & Safety Sheet</b-link
		>
		<br />
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="https://www.youtube.com/watch?v=1R1U8OxDj6U"
			>>>> Watch Video</b-link
		>
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
