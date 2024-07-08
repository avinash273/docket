import React, { Component } from 'react'
import logo from './logo.svg'
import FirstComponent, {SecondComponent} from './components/learningExamples/FirstComponent'
import FirstFunction from './components/learningExamples/FirstFunctionComponent'
import Counter from "./components/counter/Counter";
import './App.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<LearningComponent/>*/}
        <Counter/>
      </div>
    )
  }
}



class LearningComponent extends Component{
  render() {
    return (
        <div className="LearningComponent">
          <h1>Hello World!</h1>
          <FirstComponent></FirstComponent>
          <SecondComponent/>
          <FirstFunction></FirstFunction>
        </div>
    )
  }
}

export default App






/**

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Hello World</h1>
        </a>
      </header>
    </div>
  );
}
export default App;

 **/