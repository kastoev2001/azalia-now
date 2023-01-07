import { AppRoute } from '../../const';
import Link from 'next/link';

import styles from './404.module.css';

function NotPage(): JSX.Element {
	return (
		<div className={styles['not-page']}>
			<div className={styles['not-page__content']}>
				<Link href={AppRoute.Root}>Перейти к главной странице</Link>
			</div>
		</div>
	);
}

export default NotPage;
