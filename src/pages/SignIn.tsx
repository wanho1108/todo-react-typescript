import React, { useState, useCallback } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setEmail(value);
    },
    [],
  );
  const passwordChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      setPassword(value);
    },
    [],
  );
  const logIn = useCallback((): void => {
    console.log({ email, password });
  }, [email, password]);

  return (
    <form name="">
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={emailChangeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={passwordChangeHandler}
      />
      <button type="button" onClick={logIn}>
        Log In
      </button>
    </form>
  );
};

export default SignIn;
