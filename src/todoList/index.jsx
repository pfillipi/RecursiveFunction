import React, { useState, useRef } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [indexOfEditedTask, setIndexOfEditedTask] = useState(-1);
  const inputRef = useRef();
  const editRef = useRef();

  const handleAddTaskClicked = () => {
    setIndexOfEditedTask(-1);
    setTasks((tasks) => [inputRef.current.value, ...tasks]);
  };
  const handleTaskChecked = (i) => {
    tasks.splice(i, 1);
    setTasks([...tasks]);
  };

  const handleSaveClicked = (i) => {
    tasks[i] = editRef.current.value;
    setTasks([...tasks]);
    setIndexOfEditedTask(-1);
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddTaskClicked}>Add task</button>
      {tasks.map((task, i) => (
        <div key={i}>
          <input type="checkbox" onChange={() => handleTaskChecked(i)} />
          {i !== indexOfEditedTask && task}
          {i !== indexOfEditedTask && <button onClick={() => setIndexOfEditedTask(i)}>Edit</button>}
          {i === indexOfEditedTask && <input type="text" defaultValue={task} ref={editRef} />}
          {i === indexOfEditedTask && <button onClick={() => handleSaveClicked(i)}>Save</button>}
        </div>
      ))}
    </div>
  );
};
