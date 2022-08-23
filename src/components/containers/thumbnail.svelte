<!-- ========================= SCRIPT -->
<script lang="ts">
	export let background = true;
	export let xmargin = true;
</script>

<!-- ========================= HTML -->
<div
	class:background
	class:xmargin
	class="relative w-full xs:w-[var(--thumbnail-width)] px-4 py-2 pt-3 rounded-md my-[var(--thumbnail-margin)]"
>
	<div class="relative z-10">
		<slot />
	</div>
</div>

<!-- ========================= CSS -->
<style lang="postcss">
	.background {
		@apply bg-black bg-opacity-70 shadow-black shadow-md;
	}

	.xmargin {
		@apply mx-[var(--thumbnail-margin)];
	}
</style>
