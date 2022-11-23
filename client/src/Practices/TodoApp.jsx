import React, {Component} from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
      todoList: [{action: "", done: false}],
    };
  }

  updateValue = (event) => {
    this.setState({toDo: event.target.value});
  };

  toDo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {action: this.state.toDo, done: false},
      ],
    });
  };

  todoRows = () =>
    this.state.todoList.map((list) => (
      <tr key={list.action}>
        <td className='todo__list__item'>{list.action}</td>
      </tr>
    ));

  render() {
    return (
      <>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        <div className='container container__todoapp'>
          <p className='todo__title'>Todo List App</p>
          <div className='form__group'>
            <input
              type='text'
              className='form__control'
              placeholder='Enter your list...'
              value={this.state.toDo}
              onChange={this.updateValue}
            />
            <button onClick={this.toDo} className='button__primary'>
              <i class='fa-solid fa-plus'></i>{" "}
            </button>
          </div>

          <table className='table'>
            <thead>
              <tr>
                <th>Your Task</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TodoApp;
