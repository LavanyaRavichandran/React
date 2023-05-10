import React, { useState } from "react";

function FetchComponent() {
  const [val, setVal] = useState([]);
  const fetching = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const simple = res.json();
        return simple;
      })
      .then((fetchData) => {
        setVal(fetchData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={fetching}>Click</button>
      {val.map((value) => {
        return (
          <table>
            <tr>
              <td>{value.userId}</td>
              <td>{value.title}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default FetchComponent;
