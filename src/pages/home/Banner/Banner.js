import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css'
import img from '../../../images/offer.webp'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter} from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    const filter = <FontAwesomeIcon icon={faFilter} className="banner-filter" />
    return (
        <Container fluid className="mt-3">
            <Row xs="1" md="2">

                <Col className="left-col" md="4">
                    <p className="brand-category-title"><i className="fas fa-sort-amount-up"></i>Shop by Category</p>
                    <div className="brand-category">
                        <p><Link to="" className="brand-text"><i className="fas fa-tshirt"></i>Laptop</Link></p>
                        <p> <Link to="" className="brand-text"><i className="fas fa-tshirt"></i>Mobile</Link></p>
                        <p><Link to="" className="brand-text"><i className="fas fa-tshirt"></i>Camera</Link></p>
                        <p> <Link to="" className="brand-text"><i className="fas fa-tshirt"></i> Puma</Link></p>
                        <p><Link to="" className="brand-text"><i className="fas fa-tshirt"></i> Armani</Link></p>
                        <p><Link to="" className="brand-text"><i className="fas fa-tshirt"></i> Apple</Link></p>

                    </div>

                </Col>
                <Col>
                    <div className="banner-img" md="8">
                        <img src={img} alt="" className="banner-image img-fluid" />
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Banner;