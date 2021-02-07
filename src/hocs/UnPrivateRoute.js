import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnPrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <Route {...rest} render={props => {
            if (user)
                return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />

            return <Component {...props} />
        }} />
    )
}

export default UnPrivateRoute;