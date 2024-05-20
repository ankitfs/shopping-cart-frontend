import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {

    const navigate = useNavigate();

    const addProductHandler = () => {
        navigate('/addproduct');
    }
    return (
        <div className="homediv">
            <center>Home Page</center>
            <center>
                <p className="product-operations">
                    <button>Product Listing</button>
                    <button onClick={addProductHandler}>Add Product</button>
                    <button>Update Product</button>
                </p>
                <p className="category-operations">
                    <button>Category Listing</button>
                    <button>Add Category</button>
                    <button>Update Category</button>
                </p>    
            </center>
        </div>
    )
}

export default HomePageComponent;