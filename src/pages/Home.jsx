import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => { 

    const productsData =[
        {
        id:1,
        name: "zapatilla adidas",
        description: "zapatillas marca adidas tallas 42",
        price: 42,
        stock: 10,
    },
    {
        id:2,
        name:"zapatilla adidas",
        description:"zapatillas marca adidas tallas 44",
        price: 43,
        stock: 12,
    },
    {
        id:3,
        name: "zapatilla adidas",
        description: "zapatillas marca adidas tallas 43",
        price: 49,
        stock: 13,
    },
    {
        id:4,
        name: "zapatilla adidas",
        description: "zapatillas marca adidas tallas 47",
        price: 52,
        stock: 8,
    },
    ];
    
    return <ItemListContainer products={productsData} />;
};

export default Home; 