import React, { Component } from 'react';
import TodoPendingCheckBox from './TodoPendingCheckBoxComponent.js';
import {priorityClass} from './../../utils/UIHelper.js';
class TodoPendingItem extends Component{
  constructor(props) {
    super(props);
    this.state={
      todoContentClass:'',
      editTodoText:'todo-edit-area hide'
    }
  }
  updateTodo(id){
    const updatedText=this.refs.updatedText.value.trim();
    if(updatedText!="" && updatedText!==this.props.todo.text){
      this.props.updateTodo({
        text:updatedText,
        id:id
      });

    }
    this.setState({
      todoContentClass:'',
      editTodoText:'todo-edit-area hide'
    });

  }
  editTodo(e){
    e.preventDefault();
    this.setState({
      todoContentClass:'hide',
      editTodoText:'todo-edit-area'
    });
    this.refs.updatedText.focus();
  }
  setPriority(e){
    e.preventDefault();
    this.props.setPriority({
      priority:e.target.getAttribute('data-priority'),
      id:this.props.index
    });
  }
  render(){
    const priorityType=priorityClass(this.props.todo.priority);
    const priorityClassName=`filter-badge ${priorityType}`;
    const text=this.props.todo.text;
    return(
        <div className="todo-item">
              <TodoPendingCheckBox {...this.props}/>
                  <div className="todo-content">
                    <span className={this.state.todoContentClass}>
                      {this.props.todo.text}<span className={priorityClassName}></span>
                    </span>
                    <input type="text" className={this.state.editTodoText} ref="updatedText" onBlur={this.updateTodo.bind(this,this.props.index)} defaultValue={text}/>
                    <a href="#" className="todo-edit-btn" onClick={this.editTodo.bind(this)}><i className="ion-edit"></i></a>
                  </div>
                    <div className="change-todo-status">
                         <div className="dropdown">
                             <a className="set-severity dropdown-toggle" href="#" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                               {this.props.todo.priority}
                               <span className="caret"></span>
                             </a>
                             <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                               <li><a href="#" data-priority="Normal" onClick={this.setPriority.bind(this)}>Normal</a></li>
                               <li><a href="#"  data-priority="Important" onClick={this.setPriority.bind(this)}>Important</a></li>
                               <li><a href="#"  data-priority="Urgent" onClick={this.setPriority.bind(this)}>Urgent</a></li>
                               <li><a href="#"  data-priority="Someday" onClick={this.setPriority.bind(this)}>Someday</a></li>
                             </ul>
                         </div>
                    </div>
            </div>

    );
  }
}

export default TodoPendingItem;
