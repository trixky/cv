<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import experiences from '$db/experiences';
	import ExperienceThumbnail from '$components/thumbnails/experience.svelte';
</script>

<!-- ========================= HTML -->
{#if experiences.length > 0}
	<Section title={'Experience' + (experiences.length > 1 ? 's' : '')}>
		{#each experiences as experience}
			<ExperienceThumbnail
				company={experience.company}
				location={experience.location}
				link={experience.link}
				skills={experience.skills}
			/>
		{/each}
	</Section>
{/if}
