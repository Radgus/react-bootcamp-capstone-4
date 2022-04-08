import React from 'react';

const LoaderHOC = ({Component, spead}) => (
  <Component spead={spead}/>
);

export default LoaderHOC;
