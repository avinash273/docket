import React, {Component} from "react";
import './Counter.css'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="App">
                {/*<LearningComponent/>*/}
                <CounterButton howMany={1} decrementMethod={this.decrement} incrementMethod={this.increment}/>
                <CounterButton howMany={5} decrementMethod={this.decrement} incrementMethod={this.increment}/>
                <span className="count">{this.state.count}</span>
                <div>
                    <button className={"reset"} onClick={this.reset}>Reset</button>
                </div>

            </div>
        )
    }

    increment = (howMany) => {
        this.setState((prevState) => {
            return {count: prevState.count + howMany}
        });
    }

    decrement = (howMany) => {
        this.setState((prevState) => {
            return {count: prevState.count - howMany}
        });
    }

    reset = () => {
        this.setState(() => {
            return {count: 0}
        });
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
                {/*<span className="count">{this.state.count}</span>*/}
            </div>

        )
    }

    increment = () => {
        this.setState({
            count: this.state.count + this.props.howMany
        });
        this.props.incrementMethod(this.props.howMany);
    }

    decrement = () => {
        this.setState({
            count: this.state.count - this.props.howMany
        });
        this.props.decrementMethod(this.props.howMany);
    }
}

export default Counter