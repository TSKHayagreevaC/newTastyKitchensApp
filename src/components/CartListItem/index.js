import {Component} from 'react'

import {BiRupee} from 'react-icons/bi'

import Counter from '../Counter'

import './index.css'

class CartListItem extends Component {
  render() {
    const {cartListItem, reloadCart} = this.props
    return (
      <li className="cart-list-item">
        <div className="cart-list-item-container" testid="cartItem">
          <img
            className="cart-item-image-small"
            src={cartListItem.imageUrl}
            alt="cartImage"
          />
          <div className="cart-item-container">
            <div className="cart-item-image-name-container">
              <img
                className="cart-list-item-image"
                src={cartListItem.imageUrl}
                alt="cartImage"
              />
              <h1 className="cart-item-name">{cartListItem.name}</h1>
            </div>
            <div className="cart-item-quantity-container">
              <Counter cartListItem={cartListItem} reloadCart={reloadCart} />
            </div>
            <div className="cart-item-price-container">
              <BiRupee size="20px" />
              <p className="cart-item-price-text">{cartListItem.cost}</p>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default CartListItem
