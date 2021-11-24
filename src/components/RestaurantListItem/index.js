import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

const RestaurantCard = props => {
  const {restaurantItem} = props
  return (
    <Link
      to={`/restaurant/${restaurantItem.id}`}
      className="restaurant-link-style"
    >
      <li className="restaurant-list-item" testid="restaurant-item">
        <div className="restaurant-cart-bg-container">
          <img
            className="restaurant-card-image"
            src={restaurantItem.imageUrl}
            alt="restaurant"
          />
          <div className="restaurant-card-content">
            <p className="restaurant-name">{restaurantItem.name}</p>
            <p className="restaurant-cuisine">{restaurantItem.cuisine}</p>
            <div className="restaurant-card-rating-star">
              <AiFillStar color="#FFCC00" />
              <p className="restaurant-card-rating-text">
                {restaurantItem.userRating.rating}
              </p>
              <p className="restaurants-reviews-number">
                ({restaurantItem.userRating.totalReviews} rating)
              </p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
