import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { Rating } from '@smastrom/react-rating';
import { HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';

const SingleToy = () => {
    const toy = useLoaderData();

    const { sellerName, email, rating, description, toyName, photoUrl, subCategory, price, quantity } = toy

    console.log(toy);


    return (
        <HelmetProvider>
            <div className='px-2 lg:px-20 py-2 md:py-5'>
                <PageTitle title="Toy"></PageTitle>
                <div className='my-3' style={{ overflowX: 'hidden' }}>
                    <Marquee direction="left" pauseOnHover={true} gradient={true} gradientColor={[30, 30, 30]}>
                        <h1 style={{
                            color: '#eb212e',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
                        }}>
                            Unbelievable Toy Bonanza Sale: Up to 70% Off on a Wide Range of Toys! Discover Exciting Deals, Discounts and Special Offers to Delight Kids of All Ages!&nbsp;
                        </h1>
                    </Marquee>
                </div>
                <div className='grid grid-cols-5 gap-2 mt-6'>
                    <div className=" border col-span-4 rounded">
                        <div>
                            <div className="hero-content flex-row gap-12">
                                <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h2 className="text-4xl font-bold text-center mb-6">Toy Name: {toyName}</h2>
                                    <div className='flex justify-between mr-28'>
                                        <h3 className='font-semibold text-lg'>Sub Category : <span className='font-normal text-gray-600'>{subCategory}</span></h3>
                                        <h3 className='font-semibold text-lg'>Price : <span className='font-normal text-gray-600'>{price}</span>$</h3>
                                    </div>
                                    <div className='flex justify-between mr-12'>
                                        <h3 className='font-semibold text-lg'>Available Quantity: <span className='font-normal text-gray-600'>{quantity}</span></h3>
                                        <div className='flex gap-1'>
                                            <h3 className='font-semibold text-lg'>Rating : </h3>
                                            <div className='mt-1'>
                                                <Rating
                                                    style={{ maxWidth: 90 }}
                                                    value={rating} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg'>
                                            Toy Description:
                                        </h3>
                                        <p className='text-gray-600'>
                                            {description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-lg underline'>
                                            Seller Information:
                                        </h3>
                                        <h3 className='font-semibold'>
                                            Name: <span className='font-normal text-gray-600'>{sellerName}</span>
                                        </h3>
                                        <h3 className='font-semibold'>
                                            Email: <span className='font-normal text-gray-600'>{email}</span>
                                        </h3>
                                    </div>
                                    <button className="btn btn-primary btn-block text-white mt-6">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h2 className='font-bold text-center text-2xl bg-red-600 text-white rounded py-2 shadow-xl'>NEW ARRIVAL</h2>
                        <div className="card bg-base-100 rounded-lg my-2 shadow-xl">
                            <a href="">
                                <figure className='rounded-t-lg'>
                                    <img style={{ height: "12rem" }} src="https://i.postimg.cc/wxZzrzfB/ezgif-com-webp-to-jpg.jpg" />
                                </figure>
                            </a>
                            <div className="p-3">
                                <h2 className="card-title">
                                    VENOM!
                                    <div className="badge badge-primary text-white">NEW</div>
                                </h2>
                                <p className='text-gray-500 '><small>Marquee</small></p>
                                <h2>
                                    <span className='font-bold'>Price:</span> 200$
                                </h2>

                            </div>
                        </div>
                        <div className="card bg-base-100 rounded-lg shadow-xl">
                            <a href="">
                                <figure className='rounded-t-lg'><img style={{ height: "12rem" }} src="https://i.postimg.cc/W4gqdSdG/iron-man-mark-lxxxv-marvel-gallery-63f7f3a991f99.jpg" /></figure>
                            </a>
                            <div className="p-3">
                                <h2 className="card-title">
                                    IRON MAN!
                                    <div className="badge badge-primary text-white">NEW</div>
                                </h2>
                                <p className='text-gray-500 '><small>Marquee</small></p>
                                <h2>
                                    <span className='font-bold'>Price:</span> 250$
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </HelmetProvider>
    );
};

export default SingleToy;