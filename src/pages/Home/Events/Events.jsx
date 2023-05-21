import React from 'react';
import event1 from '../../../assets/event/event1.jpg'
import event2 from '../../../assets/event/event2.jpg'
import event3 from '../../../assets/event/event3.jpg'
import event4 from '../../../assets/event/event4.jpg'

const Events = () => {
    return (
        <div className='bg-[#0B1320] py-2 md:py-12 md:px-12'>
            <div>
                <h2 className='text-4xl text-white md:text-5xl font-bold text-center'>UPCOMING EVENTS</h2>
            </div>
            <div>
                <p className='text-gray-400 md:px-60 text-center my-3 md:my-4'>
                    Experience the thrill of upcoming events, where action figures take center stage, connecting fans, and unleashing endless excitement. Stay updated and be part of the action at Toys Wizards exclusive gatherings and conventions.
                </p>
            </div>
            <div className='grid ml-12 md:ml-0 grid-cols-1 gap-4 md:grid-cols-4  mt-2 md:mt-8'>
                <div className="card card-compact w-80 bg-base-100 shadow-white shadow-md">
                    <figure><img src={event1} /></figure>
                    <div className="p-2">
                        <h2 className="card-title">DC Comic&apos;s Con 2023</h2>
                        <p>18 May - 21 May, 2023</p>
                        <p className='text-gray-400'>Upcoming</p>
                        <div className="card-actions md:mt-6 justify-end">
                            <button className="btn btn-primary btn-sm px-4 text-white">Book Ticket</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-white shadow-md">
                    <figure><img src={event2} /></figure>
                    <div className="p-2">
                        <h2 className="card-title">Star War Con 2023</h2>
                        <p>22 May - 23 May, 2023</p>
                        <p className='text-gray-400'>Upcoming</p>
                        <div className="card-actions md:mt-6 justify-end">
                            <button className="btn btn-primary btn-sm px-4 text-white">Book Ticket</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-white shadow-md">
                    <figure><img src={event3} /></figure>
                    <div className="p-2">
                        <h2 className="card-title">Marvel Con 2023</h2>
                        <p>24 May - 26 May, 2023</p>
                        <p className='text-gray-400'>Upcoming</p>
                        <div className="card-actions md:mt-6 justify-end">
                            <button className="btn btn-primary btn-sm px-4 text-white">Book Ticket</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-white shadow-md">
                    <figure><img src={event4} /></figure>
                    <div className="p-2">
                        <h2 className="card-title">Star War-2  Con 2023</h2>
                        <p>26 May - 29 May, 2023</p>
                        <p className='text-gray-400'>Upcoming</p>
                        <div className="card-actions md:mt-6 justify-end">
                            <button className="btn btn-primary btn-sm px-4 text-white">Book Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;