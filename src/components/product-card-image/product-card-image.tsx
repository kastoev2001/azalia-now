import { memo } from 'react';
import Image from 'next/image';
import styles from './ProductCardImage.module.css';

type ProductCardImageProps = {
	image: string,
}

function ProductCardImage({ image }: ProductCardImageProps): JSX.Element {
	const endPoint = image.lastIndexOf('.');
	const altImage: string = image.slice(endPoint)[0];

	return (
		<div className={styles['product-card__img-wrapper']}>
			<Image className={styles['product-card__img']} src={image} alt={altImage} fill />
		</div>
	)
}

export default memo(ProductCardImage);
