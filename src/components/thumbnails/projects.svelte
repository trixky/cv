<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import project_kinds from '$db/kinds/projects';
	import Projecthumbnail from '$components/thumbnails/project.svelte';
</script>

<!-- ========================= HTML -->
{#if project_kinds.length > 0}
	<Section title="Projects">
		{#each project_kinds as kind}
			<Projecthumbnail {kind} />
		{/each}
	</Section>
{/if}
