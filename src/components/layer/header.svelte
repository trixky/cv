<!-- ========================= SCRIPT -->
<script lang="ts">
	import Thumbnail from '$components/containers/thumbnail.svelte';
	import external_links from '$db/external_links';
</script>

<!-- ========================= HTML -->
<header class="relative m-auto w-fit mt-32 mb-12">
	<div class="w-full absolute -top-16">
		<div class="profile-picture m-auto" />
	</div>
	<div class="pt-[110px]">
		<div class="text-center mb-3">
			<h1>Mathis Bois</h1>
			<h2 class="text-lg">Developer full-stack | 42</h2>
		</div>
	</div>
	<div class="flex justify-around mt-6 w-[180px] m-auto">
		<a href={external_links.linkedin} target="_blank">
			<img width="30px" src="/icons/linkedin.svg" alt="linkedin" />
		</a>
		<a href={external_links.github} target="_blank">
			<img width="30px" src="/icons/github.svg" alt="github" />
		</a>
		<img width="30px" class="hover:cursor-not-allowed" src="/icons/email.svg" alt="email" />
	</div>
</header>

<!-- ========================= CSS -->
<style lang="postcss">
	.profile-picture {
		@apply w-36 h-36 rounded-full;
		background-image: url('/profile.jpeg');
		background-position: center;
		background-size: cover;
	}

	img {
		@apply invert opacity-60 transition-all;
	}

	a > img {
		@apply hover:opacity-100;
	}
</style>
