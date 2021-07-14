import React from 'react';
import B from './B';

const A = ({ name }) => {
  console.log(name);
  return <B />;
};

export default A;
