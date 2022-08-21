<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import ExperienceThumbnail from '$components/thumbnails/experience.svelte';
	import SkillKindThumbnail from '$components/thumbnails/skill_kind.svelte';
	import experiences from '$db/experiences';
	import skill_kinds from '$db/skill_kinds';
</script>

<!-- ========================= HTML -->
<Section title="Experiences">
	{#each experiences as experience}
		<ExperienceThumbnail
			company={experience.company}
			location={experience.location}
			link={experience.link}
			skills={experience.skills}
		/>
	{/each}
</Section>
<Section title="Skills">
	{#each skill_kinds as skill_kind}
		<SkillKindThumbnail kind={skill_kind} />
	{/each}
</Section>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
