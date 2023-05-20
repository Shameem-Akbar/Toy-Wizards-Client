import React, { useState } from 'react';
import ViewDetailsModal from './ViewDetailsModal';
import ReactModal from 'react-modal';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import UpdateToyModal from './UpdateToyModal';

const ToyRow = ({ toy, index, handleToyDelete, handleUpdateToy }) => {

    const { _id, toyName, photoUrl, subCategory, price, quantity, rating } = toy;
    const [viewDetailsModal, setViewDetailsModal] = useState(false);
    const [updateDetailsModal, setUpdateDetailsModal] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            borderRadius: '1rem'
        },
    };


    return (
        <tr>
            <th>
                {index + 1}.
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-12 h-12">
                            <img src={photoUrl} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold md:ml-1">{toyName}</div>
                    </div>
                </div>
            </td>
            <td className='md:pl-8'>
                {subCategory}
            </td>
            <td className='md:pl-6'>{price}$</td>
            <td className='md:pl-8'>{quantity}
            </td>
            <td>
                <Rating
                    style={{ maxWidth: 90 }}
                    value={rating} readOnly />
            </td>
            <td>
                <button className="btn btn-xs px-3 btn-success" onClick={() => setViewDetailsModal(true)}>View Details</button>
                <ReactModal
                    isOpen={viewDetailsModal}
                    onRequestClose={() => setViewDetailsModal(false)}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <ViewDetailsModal
                        setViewDetailsModal={setViewDetailsModal}
                        toy={toy}
                    >
                    </ViewDetailsModal>
                </ReactModal>
            </td>
            <td>
                <button onClick={() => setUpdateDetailsModal(true)} className='btn btn-xs btn-info px-3 text-white'>Update</button>
                <ReactModal
                    isOpen={updateDetailsModal}
                    onRequestClose={() => setUpdateDetailsModal(false)}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <UpdateToyModal
                        setUpdateDetailsModal={setUpdateDetailsModal}
                        toy={toy}
                    >
                    </UpdateToyModal>
                </ReactModal>

            </td>
            <td>
                <button onClick={() => handleToyDelete(_id)} className='btn btn-xs btn-error text-white px-3'>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ToyRow;