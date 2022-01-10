import React, { Component } from "react";

export default class Navbar extends Component {

    render = () =>(
        <h2 className='bg bg-primary'> {this.props.name} </h2>

    )
}