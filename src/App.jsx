import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <div className="w-screen h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-red-300 border rounded border-blue-200 px-2 py-1 absolute left-[20%] top-[3%]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
