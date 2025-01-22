import React, { Component } from 'react';
import './App.css';
import Contador from './components/contador';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  cambiar = (num) => {
    this.setState((prevState) => ({
      counter: prevState.counter + num
    }));
  }

  render() {
    const clase = "incButton";
    return (
      <div className="App">
        <Contador contador={this.state.counter} cambiar={this.cambiar} clase={clase} />
      </div>
    );
  }
}

export default App;
