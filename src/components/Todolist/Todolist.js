import React from "react";
import { connect } from "react-redux";
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* handleDelete = (ind) => {
    this.props.deleteTodo(ind);
  };
*/
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.propsisChecked}
          onClick={() => {
            this.props.taskCompleted(this.props.propsInd);
          }}
        />
        {this.props.propsisChecked ? (
          <strike>
            <h2>{this.props.propsTask}</h2>
          </strike>
        ) : (
          <h2>{this.props.propsTask}</h2>
        )}

        <button
          onClick={() => {
            this.props.deleteTodo(this.props.propsInd);
          }}
        >
          Remove
        </button>

        {/* <div className="card">
          {this.props.todoData.map((item, ind) => {
            return (
              <div style={{ border: "1px solid", margin: "10px" }}>
                <li key={ind}>
                  <input
                    type="checkbox"
                    onClick={this.setState({})}
                  />

                  {item.todo}

                  <button onClick={() => this.handleDelete(ind)}>Remove</button>
                </li>
              </div>
            );
          })}
        </div>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoData: state.todoDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskCompleted: (val) => dispatch({ type: "TASK_COMPLETED", payload: val }),
    deleteTodo: (val) => dispatch({ type: "DELETE_TODO", payload: val })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
