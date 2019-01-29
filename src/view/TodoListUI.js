import React from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (<div style={{margin: 15}}>
        <Input 
            placeholder="todo item" 
            value={props.inputValue} 
            style={{width:200}} 
            onChange={props.handleInputValueChange}
        />
        <Button type="primary" style={{marginLeft:15}} onClick={props.handleBtnClickAction} >Add</Button>
        <div>
        <List style={{width:270, marginTop:15}}
            size="small"
            // header={<div>Header</div>}
            //footer={<div>Footer</div>}
            bordered
            dataSource={props.list}
            //pageSize={10}
            renderItem={(item, index) => (
                <List.Item onClick={(index) => {
                    props.handleItemDeleteClick(index);
                }}
                >{item}</List.Item>
            )}
        />
        </div>
    </div>)
}


// class TodoListUI extends Component {
//     render() {
//         return (<div style={{margin: 15}}>
//                     <Input 
//                         placeholder="todo item" 
//                         value={this.props.inputValue} 
//                         style={{width:200}} 
//                         onChange={this.props.handleInputValueChange}
//                     />
//                     <Button type="primary" style={{marginLeft:15}} onClick={this.props.handleBtnClickAction} >Add</Button>
//                     <div>
//                     <List style={{width:270, marginTop:15}}
//                         size="small"
//                         // header={<div>Header</div>}
//                         //footer={<div>Footer</div>}
//                         bordered
//                         dataSource={this.props.list}
//                         //pageSize={10}
//                         renderItem={(item, index) => (
//                             <List.Item onClick={(index) => {
//                                 this.props.handleItemDeleteClick(index);
//                             }}
//                             >{item}</List.Item>
//                         )}
//                     />
//                     </div>
//                 </div>);
//     }
// }
export default TodoListUI;