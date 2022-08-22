import type Project from '$lib/project';
import project_kinds from '$db/kinds/projects';

export default <Project[]>[
	// ----------------------------- web
	{
		name: 'matcha',
		link: 'https://github.com/trixky/matcha',
		image:
			'https://camo.githubusercontent.com/fc18386a1693ad0e647380353a714c47f83ee8a8e42a07e0b5802bd84a535ace/68747470733a2f2f692e6962622e636f2f744d4230594a6e2f657a6769662d636f6d2d6769662d6d616b65722d312e676966',
		kind: project_kinds[0],
		tag: undefined
	},
	{
		name: 'hypertube',
		link: 'https://github.com/trixky/hypertube',
		image: 'https://raw.githubusercontent.com/trixky/hypertube/main/.demo/login.gif',
		kind: project_kinds[0],
		tag: {
			label: 'online',
			link: 'https://hypertube.trixky.com'
		}
	},
	{
		name: 'tetris',
		link: 'https://github.com/trixky/hypertube',
		image: 'https://github.com/Glagan/42-red-tetris/raw/master/resources/themes.gif',
		kind: project_kinds[0],
		tag: {
			label: 'online',
			link: 'https://github.com/Glagan/42-red-tetris'
		}
	}
];
