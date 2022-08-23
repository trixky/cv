<!-- ========================= SCRIPT -->
<script lang="ts">
	import type Skill from '$lib/skill';
	import Thumbnail from '$components/containers/thumbnail.svelte';

	export let company: string;
	export let location: string;
	export let link: string;
	export let skills: Skill[];
</script>

<!-- ========================= HTML -->
<Thumbnail>
	<div class="mb-4">
		<a href={link} target="_blank">
			<h3>{company}</h3>
		</a>
		<p class="text-neutral-200">Back-end developer</p>
		<p class="text-neutral-400 text-sm">03/2019 - 05/2019</p>
		<p class="text-neutral-400 text-sm">{location} | stage</p>
	</div>
	<p>asdfasdfasfdsdf sdf sdf sf sdfs f sfd sdf sdf sf sdfs df sdf sdfs dfs dfs df sdf</p>
	<ul class="mt-3">
		{#each skills as skill}
			<li class="inline-block">
				<p class="italic text-neutral-400 inline-block text-sm">
					#{skill.name}&nbsp;&nbsp;
				</p>
			</li>
		{/each}
	</ul>
</Thumbnail>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
