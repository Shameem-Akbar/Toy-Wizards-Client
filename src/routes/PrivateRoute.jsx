import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <progress className="progress progress-error w-56"></progress>
    }
    if (user?.email) {
        return children
    }

    return <Navigate to='/login' state={location?.pathname} replace></Navigate>
};

export default PrivateRoute;