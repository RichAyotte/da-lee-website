<template>
<div>
	<as-header-image />
	<h1><as-title-text/></h1>
	<p>Da-Lee is a premium product and service based group of companies
	providing solutions for municipal and industrial clients in Canada and the
	U.S.A.</p>

	<p>Please contact us to further discuss how we can assist you with
	questions, concerns and inquiries.</p>

	<no-ssr>
	<iframe
		src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBmF2oLInJbda4DiJHRgKl6KSsfUnADpWQ&q=Da-Lee+Dust+Control+Ltd,350+Jones+Rd,+Stoney+Creek,+ON"
		height="350"
		frameborder="0"
		style="border:0; width: 100%;"
		allowfullscreen>
	</iframe>
	</no-ssr>

	<div class="card-group">
		<b-card
			title="Stoney Creek, Ontario"
		>
		<p class="card-text">
		350 Jones Road
		<br>
		Stoney Creek, Ontario, L8E 5N2
		<br>
		Telephone: 905-643-1135
		<br>
		Toll Free: 1-800-268-4490
		<br>
		Fax: 905-643-2299
		<br>
		Email: contact@daleegroup.com</p>
		</b-card>

		<b-card
			title="Goderich, Ontario"
		>
		<p class="card-text">
		491 MacEwan Street
		<br>
		Goderich, Ontario, N7A 3X8
		<br>
		Telephone: 519-524-5903
		<br>
		Fax: 519-524-5485
		<br>
		Email: contact@daleegroup.com
		</p>
		</b-card>
	</div>
</div>
</template>
<script>
import NoSSR from 'vue-no-ssr'
import asHeaderImage from '~/components/as-header-image.vue'
import asTitleText from '~/components/as-title-text'
export default {
	components: {
		asHeaderImage
		, asTitleText
		, 'no-ssr': NoSSR
	}
}
</script>
