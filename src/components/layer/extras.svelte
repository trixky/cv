<!-- ========================= SCRIPT -->
<script lang="ts">
	import external_links from '$db/external_links';
</script>

<!-- ========================= HTML -->
<div class="flex justify-around w-[180px] m-auto">
	<a href={external_links.linkedin} target="_blank">
		<img width="30px" src="/icons/linkedin.svg" alt="linkedin" />
	</a>
	<a href={external_links.github} target="_blank">
		<img width="30px" src="/icons/github.svg" alt="github" />
	</a>
	<img width="30px" class="hover:cursor-not-allowed" src="/icons/email.svg" alt="email" />
</div>

<!-- ========================= CSS -->
<style lang="postcss">
	img {
		@apply invert opacity-60 transition-all;
	}

	a > img {
		@apply hover:opacity-100;
	}
</style>
