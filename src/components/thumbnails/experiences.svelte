<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import experiences from '$db/experiences';
	import ExperienceThumbnail from '$components/thumbnails/experience.svelte';
</script>

<!-- ========================= HTML -->
<Section title="Experiences">
	{#each experiences as experience, index}
		<ExperienceThumbnail
			company={experience.company}
			location={experience.location}
			link={experience.link}
			skills={experience.skills}
		/>
	{/each}
</Section>
