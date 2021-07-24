import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ( props ) => {
    const { path, redirectTo, component: Component, token, ...rest } = props
    return token ? <Route path={path} render={() => <Component {...rest} />} /> : <Redirect to={redirectTo} />
}


export default ProtectedRoute