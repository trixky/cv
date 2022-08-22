<!-- ========================= SCRIPT -->
<script lang="ts">
	import '../app.css';
	import Header from '$components/layer/header.svelte';
</script>

<!-- ========================= HTML -->
<Header />
<main class="m-auto min-w-[270px] w-[var(--main-width)]">
	<slot />
</main>
