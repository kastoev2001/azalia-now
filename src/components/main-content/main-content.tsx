import ProductsList from '../products-list/products-list';

import { Products } from '../../types/products'
import { memo } from 'react';

import styles from './MainContent.module.css'

type MainContentProps = {
	products: Products,
};

function MainContent({ products }: MainContentProps): JSX.Element {
	return (
		<div className={styles['main']}>
			<div className={styles['container']}>
				<div className={styles['main__wrapper']}>
					<ProductsList products={products} />
				</div>
			</div>
		</div>
	)
}

export default memo(MainContent);
