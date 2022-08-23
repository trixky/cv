import type Experience from '$lib/experience';

export default <Experience[]>[
	{
		company: 'AnotherBrain',
		job: 'AI developer',
		contract: 'Freelance',
		start: new Date(2021, 10),
		end: new Date(2022, 2),
		description:
			"AnotherBrain développe une nouvelle génération d’intelligence artificielle qu'est l’Organic AI™.",
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: ['python', 'numpy', 'matplotlib'],
		image: undefined
	},
	{
		company: 'Optimum Automotive',
		job: 'Mobile developer',
		contract: 'Freelance',
		start: new Date(2021, 0),
		end: new Date(2021, 3),
		description:
			"Optimisation et verdissement de la flotte automobile autour d'une plateforme SaaS de pilotage et de conseils.",
		link: 'https://www.optimum-automotive.com/',
		location: 'Aix-en-Provence',
		skills: ['react native'],
		image: undefined
	},
	{
		company: 'Zaion',
		job: 'Back-end developer',
		contract: 'Stage',
		start: new Date(2020, 6),
		end: new Date(2020, 10),
		description:
			"Zaion révolutionne l'expérience client par la voix et l'intelligence artificielle.",
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: ['express', 'mongodb', 'redis', 'socket.io'],
		image: undefined
	}
];
