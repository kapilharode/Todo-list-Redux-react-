import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Hader from "../Hader/Hader";
import AddTodo from "../AddTodo/AddTodo";

const Loginrequest = (props) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/Hader`;
    history.push(path);
  };
  const initState = {
    userName: "",
    pwd: ""
  };

  //  const store = createStore(reducer,initState);
  const [userName, setuserName] = useState("");

  return (
    <div>
      <form>
        <h3>TODOLIST LOGIN </h3>
        <div className="login">
          Please Enter your user Name
          <br />
          <input
            type="text"
            placeholder="USERNAME"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            required
          />
          <br />
          <input type="password" placeholder="PASSWORD" />
        </div>
        {userName.length > 0 && <butoon onClick={routeChange}>LOG IN</butoon>}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginData: state
  };
};

export default connect(mapStateToProps)(Loginrequest);
