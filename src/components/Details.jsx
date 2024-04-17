import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
    const[product, setproduct] = useState(null);
    const {id} = useParams();
    const getSingleProduct = async () => {
        try {
            const {data} = await axios.get(`/products/${id}`);
            console.log(data);
            setproduct(data);
        }
        catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    },[]);

    return product ? (
        <div className="w-[70%] h-full p-[10%] shadow rounded-lg border bg-gray-100 m-auto flex justify-between items-center">
            <img className="object-contain mix-blend-multiply  w-[40%]" src={product.image} alt=""/>
            <div className="content w-[50%] mt-10">
                <h1 className="text-3xl mb-2">{product.title}</h1>
                <h2 className="text-zinc-400 mb-2">{product.category}</h2>
                <h2 className="text-red-500 mb-2">$ {product.price}</h2>
                <p className="mb-[5%]">{product.description}</p>
                <Link className="border rounded border-blue-200 mr-5 px-3 py-2 text-blue-300">Edit</Link>
                <Link className="border rounded border-red-200 px-3 py-2 text-red-300">Delete</Link>
            </div>
        </div>  
    ) : (
        <Loading />
    );   
}
export default Details;