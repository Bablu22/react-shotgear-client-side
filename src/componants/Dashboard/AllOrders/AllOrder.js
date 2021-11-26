import React from 'react';


const AllOrder = ({ order, deleteButton }) => {
    const { name, email, phone, price, address, itemName, _id } = order

    return (
        <tr>
            <td>
                <div className="d-flex flex-column  ">
                    <span>Name: {name}</span>
                    <span>Email: {email}</span>
                    <span>Phone: {phone}</span>
                    <span>Address: {address}</span>
                </div>
            </td>
            <td>
                <div className="d-flex flex-column  ">
                    <span>Name: {itemName}</span>
                    <span>Id: {_id}</span>
                    <span>Price: ${price}</span>
                </div>
            </td>
            <td>pending</td>
            <td>
                <button
                    onClick={() => deleteButton(_id)}
                    className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default AllOrder;