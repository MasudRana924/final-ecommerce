import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faGlassCheers, faHeart ,faShareNodes} from '@fortawesome/free-solid-svg-icons'
import useAuth from './../hooks/useAuth';

const Details = () => {
    const {handleAddToCart}=useAuth()
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    const shareIcon = <FontAwesomeIcon icon={faShareNodes} />
    useEffect(() => {
        fetch(`https://fierce-wildwood-12311.herokuapp.com/glass/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return (
        <div className="details-container w-50 mx-auto">
            <Row xs="1" md="2">
                <Col >
                    <div className="image-section">
                       <img src={product.img} alt="" className="details-img img-fluid w-75 mx-auto"/>
                    </div>

                </Col>
                <Col>

                    <div className="details-section">
                        <h3 className="text-start">{product.name}</h3>
                        <span className="rating-section">  <Rating
                            initialRating={3}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>

                        </Rating> (10) Review</span>
                        <p className="price-text">Tk 202 <span className="text-danger">(5% off)</span></p>
                        <p className="tax-text">included all taxes</p>
                        <p className="text-dark text-start fw-bold ms-1">7 days exchange and returns</p>
                        <p className="text-dark text-start  ms-1">Select Size</p>
                       <div className="size-btn-section">
                       <button className="size-btn">S</button>  <button className="size-btn">M</button>  <button className="size-btn">L</button> <button className="size-btn">Xl</button>
                       </div>
                    </div>
                    <p className="text-start">Description</p>
                    <p className="text-start">{product.desc}</p>
                    <div className="whistle-bag-section mt-5">
                        <button className="whistle-btn">{heart}  WISHLIST</button>
                        <button className="bag-btn">{cartIcon}  ADD TO BAG</button>
                    </div>
                    <div className="quantity-section mt-3">
                        <button className="btn-quantity">-</button>
                        <button className="btn-quantity">1</button>
                        <button className="btn-quantity">+</button>
                    </div>
                    <div className="add-cart-section mt-3">
                        <button className="add-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
                        <button className="share-btn">SHARE {shareIcon}</button>
                       
                    </div>
                 

                </Col>

            </Row>

        </div>
    );
};

export default Details;