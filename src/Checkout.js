import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" alt="" />
        {
          basket?.length === 0 ? (
            <div>
              <h2>Your shopping Basket is empty</h2>
              <p> You have no items in your basket. To buy on click in Add to basket next to item</p>
            </div>
          ) : (
              <div>
                <h2 className="checkout__title"> Your Shopping Basket</h2>

                {
                  basket.map(item => (
                    <CheckoutProduct key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} rating={item.rating} />
                  ))
                }
              </div>
            )
        }
      </div>

      {
        basket?.length ? (
          <div className="checkout__right">
            <Subtotal />
          </div>
        ) : ('')
      }
    </div>
  )
}

export default Checkout
