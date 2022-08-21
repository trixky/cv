<!-- ========================= SCRIPT -->
<script lang="ts">
	import '../app.css';
	import Header from '$components/layer/header.svelte';
</script>

<!-- ========================= HTML -->
<Header />
<main class="w-[80%] m-auto min-w-[270px]">
	<slot />
</main>

<!-- ========================= CSS -->
<style lang="postcss">
</style>
