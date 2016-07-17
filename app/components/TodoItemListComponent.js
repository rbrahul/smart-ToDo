import React, { Component } from 'react';
import TodoItem from './todoItem/TodoPendingItem.js';
class TodoItems extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const todos=this.props.todos;
    return(
      <div className="row">
        <div className="col-md-12">
        {
          todos.map((todo,index) =>{
          return (todo.done===false)? <TodoItem index={index} updateTodo={this.props.updateTodo} setPriority={this.props.setPriority} completeTodo={this.props.completeTodo} key={index} todo={todo}/>:null;
          })
        }

          </div>
      </div>
    );
  }
}

export default TodoItems;
