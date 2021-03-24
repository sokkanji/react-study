import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // JSX 콜백 안에서 this 주의
    // JS의 클래스 메서드는 기본적으로 바인딩 안 되어있음.
    // 콜백에서 this 가 작동하려면 아래와 같이 바인딩 해야함.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);