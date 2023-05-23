import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../services/appApi";
import "./DashboardProducts.css";

function DashboardProducts() {
    const products = useSelector((state) => state.products);
    const user = useSelector((state) => state.user);
    // removing the product
    const [deletProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
    function handleDeleteProduct(id) {
        // logic here
        if (window.confirm("Are you sure?")) deletProduct({ product_id: id, user_id: user._id });
    }


    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return <tr>
                        <td>
                            <img src={product.pictures[0].url} className="dashboard-product-preview" />
                        </td>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <Button style={{marginRight: "10px"}} onClick={() => handleDeleteProduct(product._id, user._id)} disabled={isLoading}>
                                Delete
                            </Button>
                            <Link to={`/product/${product._id}/edit`} className="btn btn-warning">
                                Edit
                            </Link>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    );
}

export default DashboardProducts;