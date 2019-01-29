import React from 'react';
import { Input, Button, List } from 'antd';
import store from './../store';
import { addTodo, textChange } from '../action/action';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = store.getState();
      console.log(this.state);

      this.handleInputValueChange = this.handleInputValueChange.bind(this);
      this.handBtnClickAction = this.handBtnClickAction.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{margin: 15}}>
                <Input 
                    placeholder="todo item" 
                    value={this.state.inputValue} 
                    style={{width:200}} 
                    onChange={this.handleInputValueChange}
                />
                <Button type="primary" style={{marginLeft:15}} onClick={this.handBtnClickAction} >Add</Button>
                <div>
                  <List style={{width:270, marginTop:15}}
                    size="small"
                    // header={<div>Header</div>}
                    //footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    //pageSize={10}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                </div>
            </div>
            
        )
    }

    handleInputValueChange(e) {
        console.log("aa=" + e.target.value);
        store.dispatch(textChange(e.target.value));
    }

    handBtnClickAction() {
        store.dispatch(addTodo(this.state.inputValue));
        console.log("add item");
    }

    handleStoreChange() {
        console.log(store.getState());
        this.setState(store.getState());
    }
}

export default TodoList;