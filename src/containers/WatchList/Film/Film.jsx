import React, { Component } from "react";
import './Film.css'

class Film extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(item) {
        if (item.film !== this.props.film) {
            return true
        }
        return false
    }
    render() {
        return (
            <div className="Film" >
                <input className="Film_input" type="text" value={this.props.film} onChange={this.props.onChange} />
                <button className="Film_btn" onClick={this.props.click}>X</button>
            </div >
        )
    }
}

export default Film