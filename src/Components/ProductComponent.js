import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div style={{"height": "250px", "width": "200px", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                                <img style={{"height": "250px", "width": "200px"}} src={image} alt={title} />
                            </div>
                            <div className="content left">
                                <div className="header">{title}</div>
                                <div className="meta price">Price: $ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return <>{renderList}</>
};

export default ProductComponent;