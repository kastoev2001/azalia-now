import { memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { addUserProduct } from '../../store/action';
import { UserSelection } from '../../types/user';

import styles from './Favorite.module.css';

type FavoriteProps = {
	isFavorite: boolean,
	count: number,
	productId: number,
	onFavorite: (isFavorite: boolean) => void,
};

const ClassFavorite = {
	FAVORITE: 'product-card__favorite',
	FAVORITE_ACTIVE: 'product-card__favorite--active',
} as const;

function Favorite(props: FavoriteProps): JSX.Element {
	const {
		isFavorite,
		count,
		productId,
		onFavorite
	} = props;
	const CLASS_FAVORITE = isFavorite ? ClassFavorite.FAVORITE_ACTIVE : ClassFavorite.FAVORITE;

	const dispatch = useAppDispatch();

	const handlerFavoriteClick = (): void => {
		const selection: UserSelection = {
			productId,
			isFavorite: !isFavorite,
		};

		dispatch(addUserProduct(selection));
		onFavorite(!isFavorite);
	};

	return (
		<span onClick={handlerFavoriteClick} className={styles[CLASS_FAVORITE]}></span>
	);
}

export default memo(Favorite);