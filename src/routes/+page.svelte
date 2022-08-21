<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import Experience from '$components/thumbnails/experience.svelte';
	import experiences from '$db/experiences';
</script>

<!-- ========================= HTML -->
<Section title="Experience">
	{#each experiences as experience}
		<Experience
			company={experience.company}
			location={experience.location}
			link={experience.link}
			skills={experience.skills}
		/>
	{/each}
</Section>
<Section title="Toto" />

<!-- ========================= CSS -->
<style lang="postcss">
</style>
