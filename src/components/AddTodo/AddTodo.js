import React from "react";
import { connect } from "react-redux";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      flag: false
    };
  }

  handleSubmit = () => {
    this.props.addTodo(this.state);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="main_div">
            <div className="center_div">
              <label for="amount">
                <b> ToDoList </b>
              </label>
              <br />

              <button
                type="button"
                className="btn"
                onClick={() => {
                  this.setState({ flag: true });
                }}
              >
                +
              </button>
              <br />

              <h3>Todo Details</h3>
              <div>
                {this.state.flag === true && (
                  <div>
                    <input
                      className="inputs"
                      type="text"
                      value={this.state.todo}
                      onChange={(e) => this.setState({ todo: e.target.value })}
                      required
                    />
                  </div>
                )}

                {this.state.todo.length > 0 && (
                  <div>
                    <input
                      type="checkbox"
                      checked={this.state.status}
                      onClick={() =>
                        this.setState({ status: !this.state.status })
                      }
                    />
                    <button onClick={() => this.handleSubmit()}>
                      Add Todo
                    </button>
                  </div>
                )}
                <br></br>
              </div>
            </div>
          </div>
        </div>
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
    addTodo: (val) => dispatch({ type: "ADD_TODO", payload: val })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
