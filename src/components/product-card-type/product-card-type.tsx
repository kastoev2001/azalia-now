import { memo } from 'react'

import styles from './ProductCartType.module.css';

type ProductCardTypeProps = {
	category: string,
};

function ProductCardType({ category }: ProductCardTypeProps): JSX.Element {
	return (
		<span className={styles['product-card__type']}>{category}</span>
	)
}

export default memo(ProductCardType);