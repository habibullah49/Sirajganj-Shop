import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Order.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    const [orderItem, setOrderItem] = useState([])
    useEffect(() => {
        fetch('https://quiet-retreat-77914.herokuapp.com/orderCollection?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
               
                setOrderItem(data)
            })

    }, [])


    return (
        <div>
            <Header />
            {
                orderItem.map(orderItem =>


                    <div className="style">
                        <div className="order">
                            <h5>{orderItem.name}</h5>
                            <img src={orderItem.imageURL} alt="Image" class="avatar"></img>
                            <h5>{orderItem.wight}</h5>
                            <h5>{orderItem.price}</h5>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default Orders;