import { defineRating } from '../../utils/commands';

import styles from './Rating.module.css';

type RatingProps = {
  rating: number,
};

function Rating({ rating }: RatingProps): JSX.Element {
  const definedRating = defineRating(rating);

  return (
    <div className={styles['product-card__rating']}>
      <div className={styles['product-card__stars']}>
        <span style={{ width: `${definedRating}%` }} className={styles['products-card__rating-count']}></span>
      </div>
    </div>
  );
}

export default Rating;