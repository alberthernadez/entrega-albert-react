import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";



export const useItems = () => {
    const [productsData, setProductsdata] = useState ([]);
    const [loading,setLoanding] = useState(true);
    useEffect(() => {
        getAllProducts()
        .then((res) => {
            setProductsdata(res.data.products);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoanding(false));
    },[]);

    return {productsData, loading};
};