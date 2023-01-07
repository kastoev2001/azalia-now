import { memo } from 'react';

import styles from './ProductCardTitle.module.css';

type ProductCardTitleProps = {
	title: string,
};

function ProductCardTitle({ title }: ProductCardTitleProps): JSX.Element {
	return (
		<h3 className={styles['product-card__title']}>{title}</h3>
	);
}

export default memo(ProductCardTitle);