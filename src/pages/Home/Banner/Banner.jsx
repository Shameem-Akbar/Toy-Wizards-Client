import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero-content max-w-full py-[11.8rem] bg-black bg-opacity-50 text-center text-neutral-content">
                <div className="max-w-4xl">
                    <h1 className="mb-5 text-6xl text-white font-bold">Unleash the Magic of Action Figures at Toys Wizards!</h1>
                    <p className="mb-5 mx-4 text-lg text-gray-200">Step into a world of  adventure with our wide selection of action figures. From superheroes to villains, find the perfect companions for epic battles and heroic storytelling. Experience the magic of play at Toys Wizards!</p>
                    <div>
                        <button className="btn btn-primary btn-wide text-white mr-4">Shop Now</button>
                        <button className="btn btn-wide btn-outline btn-success ">Get offers</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;