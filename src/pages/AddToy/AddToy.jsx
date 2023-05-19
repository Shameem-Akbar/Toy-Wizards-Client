import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import { useForm } from "react-hook-form";

const AddToy = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <HelmetProvider>
            <div>
                <PageTitle title="Add A Toy"></PageTitle>
                <div className='px-2 lg:px-16 py-2 md:py-8 text-white bg-primary' >
                    <h2 className='text-center text-5xl font-semibold py-5'>Add A Toy</h2>
                </div>
                <div className="card-body rounded-md bg-slate-100 md:p-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-5 md:gap-y-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Seller Name</span>
                                </label>
                                <input {...register("sellerName")} type="text" className="input input-bordered" defaultValue={user.displayName} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Seller Email</span>
                                </label>
                                <input {...register("email")} type="text" className="input input-bordered" defaultValue={user.email} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Toy Name</span>
                                </label>
                                <input {...register("toyName", { required: true })} type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Sub Category</span>
                                </label>
                                <select className="select select-bordered" {...register("subCategory")}>
                                    <option value="star">Star Wars</option>
                                    <option value="star2">Harry Potter</option>
                                    <option value="star3">Lord of the Rings</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Toy Photo URL</span>
                                </label>
                                <input {...register("photoUrl", { required: true })} type="url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Price</span>
                                </label>
                                <input {...register("price", { required: true })} type="number" min={1} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-semibold">Rating</span>
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
                                    <span className="label-text text-base font-semibold">Available Quantity</span>
                                </label>
                                <input {...register("quantity", { required: true })} type="number" min={1} className="input input-bordered" />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label className="label">
                                <span className="label-text text-base font-semibold">Toy Detail Description</span>
                            </label>
                            <textarea {...register("description")} placeholder="Add description" className="textarea textarea-bordered textarea-lg w-full max-w" ></textarea>
                        </div>
                        <div className="form-control mt-4">
                            <input className="btn btn-primary btn-block text-white" type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AddToy;