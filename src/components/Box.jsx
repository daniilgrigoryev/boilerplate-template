import React from 'react'

const Box = ({className, children}) => (
    <div className={`box ${className}`}>{children}</div>
);
export default Box;
