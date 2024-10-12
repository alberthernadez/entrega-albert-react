import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "../services/products.service";
import Loader from "../components/Loader/Loader"



const Home = () => {
    const [productsData, setProductsdata] = useState ([]);
    const [loading,setLoanding] = useState(true);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProductsdata(res.data.products);
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => setLoanding(false));
    },[]);

    return loading ?( < Loader/> 
    ) : ( 
    <ItemListContainer products={productsData} />
);
};

export default Home; 