<!-- ========================= SCRIPT -->
<script lang="ts">
	import ThumbnailContainer from '$components/thumbnails/container.svelte';
	import skills from '$db/skills';

	export let kind: string;
</script>

<!-- ========================= HTML -->
<ThumbnailContainer>
	<div class="mb-3">
		<h3>{kind}</h3>
	</div>
	<ul class="mt-3">
		{#each skills as skill, index (index)}
			{#if skill.kind === kind}
				<li class="flex justify-between">
					<p class="inline-block hover:underline cursor-pointer">
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
