<!-- ========================= SCRIPT -->
<script lang="ts">
	import type Skill from '$lib/skill';

	export let company: string;
	export let location: string;
	export let link: string;
	export let skills: Skill[];
</script>

<!-- ========================= HTML -->
<div class="bg-black bg-opacity-70 w-56 p-4 pt-3 m-2 rounded-md @apply shadow-black shadow-md">
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
			<p class="italic text-neutral-400 inline-block text-sm px-1">#{skill.name}</p>
		{/each}
	</ul>
</div>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
