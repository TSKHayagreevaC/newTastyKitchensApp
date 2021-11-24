import {Component} from 'react'
import {Link} from 'react-router-dom'

import {BiRupee} from 'react-icons/bi'

import Header from '../Header'
import CartListItem from '../CartListItem'
import Footer from '../Footer'

import './index.css'

class Cart extends Component {
  state = {
    reloadCart: false,
    placedOrderSuccessfully: false,
  }

  reloadCart = () => {
    this.setState(prevState => ({reloadCart: !prevState.reloadCart}))
  }

  onClickPlaceOrder = () => {
    this.setState({placedOrderSuccessfully: true})
    localStorage.removeItem('cartData')
  }

  renderSuccessFullyPlacedOrderPage = () => (
    <div className="placed-order-success-page">
      <img
        className="placed-order-success-image"
        src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1635641160/Vector_1_xgk7ng.png"
        alt="placedOrder"
      />
      <h1 className="placed-order-success-heading">Payment Successful</h1>
      <p className="placed-order-success-para">
        Thank you for ordering Your payment is successfully completed.
      </p>
      <Link to="/">
        <button className="empty-cart-button" type="button">
          Go To Home Page
        </button>
      </Link>
    </div>
  )

  renderEmptyCartView = () => (
    <div className="empty-cart-container">
      <img
        className="empty-cart-image"
        src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1635614049/OBJECTS_prg6sc.png"
        alt="empty cart"
      />
      <h1 className="empty-cart-heading">No Order Yet!</h1>
      <p className="empty-cart-text">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button className="empty-cart-button" type="button">
          Order Now
        </button>
      </Link>
    </div>
  )

  renderCartListView = () => {
    const cartItemsList = JSON.parse(localStorage.getItem('cartData'))
    const itemsSum = cartItemsList.map(
      eachItem => eachItem.cost * eachItem.quantity,
    )
    let orderTotal = 0
    itemsSum.forEach(eachItem => {
      orderTotal += eachItem
    })

    return (
      <div className="cart-list-bg-container">
        <div className="cart-items-list-container">
          <div className="cart-items-list-heading-container">
            <p className="cart-list-heading">Item</p>
            <p className="cart-list-heading">Quantity</p>
            <p className="cart-list-heading">Price</p>
          </div>
          <ul className="cart-items-list">
            {cartItemsList.map(eachItem => (
              <CartListItem
                key={eachItem.id}
                cartListItem={eachItem}
                reloadCart={this.reloadCart}
              />
            ))}
          </ul>
          <hr className="cart-list-line" />
          <div className="order-price-container">
            <h1 className="order-items-heading">Order Total:</h1>
            <div className="order-total-count-container">
              <BiRupee size="32px" color="#3e4c59" />
              <h1 className="order-total-count" testid="total-price">
                {orderTotal}
              </h1>
            </div>
          </div>
          <button
            className="place-order-button"
            type="button"
            onClick={this.onClickPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    )
  }

  renderCartPage = () => {
    const cartItemsString = localStorage.getItem('cartData')
    const cartItemsList = JSON.parse(cartItemsString)
    const isCartEmpty = cartItemsList === null || cartItemsList.length === 0
    return (
      <>
        {isCartEmpty ? this.renderEmptyCartView() : this.renderCartListView()}
      </>
    )
  }

  render() {
    const {placedOrderSuccessfully} = this.state
    return (
      <div className="cart-bg-container">
        <Header />
        {placedOrderSuccessfully
          ? this.renderSuccessFullyPlacedOrderPage()
          : this.renderCartPage()}
      </div>
    )
  }
}

export default Cart
