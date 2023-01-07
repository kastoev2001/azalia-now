import Favorite from '../favorite/favorite';
import ProductCardType from '../product-card-type/product-card-type';
import ProductCardImage from '../product-card-image/product-card-image';
import ProductCardTitle from '../product-card-text/product-card-title';
import ProductCardPrice from '../product-card-price/product-card-price';
import ProductCardButton from '../product-card-button/product-card-button';
import ProductCardPopular from '../product-card-popular/product-card-popular';
import Basket from '../basket/basket';
import Rating from '../rating/rating';
import Reviews from '../reviews/reviews';

import { Product } from '../../types/products';
import { useState, memo, useLayoutEffect, useRef } from 'react';
import { currencyConverter } from '../../utils/commands';
import { Currency } from '../../const';
import gsap from 'gsap';

import styles from './ProductCard.module.css'

type ProductCardProps = {
	product: Product,
}


function ProductCard({ product }: ProductCardProps): JSX.Element {
	const {
		id,
		title,
		price,
		category,
		image,
		rating
	} = product;
	const convertedPrice = currencyConverter(Number(price), Currency.USD);
	const defaultCount = 1;
	const { count: countComment, rate } = rating;
	const [count, useCount] = useState(defaultCount);
	const [isAddProduct, useIsAddProduct] = useState(false);
	const [isFavorite, useIsFavorite] = useState(false);

	const isCardPopular = countComment > 300;
	const productCardRef = useRef<HTMLDivElement | null>(null);

	const OnAddProduct = () => {
		useIsAddProduct(() => true);
	};
	const OnRemoveProduct = () => {
		useIsAddProduct(() => false);
	};
	const OnFavorite = (isFavorite: boolean): void => {
		useIsFavorite(() => isFavorite);
	};
	const OnCount = (count: number): void => {
		useCount(count);
	};

	useLayoutEffect(() => {
		const productCardElement = productCardRef.current;
		if (productCardElement) {
			const ctx = gsap.context(() => {
				gsap.from(productCardElement, {
					duration: 2,
					y: 200,
					opacity: 0,
				});
			});

			return () => ctx.revert();
		}
	}, []);

	return (
		<article ref={productCardRef} className={styles['product-card']}>
			<div className={styles['product-card__wrapper']}>
				<div className={styles['product-card__top']}>
					{isCardPopular ? <ProductCardPopular /> : null}
					<ProductCardImage image={image} />
					<ProductCardType category={category} />
					<Rating rating={rate} />
					<Reviews count={countComment} />
					<ProductCardTitle title={title} />
					<ProductCardPrice price={convertedPrice} />
				</div>
				<div className={styles['product-card__bottom']}>
					{isAddProduct
						? <ProductCardButton productId={id} isAddProduct={isAddProduct} onRemoveProduct={OnRemoveProduct} />
						: <Basket
							productId={id}
							onAddProduct={OnAddProduct}
							isFavorite={isFavorite}
							onCount={OnCount} count={count}
							isAddProduct={isAddProduct}
							defaultCount={defaultCount}
						/>
					}
					<Favorite isFavorite={isFavorite} onFavorite={OnFavorite} count={count} productId={id} />
				</div>
			</div>
		</article>
	);
}

export default memo(ProductCard);