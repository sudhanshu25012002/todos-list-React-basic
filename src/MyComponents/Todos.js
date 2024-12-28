import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "4px auto",
  };
  return (
    <div className="container w-50" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos today"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};

export default Todos;
