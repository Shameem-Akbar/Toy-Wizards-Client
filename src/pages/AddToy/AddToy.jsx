import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useForm } from "react-hook-form";

const AddToy = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const onSubmit = (data, e) => {

        data.price = parseFloat(data.price);
        Swal.fire(
            {
                icon: 'success',
                title: 'Toy is added',
                timer: '2000',
                showConfirmButton: false,
            }
        )
        e.target.reset();
        fetch("http://localhost:5000/add-toy", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <HelmetProvider>
            <div>
                <PageTitle title="Add A Toy"></PageTitle>
                <div className='px-2 lg:px-16 bg-gray-200 py-2 md:py-5 border-b border-gray-50' >
                    <h2 className='text-center text-5xl font-semibold py-5 uppercase'>Add A Toy</h2>
                </div>
                <div className='md:px-12 py-4'>
                    <div className="card-body rounded-md bg-[#0e131b] border">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-5 md:gap-y-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Seller Name</span>
                                    </label>
                                    <input {...register("sellerName")} type="text" className="input input-bordered" defaultValue={user?.displayName} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Seller Email</span>
                                    </label>
                                    <input {...register("email")} type="text" className="input input-bordered" defaultValue={user?.email} readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Toy Name</span>
                                    </label>
                                    <input {...register("toyName", { required: true })} type="text" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Sub Category</span>
                                    </label>
                                    <select className="select select-bordered" {...register("subCategory")}>
                                        <option value="Marvel">Marvel</option>
                                        <option value="DC Comics">DC Comics</option>
                                        <option value="Star Wars">Star Wars</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Toy Photo URL</span>
                                    </label>
                                    <input {...register("photoUrl", { required: true })} type="url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Price</span>
                                    </label>
                                    <input {...register("price", { required: true })} type="number" min={1} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Rating</span>
                                    </label>
                                    <select className="select select-bordered" {...register("rating", { required: true })}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-200 font-semibold">Available Quantity</span>
                                    </label>
                                    <input {...register("quantity", { required: true })} type="number" min={1} className="input input-bordered" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className="label">
                                    <span className="label-text text-gray-200 font-semibold">Toy Detail Description</span>
                                </label>
                                <textarea {...register("description")} placeholder="Add description" className="textarea textarea-bordered textarea-lg w-full max-w" ></textarea>
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn btn-primary btn-block text-white" type="submit" value="Add Toy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AddToy;