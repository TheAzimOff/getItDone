import React from 'react';
import { useState } from 'react';
import { StyledForm } from '../styles/styledComponents';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ auth }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Logged successfully');
      })
      .catch(err => {
        console.log(err.code);
        console.log(err.message);
      });
  };
  return (
    <StyledForm>
      <h1>
        <span className='highlight'>Hey there,</span>
        <br />
        sign up to continue
      </h1>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <button type='submit'>Register</button>
      </form>
    </StyledForm>
  );
};

export default Register;
