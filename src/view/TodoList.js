import React from 'react';
import store from '../store';



class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
      return (
        <div style={{margin:20}}>
          <div>
            <input value={this.state.inputValue} />
            <button >提交</button>
          </div>
          <ul>
            <li>dell</li>
          </ul>
        </div>
      )
  }

}

export default TodoList;