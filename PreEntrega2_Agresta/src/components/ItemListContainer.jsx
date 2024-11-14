import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [ product, setProduct ] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/assets/baseDeDatos/productos.json");
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        const filteredProducts = categoryId
          ? data.filter((product) => product.categoria === categoryId)
          : data;
        setProduct(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };    
    fetchProducts();
  }, [ categoryId ]);
  const unparsedCategory = categoryId ? categoryId : "";
  let category;
  if ( unparsedCategory === "monitores-vitales" ) {
    category = "Monitores Vitales";
  } else if ( unparsedCategory === "equipos-quirofano" ) { 
    category = "Equipos de Quirófano";
  } else if ( unparsedCategory === "cirugia-protesis" ) {
    category = "Cirugía y Prótesis";
  } else if ( unparsedCategory === "accesorios-clinicos" ) {
    category = "Accesorios Clínicos";
  } else {
    category = "";
  };

  return (
    <Container fluid className="mb-5">
      <div>
        <p className="bienvenida">{ greeting + category + " ↓ ↓" }</p>
      </div>
      <Row>
        <ItemList product={ product } />
      </Row>
    </Container>
  )
};

export default ItemListContainer;
