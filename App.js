import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import TaskList from './client/components/TaskList';
import TaskForm from './client/components/TaskForm';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn React',
        },
        {
          task: 'Learn Angular Native',
        },
        {
          task: 'Learn Angular',
        },
        {
          task: 'Learn IOS',
        },
        {
          task: 'Learn Android',
        },
      ]
    }
    this.onAddStarted = this.onAddStarted.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDone = this.onDone.bind(this);
  }s

  onAddStarted() {
    this.nav.push({
      name: 'taskform',
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onDone(todo) {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo.task !== todo;
      console.log(filterTodo.task, ' ', todo);
    });
    this.setState({
      todos: filteredTodos
    })
  }
  
  onAdd(task) {
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos })
    this.nav.pop();
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (<TaskForm
          onCancel={this.onCancel}
          onAdd={this.onAdd}
        />);
      default:
        return (
          <TaskList
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#59983b',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
