import { memo } from 'react';

import styles from './ProductCardPopular.module.css';

function ProductCardPopular(): JSX.Element {
	return (
		<span className={styles['product-card__popular']}></span>
	);
}

export default memo(ProductCardPopular);