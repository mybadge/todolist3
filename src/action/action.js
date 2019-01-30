
import axios from 'axios';

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const DELETE_TODO = 'DELETE_TODO'
export const TODO_TEXT_CHANGE = 'TODO_Text_Change'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const INIT_TODO_LIST = 'init_todo_list'
export const GET_REMOTE_LIST = 'get_remote_list'
/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export const add_todo_item = () => {
  return { type: ADD_TODO_ITEM }
};

export const initListAction = (data) => {
  return {
    type: INIT_TODO_LIST,
    data
  }
}

export function addTodo(text) {
  return { type: ADD_TODO, inputValue: text }
}

export function textChange(text) {
  return { type: TODO_TEXT_CHANGE, inputValue: text }
}

export function deleteTodoItem(index) {
  return { type: DELETE_TODO, index }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function getRemoteDataList() {
  return (dispatch) => {
    axios.get('http://localhost/api/list2.php').then((res)=> {
      var resp = res.data;
      if (resp.code === 200) {
        const action = initListAction(resp.data);
        dispatch(action);
      }
    }).catch((e)=> {
      console.log("e:" + e);
    })
  };
}