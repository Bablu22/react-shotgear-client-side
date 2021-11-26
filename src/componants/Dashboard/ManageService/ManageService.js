import React from 'react';

const ManageService = ({ service, deleteButton }) => {
    const { name, _id } = service
    return (
        <tr>
            <td>
                <div className="d-flex flex-column  ">
                    <span>Name: {name}</span>
                    <span>Id: {_id}</span>
                </div>
            </td>

            <td>
                <button
                    onClick={() => deleteButton(_id)}
                    className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageService;