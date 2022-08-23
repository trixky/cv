<!-- ========================= SCRIPT -->
<script lang="ts">
	import '../app.css';
	import Header from '$components/layer/header.svelte';
	import Footer from '$components/layer/footer.svelte';
</script>

<!-- ========================= HTML -->
<Header />
<main class="m-auto px-5 xs:px-0 xs:w-[var(--main-mdd-width)] mdd:w-[var(--main-lg-width)]">
	<slot />
</main>
<Footer />
