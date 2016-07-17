import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainers.js';
import { connect ,Provider} from 'react-redux';
import store from './stores/store.js';
class App extends Component{
  render(){
    return(<Provider store={store}>
      <TodoContainer/>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById("app"));
