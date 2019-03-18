import React, { Component } from 'react';
import './App.css';
import Dialog from './components/dialog'
import {Hello} from "./components/hello"
//通过高阶组件封装dialog
const loginDialog = (DialogComponent) => {
  return (App) => class extends Component {
    render() {
      const { title } = this.props;
      return <App>
        <DialogComponent title={title}>
          <div>
            <label htmlFor='username'>用户名</label>
            <input type='text' id='username' placeholder='输入你的用户名' />
          </div>
          <div>
            <label htmlFor='password'>用户名</label>
            <input type='text' id='password' placeholder='输入你的密码' />
          </div>
        </DialogComponent>
      </App>
    }
  }
}
@loginDialog(Dialog)
class App extends Component {
  render() {
    return (
      <div>
      <Hello compiler="hahha" framework="momoda"></Hello>
        this is app apge
        {this.props.children}
      </div>
    );
  }
}

export default App;
