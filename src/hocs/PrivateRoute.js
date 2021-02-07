import React, { useState, useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <Route {...rest} render={props => {
            if (!user)
                return <Redirect to={{
                    pathname: '/auth',
                    state: { from: props.location }
                }} />

            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;