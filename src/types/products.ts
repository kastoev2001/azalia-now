type Rating = {
	rate: number,
	count: number,
};

export type Product = {
	id: number,
	title: string,
	price: string,
	category: string,
	description: string,
	image: string,
	countComments: number,
	rating: Rating
};

export type Products = Product[];
