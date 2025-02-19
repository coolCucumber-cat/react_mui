export enum AnimalKind {
	Giraffe,
	Zebra,
	Wolf,
	Panda,
	Lion,
	Cheetah,
	Elephant,
	Tiger,
	Bear,
	Kangaroo,
	Ant,
	Cockroach,
	Snake,
	Worm,
}

export interface Animal {
	name: string;
	price: string;
	kind: AnimalKind;
	birthday: Date | undefined;
}
