import React from 'react';
import store from './../store';
import { textChange, deleteTodoItem, add_todo_item, getRemoteDataList } from '../action/action';
import TodoListUI from './TodoListUI';


class TodoList extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = store.getState();
      this.handleInputValueChange = this.handleInputValueChange.bind(this);
      this.handleBtnClickAction = this.handleBtnClickAction.bind(this);
			this.handleStoreChange = this.handleStoreChange.bind(this);
			this.handleItemDeleteClick = this.handleItemDeleteClick.bind(this);
      store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
								inputValue={this.state.inputValue} 
								list={this.state.list}
								handleInputValueChange={this.handleInputValueChange}
								handleBtnClickAction={this.handleBtnClickAction}
								handleItemDeleteClick={this.handleItemDeleteClick}
            />
        )
		}
		
		componentWillMount() {
			const action = getRemoteDataList();
			store.dispatch(action);
		}

    handleInputValueChange(e) {
        store.dispatch(textChange(e.target.value));
    }

    handleBtnClickAction() { 
        var text = this.state.inputValue;
        if (text.length === 0) {
            //alert("item can't be null");
            return;
        }
        store.dispatch(add_todo_item());
    }

    handleStoreChange() {
        console.log(store.getState());
        this.setState(store.getState());
    }

    handleItemDeleteClick(index){
        this.showDeleteConfirm('Are you sure delete this item', index);
        console.log("index="+index);
    }

    showDeleteConfirm(tip, index) {
        store.dispatch(deleteTodoItem(index))
        // Modal.confirm({
        //   title: tip,
        //   content: 'Some descriptions',
        //   okText: 'Yes',
        //   okType: 'danger',
        //   cancelText: 'No',
        //   onOk() {
        //     //store.dispatch(deleteTodoItem(index))
        //     console.log('OK');
        //   },
        //   onCancel() {
        //     console.log('Cancel');
        //   },
        // });
    }
}

export default TodoList;