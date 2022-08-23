export default interface Formation {
	label: string;
	details: string | undefined;
	location: string;
	date: Date;
	in_progress: boolean;
	link: string | undefined;
	description: string;
	extra: string | undefined;
}
