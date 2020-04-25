import React from 'react';

import './custom-button.styles.scss';
// children is keyword for referring values passed from calling place
// in this case from signin component
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;