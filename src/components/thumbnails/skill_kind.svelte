<!-- ========================= SCRIPT -->
<script lang="ts">
	import Thumbnail from '$components/containers/thumbnail.svelte';
	import skills from '$db/skills';
	import { _ } from '$env/static/private';

	export let kind: string;

	function generateStars(note: number) {
		return new Array(5).fill(true).map((_, index) => index < note);
	}
</script>

<!-- ========================= HTML -->
<Thumbnail>
	<div class="mb-3">
		<h3 class="first-letter:uppercase">{kind}</h3>
	</div>
	<ul class="mt-3">
		{#each skills as skill}
			{#if skill.kind === kind}
				<li class="flex justify-between">
					<p class="inline-block">
						{skill.name}
					</p>
					<div class="text-left -translate-y-[2px]">
						{#each generateStars(skill.note) as on}
							<img
								width="11px"
								height="11px"
								src="/icons/star.svg"
								class:on
								class="inline-block invert opacity-20"
								alt="link"
							/>
						{/each}
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</Thumbnail>

<!-- ========================= CSS -->
<style lang="postcss">
	img.on {
		@apply opacity-100;
	}
</style>
