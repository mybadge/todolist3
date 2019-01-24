import React from 'react';
import { Input, Button, List } from 'antd';
import store from './store';

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
    }

    render() {
        return (
            <div style={{margin: 15}}>
                <Input placeholder="todo item" value={this.state.inputValue} style={{width:300}} />
                <Button type="primary" style={{marginLeft:15}}>Add</Button>
                <div>
                  <List style={{width:370, marginTop:15}}
                    size="small"
                    // header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                  />
                </div>
            </div>
            
        )
    }
}

export default TodoList;