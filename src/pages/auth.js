import React from 'react';
import { useState } from 'react';
import { StyledNav } from '../styles/styledComponents';
import Login from '../components/Login';
import Register from '../components/Register';
import { useFirebase } from '../context/context';
import { getAuth } from 'firebase/auth';
const Auth = () => {
  const [active, setActive] = useState('login');
  const firebaseAuth = getAuth(useFirebase());
  return (
    <div>
      <StyledNav active={active}>
        <a href='#' className='logo'>
          GetItDone
        </a>
        <ul className='switcher'>
          <li>
            <span
              className='login'
              onClick={e => setActive(e.target.className)}
            >
              Login
            </span>
          </li>
          <li>
            <span
              className='register'
              onClick={e => setActive(e.target.className)}
            >
              Register
            </span>
          </li>
        </ul>
      </StyledNav>
      {active == 'register' ? (
        <Register auth={firebaseAuth} />
      ) : (
        <Login auth={firebaseAuth} />
      )}
    </div>
  );
};

export default Auth;
