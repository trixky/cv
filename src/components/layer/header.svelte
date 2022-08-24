<!-- ========================= SCRIPT -->
<script lang="ts">
	import Extras from '$components/layer/extras.svelte';
</script>

<!-- ========================= HTML -->
<header class="relative m-auto w-fit mb-12">
	<div class="w-full absolute -top-16">
		<div class="profile-picture m-auto" />
	</div>
	<div class="pt-[110px] mb-8">
		<div class="text-center mb-3">
			<h1>Mathis Bois</h1>
			<h2 class="text-lg">Developer full-stack | 42</h2>
		</div>
	</div>
	<Extras />
</header>

<!-- ========================= CSS -->
<style lang="postcss">
	.profile-picture {
		@apply w-36 h-36 rounded-full;
		background-image: url('/profile.jpeg');
		background-position: center;
		background-size: cover;
	}
</style>
