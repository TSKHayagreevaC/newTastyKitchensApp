import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

class Header extends Component {
  state = {
    isHamburgerActive: false,
    isCartRouteActive: false,
  }

  onClickHamburgers = () => {
    this.setState(prevItem => ({
      isHamburgerActive: !prevItem.isHamburgerActive,
    }))
  }

  onClickHamburgersCloseButton = () => {
    this.setState(prevItem => ({
      isHamburgerActive: !prevItem.isHamburgerActive,
    }))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  displayHamburgerMenu = () => {
    const {isCartRouteActive} = this.state
    const activeLinkClassName = isCartRouteActive ? 'active' : null
    return (
      <div className="header-small-links-bg-container">
        <ul className="header-links-list-small">
          <Link to="/" className={`nav-link-style ${activeLinkClassName}`>
            <li className="larger-header-link-item">Home</li>
          </Link>
          <Link to="/cart" className={`nav-link-style ${activeLinkClassName}`}>
            <li className="larger-header-link-item">Cart</li>
          </Link>
          <li className="larger-header-link-item">
            <button
              className="logout-button"
              type="button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </li>
          <li className="larger-header-link-item">
            <button
              className="hamburger-exit-button"
              type="button"
              onClick={this.onClickHamburgersCloseButton}
            >
              <img
                src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634812708/Shape_vgjjz5.jpg"
                alt="exitButton"
                className="exit-image"
              />
            </button>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {isHamburgerActive} = this.state
    return (
      <>
        <nav>
          <div className="header-content-container">
            <Link to="/" className="header-logo-link">
              <div className="header-logo-link-container">
                <img
                  className="header-logo-image"
                  src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1635642150/Group_7420_1_foidv5.png"
                  alt="website logo"
                />
                <h1 className="header-logo-text">Tasty Kitchens</h1>
              </div>
            </Link>
            <ul className="header-links-list">
              <Link to="/" className={`nav-link-style ${activeLinkClassName}`>
                <li className="larger-header-link-item">Home</li>
              </Link>
              <Link to="/cart" className={`nav-link-style ${activeLinkClassName}`>
                <li className="larger-header-link-item">Cart</li>
              </Link>
              <li className="larger-header-link-item">
                <button
                  className="logout-button"
                  type="button"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
            <button
              className="hamburger-button"
              type="button"
              onClick={this.onClickHamburgers}
            >
              <GiHamburgerMenu size="32" />
            </button>
          </div>
        </nav>
        {isHamburgerActive ? this.displayHamburgerMenu() : null}
      </>
    )
  }
}

export default withRouter(Header)
