import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function TodoComponent() {
  const [arr, setArr] = useState([]);
  const [tasks, setTasks] = useState("");
  const handleAdd = (tasks) => {
    const newArr = {
      id: Math.random(),
      todo: tasks,
      complete: false,
    };
    setArr([...arr, newArr]);
    setTasks("");
  };
  const handleChange = (e) => {
    setTasks(e.target.value);
  };
  const handleDelete = (id) => {
    const newValue = arr.filter((value) => {
      if (value.id != id) {
        return true;
      }
    });
    setArr(newValue);
  };
  const handleComplete = (id) => {
    const comArr = arr.map((value) => {
      return value.id === id ? { ...value, complete: true } : { ...value };
    });
    console.log(comArr);
    setArr(comArr);
  };

  return (
    <div>
      <form>
        <label>Task</label>
        <br></br>
        <input
          type="text"
          name="pTask"
          id="pTask"
          value={tasks}
          onChange={handleChange}
        ></input>
        <button
          type="button"
          onClick={() => {
            handleAdd(tasks);
          }}
        >
          Add
        </button>
      </form>
      {arr.map((value) => {
        return (
          <div>
            <span
              style={{
                textDecorationLine: value.complete ? "line-through" : "none",
              }}
            >
              {value.todo}
            </span>
            <button
              onClick={() => {
                handleComplete(value.id);
              }}
            >
              Completed
            </button>
            <button
              onClick={() => {
                handleDelete(value.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoComponent;
