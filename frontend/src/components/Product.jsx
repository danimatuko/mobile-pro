import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
	return (
		<Card className="my-3 p-3" style={{ height: "400px" }}>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} />
			</Link>
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div" className="h5">
						{product.name}
					</Card.Title>
				</Link>
				<Card.Text as="div">
					<Rating value={product.rating} text={`${product.numReviews} reviews`} />
				</Card.Text>
		
				<Card.Text as="div">
					<div className="h5">${product.price}</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;