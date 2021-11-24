import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'

import {BiChevronLeftSquare, BiChevronRightSquare} from 'react-icons/bi'
import {BsFilterLeft} from 'react-icons/bs'

import Header from '../Header'
import RestaurantListItem from '../RestaurantListItem'
import Footer from '../Footer'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    activePage: 1,
    LIMIT: 9,
    sortByRatingValue: sortByOptions[1].value,
    searchValue: '',
    carouselImageList: [],
    restaurantsList: [],
  }

  componentDidMount() {
    this.getCarouselImages()
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {activePage, LIMIT, searchValue, sortByRatingValue} = this.state
    const offset = (activePage - 1) * LIMIT
    const restaurantsListUrl = `https://apis.ccbp.in/restaurants-list?search=${searchValue}&offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortByRatingValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const restaurantsResponse = await fetch(restaurantsListUrl, options)
    if (restaurantsResponse.ok) {
      const restaurantsData = await restaurantsResponse.json()
      const formattedRestaurantsData = restaurantsData.restaurants.map(
        eachItem => ({
          costForTwo: eachItem.cost_for_two,
          name: eachItem.name,
          cuisine: eachItem.cuisine,
          groupByTime: eachItem.group_by_time,
          hasOnlineDelivery: eachItem.has_online_delivery,
          hasTableBooking: eachItem.has_table_booking,
          id: eachItem.id,
          imageUrl: eachItem.image_url,
          isDeliveredNow: eachItem.is_delivering_now,
          location: eachItem.location,
          menuType: eachItem.menu_type,
          opensAt: eachItem.opens_at,
          userRating: {
            rating: eachItem.user_rating.rating,
            ratingColor: eachItem.user_rating.rating_color,
            ratingText: eachItem.user_rating.rating_text,
            totalReviews: eachItem.user_rating.total_reviews,
          },
        }),
      )
      this.setState({
        apiStatus: apiConstants.success,
        restaurantsList: formattedRestaurantsData,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  getCarouselImages = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const carouselImagesUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(carouselImagesUrl, options)
    if (response.ok) {
      const responseData = await response.json()
      const formattedData = await responseData.offers.map(eachItem => ({
        id: eachItem.id,
        imageUlr: eachItem.image_url,
      }))
      this.setState({
        carouselImageList: formattedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickTryAgainButton = () => {
    this.getCarouselImages()
  }

  renderOffersFailureContainer = () => (
    <div className="slick-not-found-bg-container">
      <div className="slick-not-found-content-container">
        <img
          src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg"
          alt="not found"
          className="slick-not-found-image"
        />
        <h1 className="not-found-heading">Offers Not Found</h1>
        <p className="not-found-para">
          we are sorry, the offers are not found. Please try again...
        </p>
        <button
          type="button"
          className="home-page-button"
          onClick={this.onClickTryAgainButton}
        >
          Try Again
        </button>
      </div>
    </div>
  )

  renderSlickLoader = () => (
    <div
      className="slick-loader-bg-container"
      testid="restaurants-offers-loader"
    >
      <Loader type="TailSpin" color="#334155" />
    </div>
  )

  renderReactSlider = () => {
    const {carouselImageList} = this.state
    const settings = {
      className: 'slider-style',
      infinite: true,
      dots: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider className="react-slick-slider-style" {...settings}>
        {carouselImageList.map(eachItem => (
          <div key={eachItem.id} className="react-slider-list-item">
            <img
              className="carousel-image-style"
              src={eachItem.imageUlr}
              alt="offer"
            />
          </div>
        ))}
      </Slider>
    )
  }

  renderReactSliderContainer = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderReactSlider()
      case apiConstants.failure:
        return this.renderOffersFailureContainer()
      case apiConstants.inProgress:
        return this.renderSlickLoader()
      default:
        return null
    }
  }

  onChangeSelectValue = event => {
    this.setState(
      {sortByRatingValue: event.target.value},
      this.getRestaurantsList,
    )
  }

  incrementPageNumber = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({activePage: prevState.activePage + 1}),
        this.getRestaurantsList,
      )
    }
  }

  decrementPageNumber = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({activePage: prevState.activePage - 1}),
        this.getRestaurantsList,
      )
    }
  }

  renderLoader = () => (
    <div className="loader-bg-container" testid="restaurants-list-loader">
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

  renderRestaurantsList = () => {
    const {restaurantsList, activePage} = this.state
    return (
      <div className="home-content-container">
        <ul className="restaurants-list">
          {restaurantsList.map(eachItem => (
            <RestaurantListItem key={eachItem.id} restaurantItem={eachItem} />
          ))}
        </ul>
        <div className="pagination-container">
          <button
            className="pagination-button"
            type="button"
            onClick={this.decrementPageNumber}
            testid="pagination-left-button"
          >
            <BiChevronLeftSquare size="24px" color="#334155" />
          </button>

          <p className="pagination-text">
            <span testid="active-page-number">{`${activePage}`}</span> of 4
          </p>
          <button
            className="pagination-button"
            type="button"
            onClick={this.incrementPageNumber}
            testid="pagination-right-button"
          >
            <BiChevronRightSquare size="24px" color="#334155" />
          </button>
        </div>
      </div>
    )
  }

  renderHome = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderRestaurantsList()
      case apiConstants.failure:
        return this.renderFailureContainer()
      case apiConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {sortByRatingValue} = this.state
    return (
      <>
        <Header />
        <div className="home-main-content-container">
          {this.renderReactSliderContainer()}
          <div className="home-content-container">
            <div className="home-top-container">
              <div className="home-heading-para-container">
                <h1 className="home-container-heading">Popular Restaurants</h1>
                <p className="home-content-para">
                  Select Your favourite restaurant special dish and make your
                  day happy...
                </p>
              </div>
              <div className="dropdown-container">
                <BsFilterLeft size="24px" />
                <p className="sort-by-para">Sort By</p>
                <select
                  value={sortByRatingValue}
                  onChange={this.onChangeSelectValue}
                  className="drop-down-select"
                >
                  {sortByOptions.map(eachItem => (
                    <option
                      className="drop-down-option"
                      key={eachItem.id}
                      value={eachItem.value}
                    >
                      {`${eachItem.displayText}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr className="hr-style" />
          </div>
          {this.renderHome()}
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
