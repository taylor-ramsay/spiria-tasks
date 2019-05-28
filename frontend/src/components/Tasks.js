import React, { Component } from 'react';

import TaskList from './TaskList';
import TaskInput from './TaskInput';
import RemoveAllTasksButton from './RemoveAllTasksButton';
import TaskItem from './TaskItem';
import AddTaskButton from './AddTaskButton';
import logo from '../assets/spiria-logo.png';

export default class Tasks extends Component {

  constructor(props) {
    super();
    this.state = {
      inputValue: "",
      tasks: [],
      addButtonIsActive: false,
      removeAllButtonIsActive: false
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      addButtonIsActive: event.target.value.length > 0 ? true : false
    });
  }

  handleAddTask = () => {
    if (this.state.inputValue.length < 1) {
      return;
    }
    let newTask = { name: this.state.inputValue }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    }, () => {
      this.setState({
        inputValue: "",
        addButtonIsActive: false,
        removeAllButtonIsActive: true
      });
    });
  }

  handleCompleteTask = (taskCompleted) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => {
        return t.name !== taskCompleted;
      })
    }, () => {
      if (this.state.tasks.length < 1) {
        this.setState({
          removeAllButtonIsActive: false
        });
      }
    });
  }

  handleRemoveAll = () => {
    this.setState({
      tasks: []
    }, () => {
      this.setState({
        removeAllButtonIsActive: false
      });
    });
  }

  render() {

    let TaskItemsJSX = this.state.tasks.map((task, i) => {
      return <TaskItem name={task.name} key={i} taskComplete={this.handleCompleteTask} />
    });

    return (
      <div className="tasks">
        <div className="title">
          <p>TASKS</p>
          <img src={logo} alt="logo" />
        </div>
        <div className="tasks-container">
          <TaskInput
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            addTask={this.handleAddTask}
          >
            <AddTaskButton
              addTask={this.handleAddTask}
              active={this.state.addButtonIsActive}
            />
          </TaskInput>
          <TaskList>
            {TaskItemsJSX}
          </TaskList>
          <RemoveAllTasksButton
            removeAll={this.handleRemoveAll}
            active={this.state.removeAllButtonIsActive}
          />
        </div>
      </div>
    )
  }
}

