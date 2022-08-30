import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from './Product';
import useAuth from './../../../hooks/useAuth';

const Products = () => {
   
const {products,handleAddToCart}=useAuth()
   
    return (
        <Container fluid className="mt-5 pt-5">
                 {
                    products.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                    </div> : <div>
                        <Row xs={1} md={4} className="w-75 mx-auto">
                            {
                                products.map(product => <Product
                                    key={product.key}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                ></Product>)
                            }
                        </Row>
                    </div>

                }
        </Container>
    );
};

export default Products;