import './App.css';

import React, { Component } from 'react';
import TodoRows from './Component/TodoRows';
import Navbar from './Component/Navbar';

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      userName :'Zander',
      todoItems : [

        {action: 'work in', done: false},
        {action:'danse it ', done: false},
        { action: 'playing', done:false}
      ],
      newTodo:''
    }
  }


  todoRows = () => 
  this.state.todoItems.map((item) => (
    <TodoRows key={item.action} item={item} callback={this.toggleDone}/>
  ))

  toggleDone = (todo) => 
  this.setState({
    todoItems: this.state.todoItems.map((item) => 
      item.action === todo.action ?  {...item, done: !item.done} : item
    ),
    
  })


  updateValue = (event) => (
   this.setState({newTodo: event.target.value})
    
  )
newTodo = () => (
  this.setState({
    todoItems: [
      ...this.state.todoItems, 
      {action:this.state.newTodo, done: false}
    ]
  })
)

  render = () => (
    <div className='container'>
        <div className='row'>
          <Navbar name={this.state.userName}/>
          <div className='col-12'>
          <input className='form-control' onChange ={this.updateValue} value={this.state.newTodo} />
          <button className='btn btn-primary' onClick={this.newTodo}>Add task</button>
          </div>
            <table className='table'>
              <thead>
                <tr>
                  <th>Task</th>
                  <th> Complete </th>
                </tr>
              </thead>
              <tbody>
              {this.todoRows()}
              </tbody>
            </table>
        </div>
      

        

    </div>
  )
} 