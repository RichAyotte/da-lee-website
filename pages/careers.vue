<template>
<div>
	<as-header-image />
	<h1><as-title-text/></h1>
	<p>Da-Lee is a dynamic and growing group of companies with opportunities for
	motivated, talented people to join our team and grow with us.  We are always
	interested in talking to qualified candidates about existing opportunities
	at our company.</p>

	<p>Resumes can be submitted to <a rel="noopener noreferrer" target="_blank" href="mailto:careers@daleegroup.com">careers@daleegroup.com</a> for
	review and consideration by our HR department.</p>

	<p>The future is exciting at Da-Lee and we look forward to building our team to support our business.</p>
</div>
</template>
<script>
import asHeaderImage from '~/components/as-header-image.vue'
import asTitleText from '~/components/as-title-text'
export default {
	components: {
		asHeaderImage
		, asTitleText
	}
}
</script>
