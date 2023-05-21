import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateToyModal = ({ setUpdateDetailsModal, toy, handleUpdateToy }) => {
    const { _id, toyName, subCategory, rating, photoUrl } = toy;

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            <div className="card-body rounded-md bg-[#0B1320] md:p-12 relative">
                <div className='flex justify-end absolute top-3 right-3'>
                    <button className="btn btn-primary btn-sm btn-square text-white text-xl" onClick={() => setUpdateDetailsModal(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(handleUpdateToy)}>
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
                            <input {...register("toyName")} type="text" className="input input-bordered" defaultValue={toyName} readOnly />
                        </div>
                        <div className="form-control hidden">
                            <input {...register("_id")} type="text" className="input input-bordered" defaultValue={_id} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200 font-semibold">Sub Category</span>
                            </label>
                            <input type='text' className="input input-bordered" {...register("subCategory")} defaultValue={subCategory} readOnly>
                            </input>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200 font-semibold">Toy Photo URL</span>
                            </label>
                            <input {...register("photoUrl")} type="url" className="input input-bordered" defaultValue={photoUrl} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200 font-semibold">Price <span className='text-error'>(Update*)</span> </span>
                            </label>
                            <input {...register("price", { required: true })} type="number" min={1} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200 font-semibold">Rating</span>
                            </label>
                            <input type='text' className="input input-bordered" {...register("rating")} defaultValue={rating} readOnly>
                            </input>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-200 font-semibold">Available Quantity <span className='text-error'>(Update*)</span></span>
                            </label>
                            <input {...register("quantity", { required: true })} type="number" min={1} className="input input-bordered" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className="label">
                            <span className="label-text text-gray-200 font-semibold">Toy Detail Description <span className='text-error'>(Update*)</span></span>
                        </label>
                        <textarea {...register("description")} placeholder="Add description" className="textarea textarea-bordered textarea-lg w-full max-w" ></textarea>
                    </div>
                    <div className="form-control mt-4">
                        <input className="btn btn-primary btn-block text-white" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateToyModal;