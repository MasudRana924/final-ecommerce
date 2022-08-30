import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Products.css'

const Product = ({ product, handleAddToCart }) => {
    const { _id, img, category, ratings, price, stock, name } = product
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const heart = <FontAwesomeIcon icon={faHeart} />

    return (
        <Link to={`/details/${_id}`} className="text-decoration-none text-dark">
            <Col className="mt-3">
                <div className="" >
                    <div className="products-card ms-1">
                        <div className="heart-sale  me-3 ">
                            <p className="sale">5% off</p>
                            <button className="heart-btn ">
                                {heart}
                            </button>
                        </div>
                        <Link to={`/details/${_id}`}>
                            <img className="product-image" src={img} alt="" />
                        </Link>
                        <Link to={`/details/${_id}`} className="text-decoration-none text-dark">
                            <p className="text-start ms-3 mt-1 fw-bold">{category}</p>
                        </Link>
                        <Link to={`/details/${_id}`} className="text-decoration-none text-dark">
                            <p className="text-start ms-3 mt-1 fw-bold">{name.slice(0, 50)}</p>
                        </Link>
                        <div className=" price-rating ms-3 me-3">
                            <p className="desc text-start  mt-1">${price} </p>
                            <Rating
                                initialRating={ratings}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating>
                        </div>
                        <div className=" price-rating ms-3 me-3">
                            <p className="desc text-start ">stock <span className="fw-bold">{stock} </span> items</p>
                            {/* <button className="cart-btn " onClick={() => handleAddToCart(product)}>
                            {cartIcon}
                            </button> */}

                        </div>

                    </div>
                </div>
            </Col>
        </Link>

    );
};

export default Product;