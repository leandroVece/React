import React, { Component } from "react";

class TitleOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'juan'
        };
    }

    render() {
        return <h1 className="text-primary" >Hola {this.state.name}</h1>;
    }
}

export default TitleOne;
