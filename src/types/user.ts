export type UserSelection = {
	productId: number,
	count?: number,
	isFavorite?: boolean,
};

export type UserAllSelection = UserSelection[];

export type User = {
	userAllSelection: UserAllSelection,
};
