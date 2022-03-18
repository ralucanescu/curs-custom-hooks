import React from 'react';

interface ErrorInterface {
    error: string
}

const Error = ({error}: ErrorInterface) => {
    return (
        <div>
            {error}
        </div>
    );
};

export default Error;