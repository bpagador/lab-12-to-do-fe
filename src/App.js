import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,} from 'react-router-dom'
import LogIn from './LogIn.js'
import TodoList from './TodoList.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js'

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleTokenChange = (userToken) => {
    this.setState({ token: userToken})
    localStorage.setItem('TOKEN', userToken)
    console.log(userToken)
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
          {this.state.token && 
          <Link to="/todos"><div>To-Do List</div></Link>}
    
          <Link to="/login"><div>Log In</div></Link>

          <Link to="/signup"><div>Sign Up</div></Link>
          <button>Log Out</button>

          </ul>

          <Switch>
            
            <Route exact path='/signup' render={(routerProps) => <SignUp handleTokenChange={this.handleTokenChange} {...routerProps}/>}/>

            <Route exact path='/login' render={(routerProps) => <LogIn handleTokenChange={this.handleTokenChange} {...routerProps}/>}/>

            <PrivateRoute path='/todos' token={this.state.token} render={(routerProps) => <TodoList {...routerProps}/>}/>

          </Switch>

        </Router>
      </div>
    )
  }
}
