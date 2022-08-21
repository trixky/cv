import type Skill from '$lib/skill';
import skill_kinds from '$db/skill_kinds';

export default <Skill[]>[
	// ----------------------------- languages
	{
		image: '/static/skills/languages/javascript.png',
		name: 'javascript',
		note: 10,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/typescript.svg',
		name: 'typescript',
		note: 9,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/golang.png',
		name: 'golang',
		note: 9,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/c.png',
		name: 'c',
		note: 9,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/cpp.png',
		name: 'c++',
		note: 8,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/bash.png',
		name: 'bash',
		note: 6,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/python.jpg',
		name: 'python',
		note: 7,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/ruby.png',
		name: 'ruby',
		note: 6,
		kind: skill_kinds[0]
	},
	{
		image: '/static/skills/languages/php.png',
		name: 'php',
		note: 6,
		kind: skill_kinds[0]
	},
	// ----------------------------- frameworks
	{
		image: '/static/skills/frameworks/svelte.png',
		name: 'svelte',
		note: 10,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/express.png',
		name: 'express',
		note: 10,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/gin.jpeg',
		name: 'gin',
		note: 9,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/react.png',
		name: 'react/native',
		note: 8,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/flutter.png',
		name: 'flutter',
		note: 3,
		kind: skill_kinds[1]
	},
	{
		image: '/static/skills/frameworks/rails.png',
		name: 'rails',
		note: 3,
		kind: skill_kinds[1]
	},
	// ----------------------------- databases
	{
		image: '/static/skills/databases/postgresql.png',
		name: 'postgresql',
		note: 9,
		kind: skill_kinds[2]
	},
	{
		image: '/static/skills/databases/mongodb.png',
		name: 'mongodb',
		note: 9,
		kind: skill_kinds[2]
	},
	{
		image: '/static/skills/databases/redis.png',
		name: 'redis',
		note: 10,
		kind: skill_kinds[2]
	},
	// ----------------------------- archi/devops
	{
		image: '/static/skills/archi-devops/git.png',
		name: 'git',
		note: 9,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/docker.webp',
		name: 'docker',
		note: 9,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/docker-compose.png',
		name: 'docker-compose',
		note: 9,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/ansible.png',
		name: 'ansible',
		note: 10,
		kind: skill_kinds[3]
	},
	{
		image: '/static/skills/archi-devops/kubernetes.webp',
		name: 'kubernetes',
		note: 4,
		kind: skill_kinds[3]
	}
];
