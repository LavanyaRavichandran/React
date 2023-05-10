import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function Product() {
  const [posts, setPosts] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const [model2Open, setModel2Open] = useState(false);
  const [editId, setEditId] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    if (response.data.data) {
      setPosts(response.data.data);
    }
    console.log(response.data.data);
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `https://p-9x7e.onrender.com/products/delete-product/${id}`
    );
    if (response.data.error) {
      console.log("error");
    } else {
      fetchData();
    }
  };
  // const handleEdit = async (id) => {
  //   const response = await axios.put(
  //     `https://p-9x7e.onrender.com/products/edit-product/${id}`,
  //     {
  //       pName: "Mobile",
  //       pPrice: "44848",
  //       pDesc: "RedmiNote8",
  //       pImg: "qwertyuiojkui",
  //     }
  //   );
  //   if (response.data.error) {
  //     console.log("error");
  //   } else {
  //     fetchData();
  //   }
  // };
  const handleEdit = (id) => {
    setModel2Open(true);
    setEditId(id);
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
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>Date</th>
        </tr>
        {posts.map((value) => {
          return (
            <tr>
              <td>{value.pName}</td>
              <td>{value.pDesc}</td>
              <td>{value.pPrice}</td>
              <td>{value.date}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(value._id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(value._id);
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
        <AddProduct
          setModelOpen={setModelOpen}
          modelOpen={modelOpen}
          fetchData={fetchData}
        />
      ) : (
        " "
      )}
      {model2Open ? (
        <EditProduct
          setModel2Open={setModel2Open}
          model2Open={model2Open}
          fetchData={fetchData}
          id={editId}
        />
      ) : (
        " "
      )}
    </div>
  );
}

export default Product;
