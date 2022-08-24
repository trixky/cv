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
			<h3 class="first-letter:uppercase">{kind}</h3>
		</div>
		<ul>
			{#each filtered_projects as project}
				<li class="flex justify-between">
					<a href={project.link} target="_blank">
						<p
							class:truncate-name={project.link != undefined}
							class="hover:underline cursor-pointer"
						>
							{project.name}
						</p>
					</a>
					{#if project.online != undefined}
						<a href={project.online} target="_blank">
							<img
								width="16px"
								height="16px"
								src="/icons/link.svg"
								class="invert opacity-60 hover:opacity-100 transition-all translate-y-[3px]"
								alt="link"
							/>
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
		@apply max-w-[170px] truncate;
	}
</style>
