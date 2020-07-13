import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

// const BatteryContext = createContext(90)//默认值是在找不到对应的Provider时使用
const BatteryContext = createContext()
const onlineContext = createContext()

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {
          battery =>(
            <onlineContext.Consumer>
              {
                online => <h1>Battery: {battery},Online: {String(online)}</h1>
              }
            </onlineContext.Consumer>
          ) 
        }
      </BatteryContext.Consumer>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf/>
  }
}

class App extends Component {
  state = {
    battery: 60,
    online: false
  }
  render() {
    const { battery,online } = this.state
    return (
      <BatteryContext.Provider value={battery}>
        <onlineContext.Provider value={online}>
          <button 
            type="button" 
            onClick={()=> this.setState({battery: battery-1})}>press</button>
            <button 
              type="button" 
              onClick={()=> this.setState({online: !online})}>switch</button>
          <Middle/>
        </onlineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default App;
