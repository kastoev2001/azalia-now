import { useState } from 'react';

import styles from './Augment.module.css';

type Augment = {
	onCountMore: () => void,
	onCountless: () => void,
	count: number,
}

function Augment(props: Augment): JSX.Element {
	const {
		onCountMore,
		onCountless,
		count,
	} = props;
	const HandlerLessClick = (): void => {
		onCountless();
	};

	const HandlerMoreClick = (): void => {
		onCountMore();
	};

	return (
		<div className={styles['basket__augment']}>
			<span className={styles['basket__less']} onClick={HandlerLessClick}></span>
			<span className={styles['basket__count']}>{count}</span>
			<span className={styles['basket__more']} onClick={HandlerMoreClick}></span>
		</div>
	);
}

export default Augment;
