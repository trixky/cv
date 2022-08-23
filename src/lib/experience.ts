import type Skill from './skill';

export default interface Experience {
	company: string;
	job: string;
	link: string;
	contract: string;
	start: Date;
	end: Date | undefined;
	description: string;
	location: string;
	skills: string[];
	image: string | undefined;
}
