import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { BsPin, BsPinFill } from "react-icons/bs"
import Swal from 'sweetalert2';
const BlogCard = ({ blog }) => {

    const { id, name, image, profession, published_date, blog_title, blog_description, read_time, tags } = blog
    const [changePin, setChangePin] = useState(true);
    const [clickCount, setClickCount] = useState(0);

    const handlePin = (id) => {
        setChangePin(!changePin);
        setClickCount(clickCount + 1);
    }

    const showAlert = () => {
        if (clickCount % 2 === 0) {
            Swal.fire(
                {
                    icon: 'success',
                    title: 'Post is Pinned',
                    timer: '1500',
                    showConfirmButton: false,
                }
            );
        }
        else if (clickCount % 2 !== 0) {
            Swal.fire(
                {
                    icon: 'success',
                    title: 'Post is Unpinned',
                    timer: '1500',
                    showConfirmButton: false,
                }
            )
        }
    }

    return (
        <div>
            <div className='px-2 md:px-56 py-8 grid md:grid-cols-5 gap-4'>
                <div>
                    <div className="flex items-center space-x-4 md:col-span-1">
                        <img className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={image} alt="" />
                        <div>
                            <h2 className="font-semibold text-xl text-gray-200">{name}</h2>
                            <div className="text-sm text-gray-500">{published_date}</div>
                        </div>
                    </div>
                    <button className='btn btn-xs btn-primary text-white px-5 rounded-full mt-3'>{profession}</button>
                </div>
                <div className='md:col-span-4 md:px-5'>
                    <div className='flex justify-between'>
                        <h2 className="text-4xl font-semibold mb-3 text-gray-200">{blog_title}</h2>

                    </div>
                    <p className="text-gray-400">{blog_description} </p>
                    <div className='flex justify-between mt-3 text-gray-500'>
                        <div className='flex gap-2 py-2'>
                            {
                                tags.map(tag => <div
                                    key={tag}
                                ><p>#{tag}</p>
                                </div>)
                            }
                        </div>
                        <div className='flex align-middle'>
                            <div className='flex p-2'>
                                <div className='mt-1 mr-2'>
                                    <FaEye></FaEye>
                                </div>
                                <div>
                                    {read_time} read
                                </div>
                            </div>
                            {changePin ?
                                <BsPin onClick={() => { handlePin(id), showAlert() }} className='mt-2 text-2xl'></BsPin> :
                                <BsPinFill onClick={() => { handlePin(id), showAlert() }} className='mt-2 text-2xl text-primary'></BsPinFill>}
                        </div>
                    </div>
                    <div className='w-full mt-2'>
                        <div className="">
                            <textarea rows="3" className="w-full textarea textarea-bordered " placeholder="Write a comment..."></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="btn btn-primary text-white btn-sm px-4">
                                Post a comment
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='md:mx-52' />
        </div>
        //done
    );
};

export default BlogCard;