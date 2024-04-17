import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {

  const [products] = useContext(ProductContext);
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category],[]);
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, 0.6)`;
  };
  
  console.log(color());

    return(
      <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a href="/create" className="border rounded border-blue-200 px-3 py-2 text-blue-300">Add New product</a>
        <hr className="my-3 w-[80%]"/>
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
        <div className="w-[80%]">
          {distinct_category.map((c, i) => (
            <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3">
              <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[15px] h-[15px] block"></span>{" "}{c}
            </Link>
          ))}
        </div>
      </nav>
    );
};
export default Nav;