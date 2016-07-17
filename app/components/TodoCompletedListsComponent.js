import React, { Component } from 'react';
import TodoCompletedItem from './todoItem/TodoCompletedItem.js';
class TodoCompletedList extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const todos=this.props.todos;
    return(
      <div className="row completed-todo-area">
        <div className="col-md-12">
          {
              todos.map((todo)=>{
                    return (todo.done===true)?<TodoCompletedItem todo={todo}/>:null;
              })
          }
        </div>
      </div>
    );
  }
}

export default TodoCompletedList;
