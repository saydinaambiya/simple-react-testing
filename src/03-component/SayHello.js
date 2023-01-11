import * as React from 'react';

const SayHello = props => {
    const { person } = props;
    return (
        <>
            <h1>Hello {person}!</h1>
            <p>Welcome Home</p>
        </>
    );
};

export default SayHello;