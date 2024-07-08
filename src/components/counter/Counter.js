import React, {Component} from "react";
import './Counter.css'

class Counter extends Component{

    constructor() {
        super();
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this);
    }
    render(){
        
        return(
            <div className="counter">
                <h2>Counter</h2>
                <button className="button" onClick={this.increment}>+1</button>
                <span className="count">{this.state.count}</span>
            </div>
        )
    }

    increment(){
        console.log("increment");
        this.setState({count: this.state.count + 1});
    }
}

export default Counter