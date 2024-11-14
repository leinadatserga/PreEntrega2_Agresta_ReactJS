import { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const ItemDetail = ({ item, stock }) => {
    const [ producto, setProducto ] = useState ({});
    useEffect (() => {
        setProducto ( item );
    }, [ item ]);

    return (
        <Container className="my-1">
            <Row className="justify-content-center">
                <Col md={ 6 }>
                    <Card className="text-center text-primary shadow-lg">
                        <Card.Body>
                            <Card.Title as="h3" className="text-primary pt-1 mb-5">{ producto.nombre }</Card.Title>
                            <Card.Img 
                                variant="top" 
                                src={ "/images/" + producto.imagen } 
                                alt={ producto.nombre } 
                                className="img-fluid" 
                            />
                            <Card.Text className="fs-4 mt-3">
                                { producto.descripcion }
                            </Card.Text>
                            <h4 className="bg-info rounded text-danger p-2">
                                Precio: u$s { producto.precio } iva incl.
                            </h4>
                            <h5 className="mt-3">Stock: { stock }</h5>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ItemDetail;