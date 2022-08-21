import type Skill from './skill';

export default interface Experience {
	company: string;
	link: string;
	contract: string;
	description: string;
	location: string;
	skills: Skill[];
}
