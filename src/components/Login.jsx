import React, { useState } from 'react';
import { StyledForm } from '../styles/styledComponents';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    console.log('Logged');
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log(err.code);
        console.log(err.message);
      });
  };
  return (
    <StyledForm>
      <h1>
        <span className='highlight'>Welcome back,</span>
        <br /> sign in to continue
      </h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </StyledForm>
  );
};

export default Login;
