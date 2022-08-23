import type Skill from '$lib/skill';
import skill_kinds from '$db/kinds/skills';

export default <Skill[]>[
	// ----------------------------- languages
	{
		image: '/static/skills/languages/typescript.png',
		name: 'typescript',
		note: 5,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/golang.png',
		name: 'golang',
		note: 4,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/c.png',
		name: 'c',
		note: 5,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/cpp.png',
		name: 'c++',
		note: 4,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/bash.png',
		name: 'bash',
		note: 3,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/python.jpg',
		name: 'python',
		note: 4,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/ruby.png',
		name: 'ruby',
		note: 3,
		kind: skill_kinds[0]
	},
	// ----------------------------- frameworks
	{
		image: '/static/skills/frameworks/svelte.png',
		name: 'svelte',
		note: 5,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/express.png',
		name: 'express',
		note: 5,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/gin.jpeg',
		name: 'gin',
		note: 4,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/react.png',
		name: 'react/native',
		note: 4,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/tailwind.png',
		name: 'tailwind',
		note: 5,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/flutter.png',
		name: 'flutter',
		note: 2,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/rails.png',
		name: 'rails',
		note: 2,
		kind: skill_kinds[1]
	},
	// ----------------------------- databases
	{
		image: '/static/skills/databases/postgresql.png',
		name: 'postgresql',
		note: 4,
		kind: skill_kinds[2]
	},
	{
		image: '/static/skills/databases/mongodb.png',
		name: 'mongodb',
		note: 4,
		kind: skill_kinds[2]
	},
	{
		image: '/static/skills/databases/redis.png',
		name: 'redis',
		note: 5,
		kind: skill_kinds[2]
	},
	// ----------------------------- archi/devops
	{
		image: '/static/skills/archi-devops/git.png',
		name: 'git',
		note: 4,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/docker.webp',
		name: 'docker',
		note: 4,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/docker-compose.png',
		name: 'docker-compose',
		note: 4,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/ansible.png',
		name: 'ansible',
		note: 5,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/kubernetes.webp',
		name: 'kubernetes',
		note: 2,
		kind: skill_kinds[3]
	},
	{
		image: undefined,
		name: 'elkb',
		note: 2,
		kind: skill_kinds[3]
	},
	{
		image: undefined,
		name: 'grafana',
		note: 3,
		kind: skill_kinds[3]
	},
	{
		image: undefined,
		name: 'prometheus',
		note: 2,
		kind: skill_kinds[3]
	},
	// ----------------------------- misc
	{
		image: undefined,
		name: 'socket.io',
		note: 4,
		kind: skill_kinds[4]
	},
	{
		image: undefined,
		name: 'grpc',
		note: 4,
		kind: skill_kinds[4]
	},
	{
		image: undefined,
		name: 'numpy',
		note: 3,
		kind: skill_kinds[4]
	},
	{
		image: undefined,
		name: 'matplotlib',
		note: 3,
		kind: skill_kinds[4]
	}
];
