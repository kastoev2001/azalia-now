import styles from './ProductCardButton.module.css';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { removeUserProduct } from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { UserSelection } from '../../types/user';

type ProudctCardButtonProps = {
  productId: number
  isAddProduct: boolean,
  onRemoveProduct: () => void,
};

function ProductCardButton(props: ProudctCardButtonProps): JSX.Element {
  const {
    productId,
    isAddProduct,
    onRemoveProduct,
  } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const buttonElement = buttonRef.current;
    if (isAddProduct && buttonElement) {
      const ctx = gsap.context(() => {
        gsap.from(buttonElement, {
          duration: .25,
          left: -50,
          opacity: 0,
        })
      })
      return () => ctx.revert();
    }
  }, [isAddProduct])

  const HandlerButtonClick = () => {
    const buttonElement = buttonRef.current;
    const selection: UserSelection = {
      productId,
    }

    if (buttonElement) {
      gsap
        .to(buttonElement, {
          duration: .25,
          opacity: 0,
          left: -50,
          onComplete() {
            console.log('button')
            dispatch(removeUserProduct(selection));
            onRemoveProduct();
          }
        });
    }
  };

  return (
    <button onClick={HandlerButtonClick} ref={buttonRef} style={{ position: 'relative', left: 0, opacity: 1 }} className={styles['product-card__button']}>В корзине</button>
  );
}

export default ProductCardButton;
