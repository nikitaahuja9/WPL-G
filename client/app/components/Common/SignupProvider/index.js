import React from 'react';

import { GoogleIcon, FacebookIcon } from '../Icon';
import { BASE_API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href="#" className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Login with Google</span>
      </a>

      <a href="#" className='facebook-btn'>
        <FacebookIcon />
        <span className='btn-text'>Login with Facebook</span>
      </a>
    </div>
  );
};

export default SignupProvider;
