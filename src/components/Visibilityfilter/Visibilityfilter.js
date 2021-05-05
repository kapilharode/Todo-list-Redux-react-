import React from "react";
import { connect } from "react-redux";
import Todolist from "../Todolist/Todolist";
class Visibilityfilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }

  render() {
    console.log(this.props.data);
    const TodoListComponents = this.props.todoData
      .filter((item, index) => {
        if (this.state.filter == "all") {
          return true;
        } else if (this.state.filter == "completed") {
          return item.isChecked;
        } else {
          return !item.isChecked;
        }
      })
      .map((item, index) => {
        return (
          <Todolist
            propsTask={item.todo}
            propsIsChecked={item.isChecked}
            propsInd={index}
          />
        );
      });

    return (
      <div>
        <button
          className="b"
          value="all"
          onClick={(e) => {
            this.setState({ filter: e.target.value });
          }}
        >
          All
        </button>
        <button
          className="b"
          value="completed"
          onClick={(e) => {
            this.setState({ filter: e.target.value });
          }}
        >
          completed
        </button>
        <button
          value="uncompleted"
          className="b"
          onClick={(e) => {
            this.setState({ filter: e.target.value });
          }}
        >
          uncompleted
        </button>

        {TodoListComponents}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoData: state.todoDetails,

    data: state.userName
  };
};

export default connect(mapStateToProps)(Visibilityfilter);
