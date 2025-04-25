import React, { useEffect, useState } from "react";
import Heading from "./Components/Heading/Navbar";
import Content from "./Components/Content/Content";
import axios from "axios";
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
      <Heading />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* use conditional rendering to check product  is there or not */}

        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div key={index}>
                <Content product={product} />
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

export default App;
