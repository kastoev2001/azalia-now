import styles from './Reviews.module.css';

type ReviewsProps = {
	count: number,
};

function Reviews({ count }: ReviewsProps): JSX.Element {
	return (
		<span className={styles['product-card__reviews']}>{count} отзыва</span>
	);
}

export default Reviews;