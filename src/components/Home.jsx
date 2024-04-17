import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Context, { ProductContext } from "../utils/Context";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);
  const {search} = useLocation();
  // console.log(search);
  const category = decodeURIComponent(search.split("=")[1])
  // console.log(category);
  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!filteredProducts || category == "undefined") setfilteredProducts(products);
    if(category != "undefined") getproductscategory();
  },[category,products]);
  // console.log(filteredProducts);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] h-full p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link
            key={i} // added key prop for uniqueness
            to={`/details/${p.id}`} // using p.id for dynamic URL
            className="card p-3 border shadow rounded-md w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className="w-full hover:scale-110 transition-all h-[80%] bg-contain bg-no-repeat bg-center mb-3"
              style={{
                backgroundImage: `url(${p.image})`, // using p.image for dynamic image URL
              }}
            ></div>
            <h1>{p.title}</h1> {/* using p.title for dynamic title */}
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
