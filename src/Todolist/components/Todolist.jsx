import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/todolist.actions";

function TodoList(props) {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <p
            key={task.id}
            // onClick={() => {
            //   props.Completed(task.id);
            // }}
            onDoubleClick={() => {
              props.DeleteTodo(task.id);
            }}
          >
            {task.task}
          </p>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todo.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    DeleteTodo: (id) => dispatch(actionCreator.DeleteTodo(id)),
    // Completed: (id) => dispatch(actionCreator.Completed(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
