import React, { Component } from 'react';
class TodoHeader extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="row">
        <div className="head-area">
           <h1>Just Do<span className="filter-badge red">
           </span></h1>
           <h4>Dead Simple To-Do App</h4>
        </div>
      </div>
    );
  }
}

export default TodoHeader;
