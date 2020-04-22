<template>
	<div>
		<h1><as-title-text /></h1>
		<p>For permanent repairs in sidewalks and highways</p>
		<ul>
			<li>Instantly trafficable</li>
			<li>No waste</li>
			<li>Easy to use</li>
			<li>Suitable for planned and reactive repairs</li>
			<li>Use with SCJ Seal and Tack Spray for a permanent repair</li>
			<li>Used in ALL weathers, climates and temperatures</li>
			<li>Depth: 10-50mm</li>
			<li>Resealable tubs</li>
		</ul>

		<p>
			Packaging / Coverage 22kg / 50lb
			<br />
			Approx. 1m2 at 15mm
		</p>

		<p>Manufactured under license for Instarmac Group plc</p>
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="/resources/sds/Permanent Road Repair_Datasheet_Da_Lee.pdf"
			>>>> Safety Data Sheet</b-link
		>
		<br />
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href=" https://www.youtube.com/watch?v=6C3MNQKTxqE"
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
