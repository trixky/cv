<!-- ========================= SCRIPT -->
<script lang="ts">
	export let title: string;
	export let stretch: boolean = false;
</script>

<!-- ========================= HTML -->
<section class="relative max-w-[360px] xs:max-w-none m-auto mt-4">
	<div class="px-[var(--thumbnail-margin-double)]">
		<h2>{title}</h2>
		<hr class="mt-3" />
	</div>
	<div
		class="px-[var(--thumbnail-margin)] flex flex-col content-center xs:flex-row {stretch
			? 'items-stretch'
			: 'items-start'} flex-wrap border-x-0 py-[15px]"
	>
		<slot />
	</div>
</section>
