import React, { useContext, useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AuthContext } from '../../providers/AuthProvider';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';

const options = [
    { value: 'Price-Ascending' },
    { value: 'Price-Descending' }
]

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    const [sortingOption, setSortingOption] = useState('');

    useEffect(() => {
        const url = new URL(`https://toy-wizards-server.vercel.app/my-toys/${user?.email}`);
        url.searchParams.append('sort', sortingOption);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, [user, control, sortingOption]);


    const handleToyDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#E60000',
            cancelButtonColor: '#5a5a5a',
            confirmButtonText: 'Confirm Delete'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-wizards-server.vercel.app/delete-toy/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'A Toy has been deleted.',
                                    'success'
                                )
                                const remaining = toys.filter(toy => toy._id !== id)
                                setToys(remaining);
                            }
                        });
                }
            })
    }

    const handleUpdateToy = data => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#00A300',
            cancelButtonColor: '#E60000',
            confirmButtonText: 'Confirm Update'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-wizards-server.vercel.app/update-toy/${data._id}`, {
                        method: 'PUT',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Toy Updated Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                });
                                setControl(!control);
                            }
                        })
                }
            })
    }

    const handleSortingChange = event => {
        const selectedOption = event.target.value;
        console.log(selectedOption);
        setSortingOption(selectedOption);
    }

    return (
        <HelmetProvider>
            <div>
                <PageTitle title='My Toys'></PageTitle>
                <div className='px-2 lg:px-16 bg-gray-200 py-2 md:py-5' >
                    <h2 className='text-center text-5xl font-semibold py-5 uppercase'>My Toys</h2>
                </div>
                <div className='px-2 md:px-12 py-2'>
                    <div className='flex justify-end mt-5'>
                        <h2 className='mt-3 font-semibold mr-2 text-gray-200'>Sort By :</h2>
                        <select id="sorting" className="select select-bordered w-full max-w-xs" value={sortingOption} onChange={handleSortingChange}>
                            <option value="">Default</option>
                            <option value="highToLow">Price: High to Low</option>
                            <option value="lowToHigh">Price: Low to High</option>
                        </select>
                    </div>
                    <div className="overflow-x-auto w-full my-5 border rounded-lg">
                        <table className="table table-normal table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th className='md:pl-20'>Toy Name</th>
                                    <th>Sub-Category</th>
                                    <th>Price</th>
                                    <th>Available Quantity</th>
                                    <th className='md:pl-6'>Rating</th>
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
                                    handleToyDelete={handleToyDelete}
                                    handleUpdateToy={handleUpdateToy}
                                ></ToyRow>)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </HelmetProvider >
    );
};

export default MyToys;