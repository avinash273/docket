import React, {Component} from "react";

class FirstComponent extends Component {
    render() {
        return (
            <div className="firstComponent">
                <h1>First component</h1>
            </div>
        )
    }
}

export class SecondComponent extends Component {
    render() {
        return (
            <div className="secondComponent">
                <h1>Second component</h1>
            </div>
        )
    }
}

export default FirstComponent