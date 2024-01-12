import React from 'react'

const background = ({ src, alt, className, ...rest }) => {
    return <img src={src} alt={alt} className={className} {...rest} />;
  };


export default background