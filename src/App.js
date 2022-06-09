import "./App.css";
import React from "react";
import ReactDOM from 'react-dom'
import { Clock, ClockClassComponent } from "./Clock/Clock";
import { CountDownTimer} from "./timer/CountDownTimer"

function App() {
  const hoursMinSecs = {hours:0, minutes: 1, seconds: 40}
  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick} className='button'>
          {this.state.isToggleOn ? <ClockClassComponent />: <CountDownTimer hoursMinSecs={hoursMinSecs}/>} Switch
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
  
}

export default App;
