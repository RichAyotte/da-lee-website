<template>
	<div>
		<h1><as-title-text /></h1>
		<p>
			Ideal for the repair of potholes in roads, driveways and parking
			lots.
		</p>
		<ul>
			<li>Instantly trafficable</li>
			<li>No waste</li>
			<li>Easy to use</li>
			<li>Suitable for planned and reactive repairs</li>
			<li>
				Use with
				<b-link
					href="/services/pavement-products/scj-seal-and-tack-coat-spray"
					>SCJ Seal and Tack Coat Spray</b-link
				>
				for a permanent repair
			</li>
			<li>Used in ALL weathers, climates and temperatures</li>
			<li>Depth: 10-50mm</li>
			<li>Resealable tubs</li>
		</ul>

		<p>Packaging / Coverage 22kg / 50lb <br />Approx .1m2 at 12-15mm</p>

		<p>Manufactured under license for Instarmac Group plc</p>
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="/resources/sds/PPR_Datasheet_Da_Lee.pdf"
			>>>> Data & Safety Sheet</b-link
		>
		<br />
		<b-link
			rel="noopener noreferrer"
			target="_blank"
			href="https://www.youtube.com/watch?v=BdeZ3gQ7qIs"
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
