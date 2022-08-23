<!-- ========================= SCRIPT -->
<script lang="ts">
	import Thumbnail from '$components/containers/thumbnail.svelte';
	import skills from '$db/skills';

	export let kind: string;
</script>

<!-- ========================= HTML -->
<Thumbnail>
	<div class="mb-3">
		<h3>{kind}</h3>
	</div>
	<ul class="mt-3">
		{#each skills as skill}
			{#if skill.kind === kind}
				<li class="flex justify-between">
					<p class="inline-block hover:underline cursor-pointer">
						{skill.name}
					</p>
					<p class="inline-block">
						{new Array(skill.note).fill('*').join('')}<span class="opacity-20"
							>{new Array(5 - skill.note).fill('*').join('')}</span
						>
					</p>
				</li>
			{/if}
		{/each}
	</ul>
</Thumbnail>
