import { Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddProducts({ modelOpen, setModelOpen, fetchData }) {
  const [productData, setProductData] = useState({
    pDesc: "",
    pName: "",
    pPrice: "",
    pImg: "",
  });
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    console.log(productData);
  };
  const handleSubmit = async () => {
    const res = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      productData
    );
    if (res.data.error) {
      console.log(res.data.error);
      alert("something went wrong");
    } else {
      setModelOpen(false);
      fetchData(); //we can commemt it out an dset useEffect to recall the fetch and update in arr will render
    }
  };

  return (
    <div>
      <Modal open={modelOpen}>
        <Box sx={style}>
          <form>
            <label>Product Name:</label>
            <input
              type="text"
              value={productData.pName}
              name="pName"
              onChange={handleChange}
            ></input>
            <br></br>
            <label>Product Description:</label>
            <input
              type="text"
              value={productData.pDesc}
              name="pDesc"
              onChange={handleChange}
            ></input>
            <br></br>

            <label>Product price:</label>

            <input
              type="text"
              value={productData.pPrice}
              name="pPrice"
              onChange={handleChange}
            ></input>

            <br></br>

            <label>Product Image</label>

            <input
              type="text"
              value={productData.pImg}
              name="pImg"
              onChange={handleChange}
            ></input>

            <br></br>

            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
            <button
              onClick={() => {
                setModelOpen(false);
              }}
            >
              Cancel
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddProducts;
