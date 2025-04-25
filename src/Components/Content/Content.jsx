import React from 'react';

const Content = ({product}) => {
//handle submit function to get added in cart details
const handleSubmit = ()=>{
    
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
      <button className="btn btn-primary w-full text-xl " onClick={handleSubmit}>Add to Cart</button>
    </div>
  </div>
</div> 
        </>
    );
};

export default Content;