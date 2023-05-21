import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ index, toy }) => {
    const { _id, sellerName, toyName, photoUrl, subCategory, price, quantity } = toy;
    return (
        <tr>
            <th>
                {index + 1}.
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-12 h-12">
                            <img src={photoUrl} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold md:ml-1">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {subCategory}
            </td>
            <td>{price}$</td>
            <td className='md:pl-20'>{quantity}
            </td>

            <td>
                <Link to={`/toy/${_id}`}><button className="btn btn-xs px-3 btn-warning text-white">View Details</button></Link>
            </td>


        </tr>
    );
};

export default AllToysRow;