<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import skill_kinds from '$db/skill_kinds';
	import SkillKindThumbnail from '$components/thumbnails/skill_kind.svelte';
</script>

<!-- ========================= HTML -->
<Section title="Skills">
	{#each skill_kinds as skill_kind, index}
		<SkillKindThumbnail kind={skill_kind} />
	{/each}
</Section>
