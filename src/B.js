import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
console.log('propsTypes ==> ', PropTypes.Object);
const B = forwardRef(({ name }) => {
  return <h2>{name}</h2>;
});
B.defaultProps = {
  name: 'Apple'
};
export default B;
