import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero-content max-w-full p-0 md:p-1 md:py-[15.3rem] bg-black bg-opacity-50 text-center text-neutral-content">
                <div className="max-w-xs md:max-w-4xl">
                    <h1 className="mb-1 md:mb-5 text-xl md:text-6xl text-white font-bold">Unleash the Magic of Action Figures at Toys Wizards!</h1>
                    <p className="text-xs md:text-lg text-gray-200 mb-0 md:mb-3">Step into a world of  adventure with our wide selection of action figures. From superheroes to villains, find the perfect companions for epic battles and heroic storytelling. Experience the magic of play at Toys Wizards!</p>
                    <div className='flex md:flex-none gap-1 md:gap-0 justify-center mt-1 mb-2'>
                        <button className="btn btn-primary btn-xs md:btn-md md:btn-wide text-white md:mr-4">Shop Now</button>
                        <button className="btn md:btn-wide md:btn-md btn-xs btn-outline btn-success ">Get offers</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;