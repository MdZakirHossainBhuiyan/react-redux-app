import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {setProducts} from '../Redux/Actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log("Error ", error);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{"marginTop": "100px"}}>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </div>
    );
};

export default ProductListing;