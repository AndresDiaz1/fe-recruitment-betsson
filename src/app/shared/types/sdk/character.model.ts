// We provide you with all the models needed from the mock file. You will need only the name, url and id of each item for the final data.

export interface AppState {
	characters: CharacterState;
}

export interface CharacterState {
	list: Character[];
}

export interface Powerstats {
	intelligence: string;
	strength: string;
	speed: string;
	durability: string;
	power: string;
	combat: string;
}

export interface Biography {
	fullName: string;
	alterEgos: string;
	aliases: string[];
	placeOfBirth: string;
	firstAppearance: string;
	publisher: string;
	alignment: string;
}

export interface Appearance {
	gender: string;
	race: string;
	height: string[];
	weight: string[];
	eyeColor: string;
	hairColor: string;
}

export interface Work {
	occupation: string;
	base: string;
}

export interface Connections {
	groupAffiliation: string;
	relatives: string;
}

export interface Image {
	url: string;
}

export interface Character {
	id: string;
	name: string;
	powerstats: Powerstats;
	biography: Biography;
	appearance: Appearance;
	work: Work;
	connections: Connections;
	image: Image;
}

