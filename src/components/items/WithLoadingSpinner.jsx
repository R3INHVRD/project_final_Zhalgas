import React from 'react';

import LoadingSpinner from './LoadingSpinner';

const withLoadingSpinner = (WrappedComponent) => {
    return ({ isLoading, ...props }) => {
        return isLoading ? <LoadingSpinner /> : <WrappedComponent {...props} />;
    };
};

export default withLoadingSpinner;
