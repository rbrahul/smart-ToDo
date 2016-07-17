import React, { Component } from 'react';
import TodoPendingCheckBox from './TodoPendingCheckBoxComponent.js';
import {priorityClass} from './../../utils/UIHelper.js';
class TodoCompletedItem extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const priorityType=priorityClass(this.props.todo.priority);
    const priorityClassName=`filter-badge ${priorityType}`;
    return(
      <div className="todo-item">
        <div className="check-area">
          <i className="ion-ios-checkmark"></i>
        </div>
        <div className="todo-content">
          {this.props.todo.text} <span className={priorityClassName}>
          </span>
        </div>
        <div className="change-todo-status">
               <span className="done-todo-level">
                 {this.props.todo.priority}
               </span>
        </div>
      </div>

    );
  }
}

export default TodoCompletedItem;
