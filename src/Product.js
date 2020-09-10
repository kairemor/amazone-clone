import React from 'react'
import './Product.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Product({ id, title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        rating,
        image,
        price
      }
    })
  }
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
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
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} >Add to basket</button>
    </div>
  )
}

export default Product
