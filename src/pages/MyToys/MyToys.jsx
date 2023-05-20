import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';

const MyToys = () => {
    return (
        <HelmetProvider>
            <div>
                <PageTitle title='My Toys'></PageTitle>
                <div className='px-2 lg:px-16 py-2 md:py-8 text-white bg-primary' >
                    <h2 className='text-center text-5xl font-semibold py-5'>My Toys</h2>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table table-normal table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th className='pl-20'>Toy Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Rating</th>
                                <th className='md:pl-8'>Details</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    01.
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak
                                </td>
                                <td>Purple</td>
                                <td>Quantity
                                </td>
                                <td>Rating
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-success px-3'>
                                        View Details
                                    </button>
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
                        </tbody>

                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyToys;