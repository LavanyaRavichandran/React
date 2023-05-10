import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  data: {},
  err: "",
};
const reducer = (preState, action) => {
  console.log(preState);
  console.log(action);
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...preState,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ERR":
      return {
        ...preState,
        loading: false,
        data: action.payload,
      };
  }
};

function FetchComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERR", payload: err.message });
    }
  };
  if (state.loading) {
    return <h1>Loding...</h1>;
  }
  if (state.err) {
    return <p>{state.err}</p>;
  }
  return <h2>{state.data.name}</h2>;
}

export default FetchComponent;
