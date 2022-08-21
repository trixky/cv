<!-- ========================= SCRIPT -->
<script lang="ts">
	import ThumbnailContainer from '$components/thumbnails/container.svelte';
	import skills from '$db/skills';

	export let kind: string;
	let selected_background: number | undefined = undefined;

	let backgrounds: string[] | undefined = undefined;
	$: backgrounds = skills.map((skill) => skill.image);
</script>

<!-- ========================= HTML -->
<ThumbnailContainer {backgrounds} {selected_background}>
	<div class="mb-3">
		<h3>{kind}</h3>
	</div>
	<ul class="mt-3">
		{#each skills as skill, index (index)}
			{#if skill.kind === kind}
				<li class="flex justify-between">
					<p
						class="inline-block hover:underline cursor-pointer"
						on:mouseleave={() => {
							selected_background = undefined;
						}}
						on:mouseover={() => {
							selected_background = index;
						}}
						on:focus={() => {
							selected_background = index;
						}}
					>
						{skill.name}
					</p>
					<p class="inline-block text-neutral-400">{skill.note}/10</p>
				</li>
			{/if}
		{/each}
	</ul>
</ThumbnailContainer>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
