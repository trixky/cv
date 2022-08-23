<!-- ========================= SCRIPT -->
<script lang="ts">
	import Thumbnail from '$components/containers/thumbnail.svelte';
	import projects from '$db/projects';

	export let kind: string;

	$: filtered_projects = projects.filter((project) => project.kind === kind);
</script>

<!-- ========================= HTML -->
{#if filtered_projects.length > 0}
	<Thumbnail>
		<div class="mb-3">
			<h3>{kind}</h3>
		</div>
		<ul class="mt-3">
			{#each filtered_projects as project}
				<li class="flex justify-between">
					<a href={project.link} target="_blank">
						<p
							class:truncate-name={project.tag != undefined}
							class="hover:underline cursor-pointer"
						>
							{project.name}
						</p>
					</a>
					{#if project.tag != undefined}
						<a
							href={project.tag.link || '#'}
							target="_blank"
							disabled={project.tag.link === undefined}
						>
							<p class="italic text-neutral-400 text-sm hover:underline">
								#{project.tag.label}
							</p>
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</Thumbnail>
{/if}

<!-- ========================= CSS -->
<style lang="postcss">
	.truncate-name {
		@apply max-w-[140px] truncate;
	}
</style>
