import type Experience from '$lib/experience';
import type Skill from '$lib/skill';
import skills from '$db/skills';

export default <Experience[]>[
	{
		company: 'Zaion',
		contract: 'Stage',
		description: 'asdfa asd fas fasd fsdfs afsd fasd fasd fs df sad fds ds fasd fasd fsa dfs df',
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: <Skill[]>[
			{
				name: 'javascript',
				note: 8,
				image: 'string'
			},
			{
				name: 'node.js',
				note: 7,
				image: 'string'
			}
		]
	},
	{
		company: 'Zaion',
		contract: 'Stage',
		description: 'asdfa asd fas fasd fsdfs afsd fasd fasd fs df sad fds ds fasd fasd fsa dfs df',
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: <Skill[]>[
			{
				name: 'javascript',
				note: 8,
				image: 'string'
			},
			{
				name: 'node.js',
				note: 7,
				image: 'string'
			},
			{
				name: 'svelte.js',
				note: 7,
				image: 'string'
			}
		]
	},
	{
		company: 'Zaion',
		contract: 'Stage',
		description: 'asdfa asd fas fasd fsdfs afsd fasd fasd fs df sad fds ds fasd fasd fsa dfs df',
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: <Skill[]>[
			{
				name: 'javascript',
				note: 8,
				image: 'string'
			},
			{
				name: 'node.js',
				note: 7,
				image: 'string'
			}
		]
	}
];
