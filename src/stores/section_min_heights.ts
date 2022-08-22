import { writable } from 'svelte/store';

function createCurrentRoomStore() {
	const { subscribe, update } = writable(<
		{
			experiences: number | undefined;
			skill_kinds: number | undefined;
		}
	>{
		experiences: undefined,
		skill_kinds: undefined
	});

	return {
		subscribe,
		setExperiencesMinHeight: (min_height: number) => {
			update((min_heights) => {
				min_heights.experiences = min_height;
				return min_heights;
			});
		},
		setSkillKindsMinHeight: (min_height: number) => {
			update((min_heights) => {
				min_heights.skill_kinds = min_height;
				return min_heights;
			});
		}
	};
}

export default createCurrentRoomStore();
