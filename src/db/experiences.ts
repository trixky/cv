import type Experience from '$lib/experience';

export default <Experience[]>[
	{
		company: 'AnotherBrain',
		job: 'AI developer',
		contract: 'Freelance',
		start: new Date(2021, 10),
		end: new Date(2022, 2),
		description:
			'AnotherBrain develops a new generation of artificial intelligence that is Organic AI™.',
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
			'Optimization and management of the car fleet around a SaaS platform for management and advice.',
		link: 'https://www.optimum-automotive.com/',
		location: 'Aix-en-Provence',
		skills: ['react native'],
		image: undefined
	},
	{
		company: 'Zaion',
		job: 'Back-end developer',
		contract: 'Internship',
		start: new Date(2020, 6),
		end: new Date(2020, 10),
		description:
			'Zaion revolutionizes the customer experience through voice and artificial intelligence.',
		link: 'https://zaion.ai/',
		location: 'Paris',
		skills: ['express', 'mongodb', 'redis', 'socket.io'],
		image: undefined
	}
];
