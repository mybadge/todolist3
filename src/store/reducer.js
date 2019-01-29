import { ADD_TODO, TODO_Text_Change } from "../action/action";

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

    }
     return state;
 }