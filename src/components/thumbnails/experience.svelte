<!-- ========================= SCRIPT -->
<script lang="ts">
	import Thumbnail from '$components/containers/thumbnail.svelte';
	import type Experience from '$lib/experience';
	import months from '$db/constants/months';

	export let experience: Experience;
</script>

<!-- ========================= HTML -->
<Thumbnail background_url={experience.image}>
	<div class="mb-4">
		<a href={experience.link} target="_blank">
			<h3 class="inline-block truncate first-letter:uppercase hover:underline underline-offset-2">
				{experience.company}
			</h3>
		</a>
		<p class="text-neutral-200">{experience.job}</p>
		<p class="text-neutral-400 text-sm">
			{months[experience.start.getMonth()]}
			{experience.start.getFullYear()} - {experience.end === undefined
				? 'now'
				: `${months[experience.end.getMonth()]}
			${experience.end.getFullYear()}`}
		</p>
		<p class="text-neutral-400 text-sm">{experience.location} | {experience.contract}</p>
	</div>
	<p>{experience.description}</p>
	<ul class="mt-3">
		{#each experience.skills as skill}
			<li class="inline-block">
				<p class="italic text-neutral-400 inline-block text-sm">
					#{skill}&nbsp;&nbsp;
				</p>
			</li>
		{/each}
	</ul>
</Thumbnail>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
