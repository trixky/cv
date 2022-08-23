<!-- ========================= SCRIPT -->
<script lang="ts">
	import type Formation from '$lib/formation';
	import Thumbnail from '$components/containers/thumbnail.svelte';

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	export let formation: Formation;
</script>

<!-- ========================= HTML -->
<Thumbnail>
	<div>
		<div class="">
			<a href={formation.link} target="_blank">
				<h3 class="inline-block">{formation.label}</h3>
			</a>
			{#if formation.details != undefined}
				<p class="text-neutral-400 text-sm inline-block ml-1">
					{formation.details}
				</p>
			{/if}
		</div>
		<p class="text-sm text-neutral-400">
			{formation.location} | {months[formation.date.getMonth()]}
			{formation.date.getFullYear()}{formation.in_progress ? ' - now' : ''}
		</p>
		<p class="mt-3">{formation.description}</p>
		{#if formation.extra != undefined}
			<p class="text-sm text-neutral-400 mt-2">{formation.extra}</p>
		{/if}
	</div>
</Thumbnail>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
