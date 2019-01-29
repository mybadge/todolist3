import React from 'react';
import { Input, Button, List, Alert, Modal } from 'antd';
import store from './../store';
import { addTodo, textChange, deleteTodoItem } from '../action/action';

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
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handItemDeleteClick.bind(this, index)}
                        >{item}</List.Item>
                    )}
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
        var text = this.state.inputValue;
        if (text.length == 0) {
            //Alert.log();
            alert("item can't be null");
            return;
        }
        store.dispatch(addTodo(this.state.inputValue));
        console.log("add item");
    }

    handleStoreChange() {
        console.log(store.getState());
        this.setState(store.getState());
    }

    handItemDeleteClick(index){
        this.showDeleteConfirm('Are you sure delete this item', index);
        console.log("index="+index);
    }

    showDeleteConfirm(tip, index) {
        Modal.confirm({
          title: tip,
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            store.dispatch(deleteTodoItem(index))
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
    }
}

export default TodoList;