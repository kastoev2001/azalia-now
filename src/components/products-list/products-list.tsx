import ProductCard from '../product-card/product-card';
import Banner from '../banner/banner';
import styles from '../../styles/Home.module.css';

import { Products } from '../../types/products';
import { useRef, useEffect, memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getIsProductsStatus } from '../../store/products-process/products-selector';
import gsap from 'gsap';
import NotProducts from '../not-products/not-prodcuts';

type ProductListProps = {
	products: Products,
};

function ProductsList({ products }: ProductListProps): JSX.Element {
	const productsStatus = useAppSelector(getIsProductsStatus)
	const mainLeftRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mainLeftElement = mainLeftRef.current;
		const ctx = gsap.context(() => {
			gsap.from(mainLeftElement, {
				duration: 2,
				x: -200,
				opacity: 0,
			})
		})

		return () => ctx.revert();
	}, []);

	return (
		<div className={styles['products']}>
			<div className={styles['products__wrapper']}>
				<div className={styles['products__list']}>
					<div ref={mainLeftRef} className={styles['main__left']}>
						<h1 className={styles['title']}>Все для комфортной работы</h1><span className={styles['arrow']}></span>
						<Banner />
					</div>
					{productsStatus.isRejected
						? <NotProducts />
						: products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))
					}
				</div>
			</div>
		</div>
	)
}

export default memo(ProductsList);
