import { ADD_TODO, TODO_Text_Change, DELETE_TODO } from "../action/action";

 const defaultState = {
     inputValue: '123',
     list: [2,3]
 }
/// 笔记本
 export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TODO_Text_Change:
            newState.inputValue = action.inputValue;
            return newState;
        case ADD_TODO:
            newState.list.push(action.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_TODO:
            newState.list.splice(action.index, 1);
            return newState;
    }
     return state;
 }