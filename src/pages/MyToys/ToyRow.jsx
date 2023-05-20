import React, { useState } from 'react';
import ViewDetailsModal from './ViewDetailsModal';
import ReactModal from 'react-modal';

const ToyRow = ({ toy, index }) => {

    const { toyName, photoUrl, subCategory, price, quantity, rating } = toy;

    const [viewDetailsModal, setViewDetailsModal] = useState(false);
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
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>
                {subCategory}
            </td>
            <td>{price}</td>
            <td>{quantity}
            </td>
            <td>{rating}
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
                <button className='btn btn-xs btn-info px-3 text-white'>
                    Update
                </button>
            </td>
            <td>
                <button className='btn btn-xs btn-error text-white px-3'>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ToyRow;