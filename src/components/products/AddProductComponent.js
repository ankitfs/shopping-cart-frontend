import React from "react";

const AddProductComponent = () => {
    return (
        <div>
           
            <div className="add-product-form">
                <h2>Add Product Form</h2>
                <div className="form-input-div">
                    <label>Title:</label>
                    <input type="text" name="productTitle"/>
                </div>
                <div className="form-input-div">
                    <label>Description:</label>
                    <textarea name="productDescription"></textarea>
                </div>
                <div className="form-input-div">
                    <label>Stock</label>
                    <input type="number" name="productStock"/>
                </div>
                <div className="form-input-div">
                    <label>Product Category</label>
                    <select name="productcat">
                        <option>Select Category</option>
                    </select>
                </div>
                <div className="form-input-div">
                    <label>Product Sub Category</label>
                    <select name="productcat">
                        <option>Select Sub Category</option>
                    </select>
                </div>
                <div className="form-input-div">
                    <label>Price</label>
                    <input type="number" name="productPrice"/>
                </div>
                <div className="form-input-div">
                    <label>Active</label>
                    <input type="boolean" name="productActive" defaultValue={false}/>
                </div>
                <div className="form-input-div">
                    <label>Thumbnail Image</label>
                    <input type="file" name="thumbnailImage"/>
                </div>
                <div className="form-input-div">
                    <label>Model Image</label>
                    <input type="file" name="modelImage"/>
                </div>
                <div className="form-input-div">
                    <label>Real Image</label>
                    <input type="file" name="realImage"/>
                </div>
                <div className="form-submit-div">
                    <button>Submit</button>
                </div>


            </div>
        </div>
    )
}

export default AddProductComponent;