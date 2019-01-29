import { ADD_TODO, TODO_TEXT_CHANGE, DELETE_TODO, ADD_TODO_ITEM } from "../action/action";

 const defaultState = {
     inputValue: '123',
     list: [2,3]
 }
/// 笔记本
 export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TODO_TEXT_CHANGE:
            newState.inputValue = action.inputValue;
            return newState;
        case ADD_TODO:
            newState.list.push(action.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_TODO:
            newState.list.splice(action.index, 1);
            return newState;
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = '';
            return newState;

    }
     return state;
 }