<!-- ========================= SCRIPT -->
<script lang="ts">
	import ThumbnailContainer from '$components/thumbnails/container.svelte';
	import projects from '$db/projects';

	export let kind: string;
</script>

<!-- ========================= HTML -->
<ThumbnailContainer>
	<div class="mb-3">
		<h3>{kind}</h3>
	</div>
	<ul class="mt-3">
		{#each projects as project}
			{#if project.kind === kind}
				<li class="flex justify-between">
					<a href={project.link} target="_blank">
						<p class="inline-block hover:underline cursor-pointer">
							{project.name}
						</p>
					</a>
					{#if project.tag != undefined}
						<a
							href={project.tag.link || '#'}
							target="_blank"
							disabled={project.tag.link === undefined}
						>
							<p class="italic text-neutral-400 hover:underline">
								#{project.tag.label}
							</p>
						</a>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</ThumbnailContainer>
