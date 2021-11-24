import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

import Counter from '../Counter'

import './index.css'

const RestaurantFoodItem = props => {
  const {foodItem, onAddReloadRestaurantDetails} = props

  const onClickAddFoodItemButton = () => {
    const itemQuantity = 1
    const updatedFoodItem = {
      cost: foodItem.cost,
      quantity: itemQuantity,
      id: foodItem.id,
      imageUrl: foodItem.imageUrl,
      name: foodItem.name,
    }
    const isCartDataSaved = localStorage.getItem('cartData') === null
    if (isCartDataSaved) {
      const cartList = []
      cartList.push(updatedFoodItem)
      const stringifiedCartList = JSON.stringify(cartList)
      localStorage.setItem('cartData', stringifiedCartList)
    } else {
      const savedCartList = JSON.parse(localStorage.getItem('cartData'))
      const isItemThere =
        savedCartList.find(eachItem => eachItem.id === updatedFoodItem.id) !==
        undefined
      if (isItemThere) {
        console.log('item is already saved')
      } else {
        savedCartList.push(updatedFoodItem)
        const updatedCartItemsString = JSON.stringify(savedCartList)
        localStorage.setItem('cartData', updatedCartItemsString)
      }
    }
    onAddReloadRestaurantDetails()
  }

  const foodItemAddButtonOrCounter = () => {
    const cartDataForAddItemButton = JSON.parse(
      localStorage.getItem('cartData'),
    )
    if (cartDataForAddItemButton === null) {
      return (
        <button
          className="add-food-item-button"
          type="button"
          onClick={onClickAddFoodItemButton}
        >
          Add
        </button>
      )
    }
    const foodItemAddButton = cartDataForAddItemButton.find(
      eachItem => eachItem.id === foodItem.id,
    )
    const isFoodItemSaved = foodItemAddButton === undefined
    return isFoodItemSaved ? (
      <button
        className="add-food-item-button"
        type="button"
        onClick={onClickAddFoodItemButton}
      >
        Add
      </button>
    ) : (
      <Counter
        cartListItem={foodItem}
        reloadCart={onAddReloadRestaurantDetails}
      />
    )
  }

  return (
    <li className="restaurant-details-food-item" testid="foodItem">
      <div className="restaurant-details-food-item-container">
        <img
          className="restaurant-details-food-item-image"
          src={foodItem.imageUrl}
          alt="foodItem"
        />
        <div className="restaurant-details-food-item-content-container">
          <h1 className="food-item-head-text">{foodItem.name}</h1>
          <div className="cost-symbol-row-container">
            <BiRupee />
            <p className="restaurant-details-food-item-cost-text">
              {foodItem.cost}
            </p>
          </div>
          <div className="restaurant-details-rating-row-container">
            <AiFillStar color="#FFCC00" />
            <p className="restaurant-details-food-item-rating-text">
              {foodItem.rating}
            </p>
          </div>
          {foodItemAddButtonOrCounter()}
        </div>
      </div>
    </li>
  )
}

export default RestaurantFoodItem
