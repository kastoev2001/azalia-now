import styles from './Banner.module.css';

function Banner(): JSX.Element {
	return (
		<div className={styles['banner']}>
			<div className={styles['banner__wrapper']}>
				<div className={styles['banner__list']}>
					<article className={styles['banner-card']}>
						<div className={styles['banner-card__text-wrapper']}>
							<p className={styles['banner-card__text']}>
								<span className={styles['discount']}>
									<span className={styles['discount__text']}>- 25%</span>
								</span><br />на товары для кабинета
							</p><a className={styles['banner-card__link']}>Выбрать</a>
						</div>
					</article>
					<article className={styles['banner-card']}>
						<div className={styles['banner-card__text-wrapper']}>
							<p className={styles['banner-card__text']}>
								Скидка
								<span className={styles['discount']}>
									<span className={styles['discount__text']}>10%</span>
								</span> на периферию для компьютера
							</p>
							<a className={styles['banner-card__link']}>Выбрать</a>
						</div>
					</article>
				</div>
			</div>
		</div>
	)
}

export default Banner;