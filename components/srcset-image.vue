<template>
<div
	:style="image.style"
>
	<img
		:alt="image.alt"
		:height="height"
		:src="image.src"
		:srcset="image.srcSet"
		:width="width"
		class="img-fluid"
		sizes="100vw"
	>
</div>
</template>

<script>
export default {
	props: {
		image: Object
		, height: Number
		, width: Number
	}
}
</script>
