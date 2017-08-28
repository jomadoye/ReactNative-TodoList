import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight } from 'react-native';

export default class TaskRow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onDonePressed = this.onDonePressed.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
  }

  onDonePressed() {
    this.props.onDone(this.props.todo.task);
  }

  onEditPressed() {
    this.props.onEditPressed(this.props.todo.task);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.label}
        >
          {this.props.todo.task}
        </Text>

        <TouchableHighlight
        style={styles.exitButtton}
        onPress={this.onEditPressed}
        >
          <Text>Edit</Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={styles.doneButtton}
        onPress={this.onDonePressed}
        >
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  }, doneButtton: {
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    padding: 10,
  }, exitButtton: {
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    padding: 10,
  }
});

TaskRow.propTypes = {
  onEditPressed: React.PropTypes.func.isRequired,
  onDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired
  }).isRequired
}
