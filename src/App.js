import React from "react";
import { TodoList } from "./todoList";

import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="page-body">
        <div className={"blocks"}>
          <div
            style={{
              width: "auto",
              textAlign: "left",
              fontSize: 12,
              backgroundColor: "#efefef",
              padding: 20,
              marginBottom: 20
            }}
          >
            <h1>Todo List</h1>
            <p>INSTRUCTION:</p>
            <p>Create a todo list where youu can create/edit/delete tasks.</p>
            <p>You should also be able to mark your tasks as done.</p>
            <p>When you delete a task it should be removed from the list.</p>
            <p>New tasks should be added to the top of the list.</p>
          </div>
          <div style={{ flexGrow: 1, justifyContent: "flex-start" }}>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}
