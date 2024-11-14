import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("/assets/baseDeDatos/productos.json");
                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }
                const data = await response.json();
                const foundProduct = data.find((product) => product.idProd == id); 
                setProduct(foundProduct);                
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [ id ]);

    if (!product) {
        return <p>Cargando...</p>;
    };

    return(
        <div className="container my-5">
            <div className="row justify-content-center mb-5 w-75">
                <div className="col">
                    <ItemDetail item={ product } stock={ product.stock } />
                </div>
            </div>
        </div>
    )
};

export default ItemDetailContainer;