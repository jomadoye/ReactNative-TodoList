import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight } from 'react-native';

export default class EditTaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      task: props.editTodoValue
    }

    this.onChange = this.onChange.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
  }

  onChange(task) {
    this.setState({
      task
    });
  }

  onEditPressed() {
    this.props.onEdit(this.state.task, this.props.OldEditTodoValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChange}
          style={styles.input}
          value={this.state.task}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onEditPressed}
        >
          <Text
            style={styles.buttonText}
          >
            Edit TODO
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text
            style={[styles.buttonText]}
          >
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'flex-start',
    paddingTop: 150
    // borderWidth: 1,
    // borderColor: '#E7E7E7',
    // padding: 20,
    // flexDirection: 'row',
    // alignItems: 'center',
  // },
  // label: {
  //   padding: 20,
  //   fontSize: 20,
  //   fontWeight: '300',
  }, buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA'
  }, cancelButton: {
    backgroundColor: '#666'
  }, input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3
  }, button: {
    height:45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

EditTaskForm.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  editTodoValue: React.PropTypes.string.isRequired,
  OldEditTodoValue: React.PropTypes.string.isRequired
}
