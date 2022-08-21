<!-- ========================= SCRIPT -->
<script lang="ts">
	export let backgrounds: string[] | undefined = undefined;
	export let selected_background: number | undefined = undefined;
</script>

<!-- ========================= HTML -->
<div
	class="group relative bg-black bg-opacity-70 w-[224px] min-w-[224px] p-4 pt-3 m-2 rounded-md shadow-black shadow-md overflow-hidden"
>
	{#if backgrounds != undefined}
		{#each backgrounds as background, index (index)}
			<div
				class:show-background={index === selected_background}
				class="absolute ddd top-0 left-0 w-full h-full z-0 bg-cover bg-center opacity-0 transition-all"
				style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url({background});"
			/>
		{/each}
	{/if}

	<div class="relative z-10">
		<slot />
	</div>
</div>

<!-- ========================= CSS -->
<style lang="postcss">
	.show-background {
		@apply opacity-70;
	}
</style>
