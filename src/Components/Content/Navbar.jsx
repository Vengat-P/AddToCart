import React,{useEffect,useState} from 'react';
import Content from './Content';
import Cartlist from '../Cart/Cartlist';

const Navbar = ({products}) => {
  const [value,setValue] = useState(0)
  const [cartItems,setCartItem]= useState([])
  const [status,setStatus]= useState(true)

  
   const removeFunction = (cartItem)=>{
     const removeId = cartItem.id
    const filteredProducts = cartItems.filter((item)=>{
      if(item.id !== removeId){
        return true ;
      }
    }  )
    setCartItem(()=>{
      return[...filteredProducts]
    })

   }

    return (
        <>
              <div className="navbar bg-blue-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">E-Shop</a>
        </div>
        <div className="flex-none">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-2xl shadow-none bg-transparent border-0"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item bg-transparent border-0">
                {value}
              </span>
            </div>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Your Cart!</h3>
              <div>
              {cartItems.map((cartItem,index)=>{
                return(
                  <div key={index}>
                  <Cartlist value={value} status={status} setValue={setValue} setStatus={setStatus} cartItem={cartItem} setCartItem={setCartItem} removeFunction={removeFunction}/>
                  </div>
                )

              })}
              </div>
              
            </div>
          </dialog>
        </div>
      </div>
         
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* use conditional rendering to check product  is there or not */}
        
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div key={index}>
                <Content product={product} value={value} status={status} setValue={setValue} setStatus={setStatus} cartItems={cartItems} setCartItem={setCartItem}/>
              </div>
            );
          })
        ) : (
          <div> user not found </div>
        )}
      </div>
        </>
    );
};

export default Navbar;