import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import TaskList from './client/components/TaskList';
import TaskForm from './client/components/TaskForm';
import EditTaskForm from './client/components/EditTaskForm';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn React'
        },
        {
          task: 'Learn Angular Native'
        },
        {
          task: 'Learn Angular'
        },
        {
          task: 'Learn IOS'
        },
        {
          task: 'Learn Android'
        }
      ]
    }
    this.onAddStarted = this.onAddStarted.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onEditPressed(editTodoValue) {
    this.setState({editTodoValue, OldEditTodoValue: editTodoValue})
    this.nav.push({
      name: 'editTaskForm'
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onDone(todo) {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo.task !== todo;
    });
    this.setState({
      todos: filteredTodos
    });
  }
  
  onAdd(task) {
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos })
    this.nav.pop();
  }

  onEdit(newTodoValue, oldTodoValue) {
    const filteredTodos = this.state.todos.map((todo) => {
      if(todo.task === oldTodoValue) {
        let editedTodo = {};
        editedTodo.task = newTodoValue;
        return editedTodo;
      } else {
        return todo;       
      }
    })
    this.setState({
      todos: filteredTodos
    });
    this.nav.pop();
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route) {
    switch (route.name) {
      case 'taskform':
        return (<TaskForm
          onCancel={this.onCancel}
          onAdd={this.onAdd}
        />);
      case 'editTaskForm':
        return (<EditTaskForm
          onCancel={this.onCancel}
          onEditStarted={this.onEditStarted}
          onEdit={this.onEdit}
          editTodoValue={this.state.editTodoValue}
          OldEditTodoValue={this.state.OldEditTodoValue}
        />);
      default:
        return (
          <TaskList
            onEditPressed={this.onEditPressed}
            onAddStarted={this.onAddStarted}
            todos={this.state.todos}
            onDone={this.onDone}
          />
        );
    }
  }

  render() {
    return (
        <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        renderScene={this.renderScene}
        ref={((nav) => {
          this.nav = nav;
        })}
        />
    );
  }
}
