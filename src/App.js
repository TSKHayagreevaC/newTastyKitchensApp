import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import AuthenticatedRoute from './components/AuthenticatedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/" component={Home} />
    <AuthenticatedRoute
      exact
      path="/restaurant/:id"
      component={RestaurantDetails}
    />
    <AuthenticatedRoute exact path="/cart" component={Cart} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
