<!-- ========================= SCRIPT -->
<script lang="ts">
	import '../app.css';
	import Header from '$components/layer/header.svelte';
	import Footer from '$components/layer/footer.svelte';
</script>

<!-- ========================= HTML -->
<div class=" sticky top-0">
	<div class="titi absolute top-0 w-full h-[100vh]" />
</div>
<div class="pt-28">
	<Header />
	<main class="m-auto px-5 xs:px-0 xs:w-[var(--main-mdd-width)] mdd:w-[var(--main-lg-width)]">
		<slot />
	</main>
	<Footer />
</div>

<!-- ========================= CSS -->
<style lang="postcss">
	/* ===== Background ===== */
	.titi {
		background: linear-gradient(143deg, #66e3ff, #497cff, rgb(240, 87, 76));
		background-size: 600% 600%;

		-webkit-animation: AnimationName 38s ease infinite;
		-moz-animation: AnimationName 38s ease infinite;
		-o-animation: AnimationName 38s ease infinite;
		animation: AnimationName 38s ease infinite;
	}

	@-webkit-keyframes AnimationName {
		0% {
			background-position: 4% 0%;
		}
		50% {
			background-position: 97% 100%;
		}
		100% {
			background-position: 4% 0%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 4% 0%;
		}
		50% {
			background-position: 97% 100%;
		}
		100% {
			background-position: 4% 0%;
		}
	}
	@-o-keyframes AnimationName {
		0% {
			background-position: 4% 0%;
		}
		50% {
			background-position: 97% 100%;
		}
		100% {
			background-position: 4% 0%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 4% 0%;
		}
		50% {
			background-position: 97% 100%;
		}
		100% {
			background-position: 4% 0%;
		}
	}
</style>
