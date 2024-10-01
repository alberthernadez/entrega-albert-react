import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "../services/products.service";


const Home = () => {
    const [productsData, setProductsdata] = useState ([]);
    const [loading,setLoanding] = useState(true);
    useEffect(() => {
        getAllProducts().then((res) => {
            setProductsdata(res.data.products);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return loading ? <box>loading...</box> : <ItemListContainer products={productsData} />;
};

export default Home; 