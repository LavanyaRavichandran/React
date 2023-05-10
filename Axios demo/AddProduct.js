import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function AddProduct({ setModelOpen, modelOpen, fetchData }) {
  const [productData, setProductData] = useState({
    pName: "",
    pDesc: "",
    pPrice: "",
    pImg: "",
  });
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    console.log(productData);
  };
  const handleSubmit = async () => {
    const response = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      productData
    );
    if (response.data.error) {
      console.log(response.data.error);
      alert(`there is a problem solve it`);
    } else {
      setModelOpen(false);
      fetchData();
    }
  };
  return (
    <div>
      <Modal open={modelOpen}>
        <Box sx={style}>
          <form>
            <label>Product Name</label>
            <input
              type="text"
              name="pName"
              value={productData.pName}
              onChange={handleChange}
            ></input>
            <br></br>
            <label>Product Price</label>
            <input
              type="text"
              name="pPrice"
              value={productData.pPrice}
              onChange={handleChange}
            ></input>
            <br></br>
            <label>Product Description</label>
            <input
              type="text"
              name="pDesc"
              value={productData.pDesc}
              onChange={handleChange}
            ></input>
            <br></br>
            <label>Date</label>
            <input
              type="text"
              name="pImg"
              value={productData.pImg}
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

export default AddProduct;
