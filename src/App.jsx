import React, { useEffect, useState } from "react";
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
      //after geting data store that data in product state
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
      {/* products displayed in content component products passed through navbar */}
      <Navbar products={products} />
    </>
  );
};

export default App;
