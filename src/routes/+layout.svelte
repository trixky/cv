<!-- ========================= SCRIPT -->
<script lang="ts">
	import '../app.css';
	import Header from '$components/layer/header.svelte';
</script>

<!-- ========================= HTML -->
<Header />
<main class="w-2/3 m-auto">
	<slot />
</main>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
