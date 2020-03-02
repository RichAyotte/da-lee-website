<template>
	<div>
		<h1><as-title-text /></h1>
		<p>
			A fibre modified concrete for backfilling around manhole frames and
			gullies and can also be used for surface repairs.
		</p>

		<ul>
			<li>Fibre modified</li>
			<li>Rapid set</li>
			<li>Open to traffic: 60 minutes</li>
			<li>Workability: 5-10 minutes</li>
			<li>Set time: 10-20 minutes even at minus temperatures</li>
			<li>Depth: 30-500mm</li>
			<li>Compressive strength after 90 minutes 20 MPa</li>
			<li>PSI final strength 65 MPa</li>
			<li>Shrinkage compensated</li>
		</ul>

		<p>Packaging: 25kg / 55lb</p>
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="/resources/sds/QC10 F datasheet Da-Lee.pdf"
			>>>> Data & Safety Sheet</b-link
		>
		<br />
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="https://www.youtube.com/watch?v=nnkmHw18Ags"
			>>>> Watch Video</b-link
		>
		<as-product-image />
	</div>
</template>

<script>
import asProductImage from "~/components/as-product-image.vue";
import asTitleText from "~/components/as-title-text";
export default {
	components: {
		asTitleText,
		asProductImage
	}
};
</script>
