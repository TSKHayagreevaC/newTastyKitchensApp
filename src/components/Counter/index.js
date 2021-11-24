import {Component} from 'react'

import './index.css'

class Counter extends Component {
  onDecrement = () => {
    const {cartListItem, reloadCart} = this.props
    const cartDataList = JSON.parse(localStorage.getItem('cartData'))
    const currentFoodItem = cartDataList.find(
      eachItem => eachItem.id === cartListItem.id,
    )
    if (currentFoodItem.quantity > 1) {
      const quantity = currentFoodItem.quantity - 1
      const updatedFoodItem = {...cartListItem, quantity}
      const newCartDataList = cartDataList.filter(
        eachItem => eachItem.id !== cartListItem.id,
      )
      const foodItemIndex = cartDataList.findIndex(
        eachItem => eachItem.id === cartListItem.id,
      )
      newCartDataList.splice(foodItemIndex, 0, updatedFoodItem)
      const newCartDataListString = JSON.stringify(newCartDataList)
      localStorage.setItem('cartData', newCartDataListString)
      reloadCart()
    } else {
      const newCartDataList = cartDataList.filter(
        eachItem => eachItem.id !== cartListItem.id,
      )
      const newCartDataListString = JSON.stringify(newCartDataList)
      localStorage.setItem('cartData', newCartDataListString)
      reloadCart()
    }
  }

  onIncrement = () => {
    const {cartListItem, reloadCart} = this.props
    const cartDataList = JSON.parse(localStorage.getItem('cartData'))
    const currentFoodItem = cartDataList.find(
      eachItem => eachItem.id === cartListItem.id,
    )
    const quantity = currentFoodItem.quantity + 1
    const updatedFoodItem = {...cartListItem, quantity}
    const newCartDataList = cartDataList.filter(
      eachItem => eachItem.id !== cartListItem.id,
    )
    const foodItemIndex = cartDataList.findIndex(
      eachItem => eachItem.id === cartListItem.id,
    )
    newCartDataList.splice(foodItemIndex, 0, updatedFoodItem)
    const newCartDataListString = JSON.stringify(newCartDataList)
    localStorage.setItem('cartData', newCartDataListString)
    reloadCart()
  }

  render() {
    const {cartListItem} = this.props
    const cartDataList = JSON.parse(localStorage.getItem('cartData'))
    const currentFoodItem = cartDataList.find(
      eachItem => eachItem.id === cartListItem.id,
    )
    return (
      <div className="item-counter-container">
        <button
          className="cart-item-decrement-button"
          type="button"
          onClick={this.onDecrement}
          testid="decrement-count"
        >
          -
        </button>
        <div>
          <p className="item-count" testid="active-count">
            {currentFoodItem.quantity}
          </p>
        </div>
        <button
          className="cart-item-increment-button"
          type="button"
          onClick={this.onIncrement}
          testid="increment-count"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
