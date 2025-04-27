import React, { useState } from 'react';
import Navbar from './Navbar';

const Content = ({value,setValue,status,setStatus,product,cartItems,setCartItem}) => {

 
//handle submit function to get added in cart details
const handleSubmit = (e)=>{
    setStatus(false)
    setValue(ele=>ele+1)
    //cart list showing products
   setCartItem(()=>{
     const detail = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price
    }
    return [...cartItems , detail]
   })
         
}


const alertMsg = ()=>{
    alert("Item Already Added")

    
}

    return (
        <>
           <div className="card bg-base-100 w-86 h-full justify-center mx-auto shadow-sm mt-2">
  <div className="flex justify-center">
    <img className="w-36 h-36"
    //loading images from app.jsx 
      src={product.image}
      alt={product.id} />
  </div>
  <div className="card-body h-full">
    {/* updating details from product state */}
    <h2 className="card-title w-fit">{product.title}</h2>
    <p className="text-xl font-bold text-gray-500"> {product.price}$</p>
    <div className="card-actions justify-center">
      {status ? (
        <button className="btn btn-primary w-full text-xl " onClick={handleSubmit}>Add to Cart</button>
      ):(
        <button className="btn btn-primary w-full text-xl "onClick={alertMsg}>Add to Cart</button>
      )}
    </div>
  </div>
</div> 

        </>
    );
};

export default Content;