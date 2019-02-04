<template>
<div>
	<h1><as-title-text/></h1>
	<p>The environmentally friendly bedding mortar specifically formulated for the
	bedding of all manholes.</p>

	<ul>
	<li>Workability: 15 minutes</li>
	<li>Set time: 30 minutes</li>
	<li>Depth: 10-50mm / 0.40-2 inches</li>
	<li>7690 PSI compressive strength in 3 hours</li>
	<li>1740 PSI flexural strength in 3 hours</li>
	<li>885 PSI tensile strength in 3 hours</li>
	<li>No hazardous waste disposal</li>
	<li>Can be used in wet conditions and cold temperatures</li>
	</ul>

	<p>
	Superior compressive, tensile &amp; flexural strengths in 3 hours
	<br>
	Open to traffic: 1 hour
	</p>
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
