<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import formations from '$db/formations';
	import FormationThumbnail from '$components/thumbnails/formation.svelte';
</script>

<!-- ========================= HTML -->
{#if formations.length > 0}
	<Section title={'Formation' + (formations.length > 1 ? 's' : '')}>
		{#each formations as formation}
			<FormationThumbnail {formation} />
		{/each}
	</Section>
{/if}
