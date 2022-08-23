<!-- ========================= SCRIPT -->
<script lang="ts">
	export let background = true;
	export let background_url: string | undefined = undefined;
	export let xmargin = true;

	$: _background = background && background_url === undefined;
</script>

<!-- ========================= HTML -->
<div
	class:background={_background}
	class:xmargin
	class="group relative w-full xs:w-[var(--thumbnail-width)]   rounded-md my-[var(--thumbnail-margin)] overflow-hidden"
>
	{#if background_url != undefined}
		<div
			class="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-70 group-hover:scale-105 transition-all duration-500"
			style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.5)), url({background_url});"
		/>
	{/if}
	<div class="relative px-4 py-2 pt-3 z-10">
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
