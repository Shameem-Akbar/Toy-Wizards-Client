import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import AllToysRow from './AllToysRow';
import { FaSearch } from 'react-icons/fa';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])



    const handleSearch = () => {
        fetch(`http://localhost:5000/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    return (
        <HelmetProvider>
            <div>
                <PageTitle title="All Toys"></PageTitle>
                <div className='px-2 lg:px-16 py-2 md:py-8 text-white bg-primary' >
                    <h2 className='text-center text-5xl font-semibold py-5'>All Toys</h2>
                </div>
                <div className='flex justify-end m-6'>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search Toy Here…" className="input input-bordered" onChange={(e) => setSearchText(e.target.value)} />
                            <button onClick={handleSearch} className="btn btn-square btn-primary">
                                <FaSearch className='text-xl text-white'></FaSearch>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto w-full my-5 border-b">
                    <table className="table table-normal table-zebra w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th className='md:pl-20'>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th className='md:pl-8'>Details</th>

                            </tr>
                        </thead>
                        <tbody>

                            {toys?.map((toy, index) => <AllToysRow
                                key={toy._id}
                                index={index}
                                toy={toy}
                            ></AllToysRow>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllToys;