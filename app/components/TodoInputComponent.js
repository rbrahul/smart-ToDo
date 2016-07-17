import React, { Component } from 'react';
class TodoInput extends Component{
  constructor(props) {
    super(props);
    this.state={
      text:'',
      priority:'normal',
      done:false
    };
    this.SaveTodo=this.SaveTodo.bind(this);
  }
   SaveTodo(event){
    if(event.keyCode == '13'){
      let todo={};
       todo.text=this.refs.todoText.value.trim();
       todo.priority=this.refs.priority.value;
       todo.done=false;
       this.props.addNewTodo(todo);
       this.refs.todoText.value='';
        this.refs.todoText.focus();
        todo.priority=this.refs.priority.value;
    }
  }
  render(){
    return(
      <div className="row">
           <div className="col-md-12 input-area">
                              <div className="col-md-9">
                                  <span className="input-add-icon">
                                    <i className="ion-ios-plus-outline"></i>
                                  </span>
                                  <input type="text" placeholder="Add a task" onKeyUp={this.SaveTodo.bind(event)} ref="todoText" className="todo-input" />
                              </div>
                              <div className="col-md-3 filter-set-area">
                                  <div className="dropdown rb-drodown-select">
                                       <a className="set-severity dropdown-toggle pull-right" href="#" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                         <span className='slelector-text'>Set Severity</span>
                                         <span className="caret"></span>
                                       </a>
                                       <input type="hidden" ref="priority" value="Normal" className="selected"/>
                                       <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                         <li><a href="#" data-priority='Normal'>Normal</a></li>
                                         <li><a href="#" data-priority='Important'>Important</a></li>
                                         <li><a href="#" data-priority='Urgent'>Urgent</a></li>
                                         <li><a href="#" data-priority='Someday'>Someday</a></li>
                                       </ul>
                                 </div>
                            </div>
           </div>
      </div>
    );

  }


}

export default TodoInput;
