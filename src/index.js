import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.state = { isLoggedin : false };
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn : true
    });
  }

  handleLogOutClick() {
    this.setState({
      isLoggedIn : false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        { isLoggedIn
          ? <LogoutButton onClick={this.handleLogOutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    )
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please Sign Up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);