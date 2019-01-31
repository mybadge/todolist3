import React from 'react';
import { connect } from 'react-redux';


/// 无状态组件, 性能更高, 因为里面没有任何生命周期的函数, 同时不会生成组件的实例.
const TodoList = (props) => {
  const {inputValue, list, handleInputChange, handleBtnClick, handleDeleteClick} = props;
  return (
    <div style={{margin:20}}>
      <div>
        <input value={inputValue} 
          onChange={handleInputChange}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index)=> {
            return <li onClick={()=>{ handleDeleteClick(index) }} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

/// React组件 可简化为 UI组件.
// class TodoList extends React.Component {
//   render() {
//   }
// }



const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispathchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        inputValue: e.target.value
      }
      dispatch(action);
      console.log(e.target.value);
    },

    handleBtnClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },

    handleDeleteClick(index) {
      const action = {
        type: 'delete_item',
        index: index
      }
      dispatch(action);
    }
  }
}
/// connet 函数把 UI组件TodoList组合成了一个 容器组件, 而且里面是自动组装的
export default connect(mapStateToProps, mapDispathchToProps)(TodoList);