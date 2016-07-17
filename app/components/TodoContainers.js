import React, { Component } from 'react';
import TodoHeader from './TodoHeaderComponent.js';
import TodoInput from './TodoInputComponent.js';
import TodoLists from './TodoItemListComponent.js';
import TodoCompletedListHeader from './TodoCompletedListHeaderComponent.js';
import TodoCompletedList from './TodoCompletedListsComponent.js';
import TodoFilter from './filter/filterTodo.js';
import { addNewTodo, completeTodo, updateTodo,clearAllCompletedTodo, setPriority } from './../actions/TodoActionCreator.js';
import {connect} from 'react-redux';

class TodoContainer extends Component{
  constructor(props){
    super(props);
    this.state={filterBy:'all'};
  }
  filterTodo(filter){
      this.setState({
        filterBy:filter
      });
  }
  render(){
    const { todos, addNewTodo, completeTodo,updateTodo, clearAllCompletedTodo, setPriority }=this.props;
    return(
      <div>
      <TodoHeader/>
      <TodoInput addNewTodo={addNewTodo}/>
      <TodoFilter filterTodo={this.filterTodo.bind(this)}/>
      {
        (this.state.filterBy==='all' || this.state.filterBy==='open')?
           <TodoLists todos={todos} completeTodo={completeTodo} updateTodo={this.props.updateTodo} setPriority={this.props.setPriority}/>
        :null
      }
      {
        (this.state.filterBy==='all' || this.state.filterBy==='closed')?
        <div>
              <TodoCompletedListHeader clearAllCompletedTodo={this.props.clearAllCompletedTodo}/>
              <TodoCompletedList todos={todos}/>
          </div>
        :null
      }
      </div>
    );
  }
}

const mapStoreAsProps = (store) => {
  return {
      todos:store.todo
  };
};

const mapDispatchAsProps = (dispatch) => {
  return {
  addNewTodo: (data) => {
    dispatch(addNewTodo(data));
  },
  completeTodo: (id) => {
    dispatch(completeTodo(id));
  },
  updateTodo: (id) => {
    dispatch(updateTodo(id));
  },
  clearAllCompletedTodo: () => {
    dispatch(clearAllCompletedTodo());
  },
  setPriority: (data) => {
    dispatch(setPriority(data));
  }
};
};

export default TodoContainer = connect(mapStoreAsProps,mapDispatchAsProps)(TodoContainer);
