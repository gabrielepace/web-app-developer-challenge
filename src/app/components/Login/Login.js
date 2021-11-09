import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import LoginNavbar from './LoginNavbar';

import '../../styles/Login.css';


const useStyles = makeStyles(theme => ({
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      width: '300px',
    },
  },
}));

async function loginUser(credentials) {
  return fetch(`https://web-app-challenge-gpace-login.herokuapp.com/login`, { // Was: http://localhost:8080/login
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <LoginNavbar />
        <Typography component="h1" variant="h1 bold">
          Login
        </Typography>
        <br />
      <form className={classes.login} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="filled"
          type="text"
          required
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <br />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}