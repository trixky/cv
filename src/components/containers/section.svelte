<!-- ========================= SCRIPT -->
<script lang="ts">
	export let title: string;
</script>

<!-- ========================= HTML -->
<section class="relative my-2 py-1">
	<div class="px-[var(--thumbnail-margin-double)]">
		<h2>{title}</h2>
		<hr class="mt-3" />
	</div>
	<div
		class="px-[var(--thumbnail-margin)] pt-6 flex items-start flex-wrap overflow-x-auto overflow-y-visible border-x-0 pb-[15px]"
	>
		<slot />
	</div>
</section>
