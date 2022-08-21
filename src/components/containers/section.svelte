<!-- ========================= SCRIPT -->
<script lang="ts">
	export let title: string;
</script>

<!-- ========================= HTML -->
<section class="my-5">
	<h2 class="pb-3">{title}</h2>
	<hr />
	<div class="pt-3 flex flex-wrap">
		<slot />
	</div>
</section>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
