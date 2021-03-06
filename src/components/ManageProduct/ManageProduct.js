import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

const ManageProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://quiet-retreat-77914.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    function deleteProduct(id, event) {
      
        console.log("delete", id)
        fetch(`https://quiet-retreat-77914.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                   
                    console.log("display none");
                    document.getElementById('delete').style.display = 'none'
                    console.log(document.getElementById('delete').style.display = "none");
                }

            })
    }

    console.log(product);
    product.map(pd => console.log(pd.name, pd.price))
    return (
        <div>
            <Admin />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        
                    </tr>
                </thead>

                {
                    product.map(pd =>
                        <tbody id="delete">
                            <tr>
                                <th scope="row">{pd.name}</th>
                                <td>{pd.wight}</td>
                                <td>{pd.price}</td>
                                <td><img  onClick={() => deleteProduct(pd._id)} alt="" width="25px" class="m-2" />


                                    <img  data-bs-toggle="modal" data-bs-target="#exampleModal" /></td>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="col-md-6">

                                                    <input name="name" placeholder={pd.name} type="text" class="form-control m-2" id="name" />
                                                    <input name="name" placeholder={pd.wight} type="text" class="form-control m-2" id="name" />
                                                    <input name="name" placeholder={pd.price} type="text" class="form-control m-2" id="name" />

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>
                        </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageProduct;