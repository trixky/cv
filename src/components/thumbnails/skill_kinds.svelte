<!-- ========================= SCRIPT -->
<script lang="ts">
	import Section from '$components/containers/section.svelte';
	import skill_kinds from '$db/kinds/skills';
	import SkillKindThumbnail from '$components/thumbnails/skill_kind.svelte';
</script>

<!-- ========================= HTML -->
{#if skill_kinds.length > 0}
	<Section title="Skills">
		{#each skill_kinds as kind}
			<SkillKindThumbnail {kind} />
		{/each}
	</Section>
{/if}
