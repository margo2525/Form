import React from 'react'
import { Component } from 'react'
class LoginControl extends Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function UserGreeting (props) {}

function GuestGreeting (props) {}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton (props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton (props) {
  return <button onClick={props.onClick}>Segnup</button>
}
export default LoginControl
