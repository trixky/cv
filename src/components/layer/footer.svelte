<!-- ========================= SCRIPT -->
<script lang="ts">
	import Extras from '$components/layer/extras.svelte';
</script>

<!-- ========================= HTML -->
<footer class="relative m-auto w-fit mt-8 mb-8">
	<Extras />
</footer>

<!-- ========================= CSS -->
<style lang="postcss">
	.profile-picture {
		@apply w-36 h-36 rounded-full;
		background-image: url('/profile.jpeg');
		background-position: center;
		background-size: cover;
	}
</style>
