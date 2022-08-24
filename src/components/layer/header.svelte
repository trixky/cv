<!-- ========================= SCRIPT -->
<script lang="ts">
	import profile from '$db/profile';
	import Extras from '$components/layer/extras.svelte';
</script>

<!-- ========================= HTML -->
<header class="relative m-auto w-fit mb-10">
	<div class="w-full absolute -top-16">
		<div class="profile-picture m-auto" />
	</div>
	<div class="pt-[110px] mb-8">
		<div class="text-center mb-3">
			<h1>
				<span class="first-letter:capitalize">{profile.firstname}</span>&nbsp;<span
					class="first-letter:capitalize">{profile.lastname}</span
				>
			</h1>
			<h2 class="text-lg">{profile.titles.join(' | ')}</h2>
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
