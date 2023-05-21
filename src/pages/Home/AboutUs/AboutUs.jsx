import React from 'react';
import aboutImg from '../../../assets/icons/aboutImg.jpg'

const AboutUs = () => {
    return (
        <div className='bg-[#0B1320] py-2 md:py-12 md:px-12 text-white'>
            <div className="hero min-h-fit">
                <div className="hero-content md:gap-20 md:px-24 flex-col-reverse lg:flex-row-reverse">
                    <img src={aboutImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold">About Us</h1>
                        <p className="pt-6 text-gray-400">At Toys Wizards, we believe in the power of imagination and the magic of play. We are a dedicated team of toy enthusiasts, bringing you the most thrilling and captivating action figures from across the realms. With a passion for collectibles and a commitment to quality, we aim to provide an extraordinary experience for action figure lovers of all ages.</p>
                        <p className="py-2 text-gray-400">Our mission is to be your ultimate destination for all things action figures. We curate an extensive collection that spans superheroes, movie characters, iconic battles, and much more. From classic legends to the latest releases, we handpick each action figure with meticulous care to ensure we offer only the finest selection.</p>
                        <p className="pb-2 text-gray-400">What sets us apart is our unwavering commitment to authenticity and customer satisfaction. We partner with renowned toy brands and trusted suppliers, ensuring that every action figure you find on our website is genuine, detailed, and built to withstand the most epic adventures. We value your trust and strive to exceed your expectations in every aspect of your shopping experience.</p>
                        <button className="btn btn-primary btn-outline text-white md:mt-5">Explore Our Collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;