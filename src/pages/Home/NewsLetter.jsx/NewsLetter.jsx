import React from 'react';


const NewsLetter = () => {
    return (
        <div className='bg-primary py-1 md:py-5 md:px-40 border-t border-slate-500'>
            <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='md:pr-16 md:border-r-8'>
                    <h2 className='text-4xl text-center md:text-left md:text-5xl font-bold text-white mt-1'>NEWSLETTER</h2>
                </div>
                <div className='flex flex-col md:flex-row md:gap-6 items-center'>
                    <div>
                        <h2 className='text-lg text-center md:text-left md:text-3xl font-bold text-white'>SUBSCRIBE NOW</h2>
                        <p className='text-white'>Want $25 Off? Sign up for our Newsletter.</p>
                    </div>
                    <div className="form-control my-1 md:my-0">
                        <div className="input-group">
                            <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
                            <button className="btn bg-[#0B1320] text-white">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default NewsLetter;