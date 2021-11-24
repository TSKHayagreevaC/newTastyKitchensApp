import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    displayErrorMessage: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = async event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFailure = errorMessage => {
    this.setState({displayErrorMessage: true, errorMessage})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const loginOptions = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, loginOptions)
    const responseData = await response.json()
    if (response.ok) {
      this.onLoginSuccess(responseData.jwt_token)
    } else {
      this.onLoginFailure(responseData.error_msg)
    }
  }

  render() {
    const {errorMessage, displayErrorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <img
          className="small-login-image"
          src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634731916/Rectangle_1457_v0vynx.jpg"
          alt="website logo"
        />
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.onSubmitLoginForm}>
            <img
              className="login-form-logo"
              src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1635642150/Group_7420_1_foidv5.png"
              alt="website logo"
            />
            <h1 className="login-tasty-kitchens-heading">Tasty Kitchens</h1>
            <h1 className="login-form-heading">Login</h1>
            <label htmlFor="formUsername" className="login-form-label">
              USERNAME
            </label>
            <input
              id="formUsername"
              className="login-input-style"
              type="text"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="formPassword" className="login-form-label">
              PASSWORD
            </label>
            <input
              id="formPassword"
              className="login-input-style"
              type="password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          {displayErrorMessage ? (
            <p className="login-error-message">*{errorMessage}</p>
          ) : null}
        </div>
        <img
          src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1634663585/Rectangle_1456_dyotst.jpg"
          alt="website login"
          className="login-body-image"
        />
      </div>
    )
  }
}

export default Login
