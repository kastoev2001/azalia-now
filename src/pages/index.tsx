import MainContent from '../components/main-content/main-content';
import Loading from '../components/loading/loading';

import { useAppSelector } from '../hooks';
import { getIsProductsStatus, getProducts } from '../store/products-process/products-selector';

import styles from './Home.module.css'

export default function Home() {
	const products = useAppSelector(getProducts);
	const productsStatus = useAppSelector(getIsProductsStatus);

	return (
		<>
			<div className={styles['page']}>
				{productsStatus.isLoaded ? <Loading /> : <MainContent products={products} />}
			</div>
		</>
	);
}
