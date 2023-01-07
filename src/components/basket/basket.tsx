import Augment from '../augment/augment';

import gsap from 'gsap'
import { useRef, useLayoutEffect } from 'react';
import { addUserProduct } from '../../store/action';
import { useAppDispatch } from '../../hooks';

import styles from './Basket.module.css';
import { UserSelection } from '../../types/user';

type Basket = {
  productId: number,
  isFavorite: boolean,
  count: number,
  defaultCount: number,
  isAddProduct: boolean,
  onAddProduct: () => void,
  onCount: (count: number) => void,
};

function Basket(props: Basket): JSX.Element {
  const {
    productId,
    count,
    defaultCount,
    isFavorite,
    isAddProduct,
    onAddProduct,
    onCount,
  } = props;
  const basketRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const basketElement = basketRef.current;
    if (!isAddProduct) {
      const ctx = gsap.context(() => {
        gsap.from(basketElement, {
          duration: .25,
          left: 50,
          opacity: 0,
        })
      })
      return () => ctx.revert();
    }
  }, [isAddProduct])

  const OnCountLess = (): void => {
    const newCountProduct = count - 1;

    if (count <= defaultCount) {
      onCount(count);
      return;
    }
    onCount(newCountProduct);
  };

  const OnCountMore = (): void => {
    const newCountProduct = count + 1;

    onCount(newCountProduct);
  };
  const HandlerButtonClick = () => {
    const basketElement = basketRef.current;
    const selection: UserSelection = {
      productId,
      count,
      isFavorite
    }

    if (basketElement) {
      gsap
        .to(basketElement, {
          duration: .25,
          opacity: 0,
          left: 50,
          onComplete() {
            console.log('basket')
            dispatch(addUserProduct(selection));
            onAddProduct();
          }
        });
    };
  }

  return (
    <div ref={basketRef} className={styles['basket']}>
      <button className={styles['basket__button']} onClick={HandlerButtonClick}>В корзину</button>
      <Augment onCountMore={OnCountMore} onCountless={OnCountLess} count={count} />
    </div>
  )
}

export default Basket;