import { memo } from 'react';

import styles from './ProductCardPrice.module.css';

type ProductCardPriceProps = {
	price: number,
};

function ProductCardPrice({ price }: ProductCardPriceProps): JSX.Element {
	return (
		<span className={styles['product-card__price']}>{price} ₽<span className={styles['prduct-card__amount']}>/шт.</span></span>
	)
}

export default memo(ProductCardPrice);