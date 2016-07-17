import React, { Component } from 'react';
class TodoPendingCheckBox extends Component{
  constructor(props) {
    super(props);
    this.state={
      iconClass:'ion-ios-circle-outline'
    }
  }
  mouseOver(){
    this.setState({
      iconClass:'ion-ios-checkmark'
    });

  }
  mouseOut(){
    this.setState({
      iconClass:'ion-ios-circle-outline'
    });

  }
  completeTodo(id){
      this.props.completeTodo(id);
  }
  render(){
    return(
      <span className="input-add-icon" style={{color:'#ccc'}} onClick={this.completeTodo.bind(this,this.props.index)} onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
        <i className={this.state.iconClass} ref="icon"></i>
      </span>
    );
  }
}

export default TodoPendingCheckBox;
