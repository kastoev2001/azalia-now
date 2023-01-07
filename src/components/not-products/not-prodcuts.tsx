import styles from './NotProdcuts.module.css';

function NotProducts(): JSX.Element {
	return <h3 className={styles['not-products']}>There are no products on the page</h3>;
}

export default NotProducts;