import React, { Component } from 'react';
class TodoCompletedItemsHeader extends Component {
  constructor(props) {
    super(props);
  }
  clearAllCompleted(e){
    e.preventDefault();
    this.props.clearAllCompletedTodo();
  }
  render(){
    return(
      <div className="row heading-devider">
          <div className="col-md-12">
             <div className="br-border">
             <div className="devider-text"><a href="#" className="clear-all" onClick={this.clearAllCompleted.bind(this)}>
              <i className="ion-trash-a"></i> Clean all removed tasks</a>
              </div>
             </div>
          </div>
      </div>
    );
  }
}

export default TodoCompletedItemsHeader;
