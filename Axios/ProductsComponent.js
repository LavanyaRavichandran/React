import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProducts from "./AddProducts";

function ProductsComponent() {
  const [posts, setPosts] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); //[modelOpen]
  const fetchData = async () => {
    const response = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    if (response.data.data) {
      setPosts(response.data.data);
    }
  };
  const handleDelete = async (id) => {
    const deres = await axios.delete(
      `https://p-9x7e.onrender.com/products/delete-product/${id}`
    );
    if (deres.data.error) {
      console.log(deres.data.error);
      alert("something went wrong");
    } else {
      fetchData();
    }
  };
  const handleEdit = async (id) => {
    const res = await axios.put(
      `https://p-9x7e.onrender.com/products/edit-product/${id}`
    );
  };
  return (
    <div>
      <button
        onClick={() => {
          setModelOpen(true);
        }}
      >
        Add
      </button>
      <table border="2px">
        <tr>
          <td>Price</td>
          <td>Name</td>
          <td>Description</td>
          <td>Date</td>
        </tr>
        {posts.map((val) => {
          return (
            <tr>
              <td>{val.pPrice}</td>
              <td>{val.pName}</td>
              <td>{val.pDesc}</td>
              <td>{val.date}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(val._id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(val._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      {modelOpen ? (
        <AddProducts
          setModelOpen={setModelOpen}
          modelOpen={modelOpen}
          fetchData={fetchData}
        />
      ) : (
        " "
      )}
    </div>
  );
}

export default ProductsComponent;
