import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (preState, action) => {
  console.log(preState);
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        ...preState,
        firstCounter: preState.firstCounter + action.payload,
      };
    case "decrement":
      return {
        ...preState,
        firstCounter: preState.firstCounter - action.payload,
      };
    case "reset":
      return { ...preState, firstCounter: action.payload };
  }
};
function Component1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.firstCounter}
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 5 });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 5 });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Component1;
