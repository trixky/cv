export default interface Project {
	name: string;
	link: string;
	image: string | undefined;
	kind: string;
	tag:
		| {
				label: string;
				link: string | undefined;
		  }
		| undefined;
}
