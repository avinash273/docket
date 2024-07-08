import React, {Component} from "react";
import './Counter.css'

class Counter extends Component {

    render() {
        return (
            <div className="App">
                {/*<LearningComponent/>*/}
                <CounterButton howMany={1}/>
                <CounterButton howMany={5}/>
            </div>
        )
    }
}

class CounterButton extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render = () => {
        return (
            <div className="counter">
                <button className="button" onClick={this.decrement}>-{this.props.howMany}</button>
                <button className="button" onClick={this.increment}>+{this.props.howMany}</button>
                <div className="count">{this.state.count}</div>
            </div>

        )
    }

    increment = () => {
        this.setState({
            count: this.state.count + this.props.howMany
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - this.props.howMany
        });
    }
}

export default Counter