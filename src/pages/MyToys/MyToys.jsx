import React, { useContext, useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AuthContext } from '../../providers/AuthProvider';
import ToyRow from './ToyRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user])

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
                            {toys?.map((toy, index) => <ToyRow
                                key={toy._id}
                                toy={toy}
                                index={index}
                            ></ToyRow>)}
                        </tbody>

                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default MyToys;