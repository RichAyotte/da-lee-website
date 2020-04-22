<template>
	<div>
		<h1><as-title-text /></h1>
		<p>
			The environmentally friendly bedding mortar specifically formulated
			for the bedding of all manholes.
		</p>

		<ul>
			<li>Workability: 15 minutes</li>
			<li>Set time: 30 minutes</li>
			<li>Depth: 10-50mm</li>
			<li>Compressive strength in 3 hours 52 MPa</li>
			<li>Flexural strength in 3 hours 12 MPa</li>
			<li>Tensile strength in 3 hours 6 MPa</li>
			<li>No hazardous waste disposal</li>
			<li>Can be used in wet conditions and cold temperatures</li>
		</ul>

		<p>
			Superior compressive, tensile &amp; flexural strengths in 3 hours
			<br />
			Open to traffic: 1 hour
		</p>

		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="/resources/sds/Envirobed datasheet_Da_Lee.pdf"
			>>>> Safety Data Sheet</b-link
		>
		<br>
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="https://youtu.be/1ydserTDLNU"
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
