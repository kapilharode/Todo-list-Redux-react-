import React from "react";
import Visibilityfilter from "../Visibilityfilter/Visibilityfilter";
import AddTodo from "../AddTodo/AddTodo";

const Hader = (props) => (
  <div>
    <AddTodo />
    <Visibilityfilter />
  </div>
);

export default Hader;
