import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ViewDetailsModal = ({ setViewDetailsModal, toy }) => {

    const { toyName, photoUrl, subCategory, price, quantity, rating, description } = toy;

    return (
        <div className="hero bg-gray-300">
            <div className="hero-content flex-row gap-6">
                <img src={photoUrl} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-4xl font-bold text-center">Toy Name: {toyName}</h2>
                    <div className='py-1 flex justify-between mr-28'>
                        <h4 className='font-semibold'>Sub Category : {subCategory}</h4>
                        <h4 className='font-semibold'>Price : {price}$</h4>
                    </div>
                    <div className='py-1 flex justify-between mr-8'>
                        <h4 className='font-semibold'>Available Quantity: {quantity}</h4>
                        <div className='flex gap-1'>
                            <h4 className='font-semibold'>Rating : </h4>
                            <div className='me-1 mt-1'>
                                <Rating
                                    style={{ maxWidth: 90 }}
                                    value={rating} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <h4 className='font-semibold'>
                            Description:
                        </h4>
                        <p className='text-gray-600'>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <button className="btn btn-primary btn-sm text-white" onClick={() => setViewDetailsModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsModal;