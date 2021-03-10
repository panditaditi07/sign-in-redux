import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/todolist.actions";
import Todolist from "./Todolist";
class AddToDo extends Component {
  state = {
    input: "",
  };
  updateInput = (input) => {
    this.setState({ input });
  };
  handleAddTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <>
        <Navigation />
        <form onSubmit={this.handleAddTodo}>
          <h1>Welcome {this.props.name}, Please add your Todo List</h1>
          <input
            type="text"
            onChange={(e) => {
              this.updateInput(e.target.value);
            }}
            value={this.state.input}
          />
          <button type="submit">Add Todo</button>
        </form>
        <Todolist />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.login.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task) => {
      dispatch(actionCreator.addTodo(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
