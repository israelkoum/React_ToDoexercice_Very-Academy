
import React, { Component } from "react";

export  default class TodoRows extends Component {

    render = () => (
        <tr>
            <td>{this.props.item.action} </td>
            <td>
                <input
                type="checkbox"
                checked ={this.props.done}
                onChange={()=> this.props.callback(this.props.item)}
                />
            </td>
        </tr>
    )
}