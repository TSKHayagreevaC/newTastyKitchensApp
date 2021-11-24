import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-bg-container">
        <Header />
        <div className="page-not-found-bg-container">
          <div className="page-not-found-content-container">
            <img
              src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634989299/erroring_1_vevkhn.jpg"
              alt="not found"
              className="page-not-found-image"
            />
            <h1 className="page-not-found-heading">Page Not Found</h1>
            <p className="page-not-found-para">
              we are sorry, the page you requested could not be found Please go
              back to the homepage
            </p>
            <Link to="/">
              <button type="button" className="home-page-button">
                Home Page
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound
