<!-- ========================= SCRIPT -->
<script lang="ts">
	import external_links from '$db/external_links';
	import { fly } from 'svelte/transition';

	export let reverse = false;
	$: _reverse = reverse ? -1 : 1;
	let copied = false;
	let copied_nbr = 0;

	function handleEmail() {
		const current_copied_nbr = ++copied_nbr;

		copied = true;
		navigator.clipboard.writeText(external_links.email);
		setTimeout(() => {
			if (current_copied_nbr === copied_nbr) copied = false;
		}, 2000);
	}
</script>

<!-- ========================= HTML -->
<div class="flex justify-around w-[180px] m-auto">
	<a href={external_links.linkedin} target="_blank">
		<img width="30px" src="/icons/linkedin.svg" alt="linkedin" />
	</a>
	<a href={external_links.github} target="_blank">
		<img width="30px" src="/icons/github.svg" alt="github" />
	</a>
	<div class="relative">
		<img
			width="30px"
			on:click={handleEmail}
			class="hover:cursor-pointer"
			src="/icons/email.svg"
			alt="email"
		/>
		{#if copied}
			<p
				in:fly={{ y: 3 * _reverse, duration: 300 }}
				out:fly={{ y: -3 * _reverse, duration: 2000 }}
				class="absolute -left-[6px] {reverse ? '-top-[22px]' : '-bottom-[22px]'} text-sm"
			>
				copied
			</p>
		{/if}
	</div>
</div>

<!-- ========================= CSS -->
<style lang="postcss">
	img {
		@apply invert opacity-60 hover:opacity-100 transition-all;
	}
</style>
