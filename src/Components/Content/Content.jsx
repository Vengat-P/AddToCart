import React, { useState } from "react";

const Content = ({ value, setValue, product, cartItems, setCartItem }) => {
  //handle submit function to get added in cart details
  const handleSubmit = (e) => {
    //console.log(product);
    //cart list showing products
    // find the current product already in cartItems or not
    const existItem = cartItems.find((item) => item.id === product.id);
    if (existItem) {
      alert("Item already added to the cart");
    } else {
      setValue((ele) => ele + 1);
      setCartItem(() => {
        return [...cartItems, product];
      });
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-86 h-full justify-center mx-auto shadow-md shadow-gray-400 mt-2">
        <div className="flex justify-center py-2">
          <img
            className="w-36 h-36"
            //loading images from app.jsx
            src={product.image}
            alt={product.id}
          />
        </div>
        <div className="card-body h-full">
          {/* updating details from product state */}
          <h2 className="card-title w-fit">{product.title}</h2>
          <p className="text-xl font-bold text-gray-500">{product.price}$</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary w-full text-xl "
              onClick={handleSubmit}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
