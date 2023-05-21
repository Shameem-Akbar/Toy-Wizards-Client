import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const ShopToy = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, toyName, photoUrl, price, rating } = toy;
    const handleAlert = () => {
        if (!user) {
            Swal.fire(
                'Warning!',
                'You Must Login First',
                'error'
            )
        }
    }
    return (
        <div>
            <div className="card glass hover:shadow-white hover:shadow-md">
                <figure><img className="h-[26rem] w-full" src={photoUrl} alt="car!" /></figure>
                <div className="p-2 text-white">
                    <h2 className="text-xl font-bold">{toyName}</h2>
                    <h4 className='font-semibold'>Price : {price}$</h4>
                    <div className='flex gap-1'>
                        <h4 className='font-semibold'>Rating : </h4>

                        <div className='mt-1'>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={rating} readOnly />
                        </div>
                    </div>
                    <div className="card-actions justify-end ">
                        <Link to={`/toy/${_id}`}>
                            <button onClick={handleAlert} className="btn btn-primary text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopToy;