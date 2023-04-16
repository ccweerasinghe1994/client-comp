type IResult = {
	pageid: number;
	title: string;
	extract: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
};

type ISearchResults = {
	query?: {
		pages?: IResult[];
	};
};
