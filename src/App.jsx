import React, { useEffect, useState } from "react";
import Heading from "./Components/Content/Navbar";
import Content from "./Components/Content/Content";
import axios from "axios";
import Navbar from "./Components/Content/Navbar";
const App = () => {
  //set state for store data from api

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useeffect function with include fetchdata call

  useEffect(() => {
    fetchData();
  }, []);

  //fetch data through axios

  const fetchData = async () => {
    try {
      //store value in variable name (data from fake api )
      // to use axios we need to install in cmd propmt (npm i axios)
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  if (loading) {
    return <div>....Loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar products={products}/>
    </>
  );
};

export default App;
