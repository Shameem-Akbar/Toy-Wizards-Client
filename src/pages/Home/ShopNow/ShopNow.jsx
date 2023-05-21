import React, { useEffect, useState } from 'react';
import ShopToy from './ShopToy';


const ShopNow = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        fetch(`https://toy-wizards-server.vercel.app/toysBySubCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab])

    return (
        <div className='bg-[#0B1320] py-2 md:py-8 md:px-12'>
            <div>
                <h2 className='text-4xl text-white md:text-5xl font-bold text-center'>SHOP NOW</h2>
            </div>
            <div className='md:mb-8'>
                <p className='text-gray-400 md:px-72 text-center my-3 md:my-4'>
                    Get ready to level up your toy collection! Discover the hottest releases and must-have action figures. Shop now at Toys Wizards and let the adventure begin!
                </p>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div onClick={() => handleTabClick("Marvel")} className={`py-3 md:py-6 px-6 md:px-8 border border-gray-400 font-semibold text-lg ${activeTab == "Marvel" ? "bg-primary text-white" : "bg-white"}`}>
                        Marvel
                    </div>
                </div>
                <div>
                    <div onClick={() => handleTabClick("DC Comics")} className={`py-3 md:py-6 px-6 md:px-8 border border-gray-400 font-semibold text-lg ${activeTab == "DC Comics" ? "bg-primary text-white" : "bg-white"}`}>
                        DC Comics
                    </div>
                </div>
                <div>
                    <div onClick={() => handleTabClick("Star Wars")} className={`py-3 md:py-6 px-6 md:px-8 border border-gray-400 font-semibold text-lg ${activeTab == "Star Wars" ? " bg-red-700 text-white" : " bg-white"}`}>
                        Star Wars
                    </div>
                </div>


            </div>
            <div className='grid grid-cols-3 gap-6 py-2 md:py-8 md:px-12'>
                {
                    toys.map(toy => <ShopToy
                        key={toy._id}
                        toy={toy}
                    ></ShopToy>)
                }
            </div>
        </div>
    );
};

export default ShopNow;