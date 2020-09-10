import React from 'react'
import './CheckoutProduct.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, rating, price }) {

  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <p className="product__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) =>
                // eslint-disable-next-line jsx-a11y/accessible-emoji
                (<span key={i} role="img">⭐</span>)
              )
          }
        </p>

        <button onClick={removeFromBasket}> Remove to Basket </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
