import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

import Header from '../Header'
import RestaurantFoodItem from '../RestaurantFoodItem'
import Footer from '../Footer'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestaurantDetails extends Component {
  state = {
    apiStatus: apiConstants.success,
    restaurantDetails: [],
    foodItems: [],
    reloadRestaurantDetails: false,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const restaurantDetailsUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const restaurantsDetailsResponse = await fetch(
      restaurantDetailsUrl,
      options,
    )
    if (restaurantsDetailsResponse.ok) {
      const restaurantDetailsData = await restaurantsDetailsResponse.json()
      const formattedRestaurantDetailsData = {
        costForTwo: restaurantDetailsData.cost_for_two,
        cuisine: restaurantDetailsData.cuisine,
        id: restaurantDetailsData.id,
        imageUrl: restaurantDetailsData.image_url,
        itemsCount: restaurantDetailsData.items_count,
        location: restaurantDetailsData.location,
        name: restaurantDetailsData.name,
        opensAt: restaurantDetailsData.opens_at,
        rating: restaurantDetailsData.rating,
        reviewsCount: restaurantDetailsData.reviews_count,
      }
      const formattedFoodItemsData = restaurantDetailsData.food_items.map(
        eachItem => ({
          cost: eachItem.cost,
          foodType: eachItem.food_type,
          id: eachItem.id,
          imageUrl: eachItem.image_url,
          name: eachItem.name,
          rating: eachItem.rating,
        }),
      )
      this.setState({
        restaurantDetails: formattedRestaurantDetailsData,
        foodItems: formattedFoodItemsData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onAddReloadRestaurantDetails = () => {
    this.setState(prevState => ({
      reloadRestaurantDetails: !prevState.reloadRestaurantDetails,
    }))
  }

  renderLoader = () => (
    <div className="loader-bg-container" testid="restaurant-details-loader">
      <Loader type="TailSpin" color="#334155" size="22px" />
    </div>
  )

  renderFailureContainer = () => (
    <div className="not-found-bg-container">
      <div className="not-found-content-container">
        <img
          src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg"
          alt="not found"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-para">
          we are sorry, the page you requested could not be found. Please go
          back to the homepage
        </p>
        <button
          type="button"
          className="home-page-button"
          onClick={this.onClickHomeButton}
        >
          Home Page
        </button>
      </div>
    </div>
  )

  renderRestaurantDetails = () => {
    const {restaurantDetails, foodItems} = this.state
    return (
      <div className="restaurant-details-container">
        <div className="restaurant-details-top-container">
          <img
            className="restaurant-details-top-image"
            src={restaurantDetails.imageUrl}
            alt="restaurant"
          />
          <div className="restaurant-details-top-content-container">
            <h1 className="restaurant-details-top-heading">
              {restaurantDetails.name}
            </h1>
            <p className="restaurant-details-top-para">
              {restaurantDetails.cuisine}
            </p>
            <p className="restaurant-details-top-para">
              {restaurantDetails.location}
            </p>
            <div className="restaurant-details-rating-cost-container">
              <div className="restaurant-details-rating-container">
                <div className="restaurant-details-rating-row-container">
                  <AiFillStar color="#ffffff" />
                  <p className="restaurant-details-rating-text">
                    {restaurantDetails.rating}
                  </p>
                </div>
                <p className="restaurant-details-rating-count">
                  {`${restaurantDetails.reviewsCount}+ Rating`}
                </p>
              </div>
              <hr className="restaurant-details-line" />
              <div className="restaurant-details-cost-container">
                <div className="cost-symbol-row-container">
                  <BiRupee color="#ffffff" />
                  <p className="restaurant-details-cost-text">
                    {restaurantDetails.costForTwo}
                  </p>
                </div>
                <p className="cost-for-two-text">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="restaurant-details-food-items-list">
          {foodItems.map(eachItem => (
            <RestaurantFoodItem
              key={eachItem.id}
              foodItem={eachItem}
              onAddReloadRestaurantDetails={this.onAddReloadRestaurantDetails}
            />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }

  renderRestaurantDetailsPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderRestaurantDetails()
      case apiConstants.failure:
        return this.renderFailureContainer()
      case apiConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="restaurant-details-bg-container">
        <Header />
        {this.renderRestaurantDetailsPage()}
      </div>
    )
  }
}

export default RestaurantDetails
