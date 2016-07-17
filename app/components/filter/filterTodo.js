import React, { Component } from 'react';
class TodoFilter extends Component{
  constructor(props) {
    super(props);
  }
  filterTodo(e){
      const slug = e.target.value;
      this.props.filterTodo(slug);
  }
  render(){
    return(
      <div className="row filter-bar">
        <div className="col-md-12">
            <label><input type="radio" name="filter" onClick={this.filterTodo.bind(this)} value="all" defaultChecked/> Show All</label>
            <label><input type="radio" name="filter" onClick={this.filterTodo.bind(this)}  value="open"/> Show Open</label>
            <label><input type="radio" name="filter" onClick={this.filterTodo.bind(this)} value="closed"/> Show Closed</label>
          </div>
      </div>
    );
  }
}

export default TodoFilter;
