import React, { PropTypes } from 'react';

const Login = (props) => {
  return (
    <g>
      {props.children}
    </g>
  );
};

Login.propTypes = {
  children: PropTypes.array,
}; 

export default Login;
