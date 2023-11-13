import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import EnhancedTable from './EnhancedTable';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

class SignupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validPassword: false,
      passwordLength: false,
      passwordUpperCase: false,
      passwordLowerCase: false,
      passwordDigit: false,
    };
  }

  setUsername = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      username: event.target.value,
    }));
  }

  setPassword = (event) => {
    // check event.target.value for password requirements on signup page
    const password = event.target.value;
    const passwordLength = password.length >= 8;
    const passwordUpperCase = /[A-Z]/.test(password);
    const passwordLowerCase = /[a-z]/.test(password);
    const passwordDigit = /\d/.test(password);
    this.setState((prevState) => ({
      ...prevState,
      password,
      passwordLength,
      passwordUpperCase,
      passwordLowerCase,
      passwordDigit,
    }));
  }

  submitSignup = () => {
    this.props.submitSignup(this.state.username, this.state.password);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.submitSignup();
    }
  }

  render() {
    const {
      passwordLength,
      passwordUpperCase,
      passwordLowerCase,
      passwordDigit,
    } = this.state;
    return (
      <Box 
          className="Login"
          sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
          }}
      >
          <Paper 
            className="Login-body"
            sx={{
              p: 2,
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'linen',
            }}
          >
              <Paper 
                sx={{ minWidth: 120, p: 2 }}
              >
                <FormControl fullWidth onKeyDown={this.handleKeyDown}>
                  <Stack 
                    spacing={2} 
                    direction="column"
                    textAlign={'center'}
                  >
                    <Typography variant="h4">Smart Fridge</Typography>
                    <TextField id="username" label="Username" variant="outlined" onChange={this.setUsername} />
                    <TextField id="password" label="Password" variant="outlined" onChange={this.setPassword} type='password' />
                    <Button variant="outlined" color='secondary' onClick={this.submitSignup}>Sign Up</Button>
                    <Button variant="text" color='warning' onClick={() => this.props.switch('login')}>Login</Button>
                  </Stack>
                </FormControl>
              </Paper>
              <Paper>
                <Stack direction="column" spacing={1} sx={{ m: 2 }}>
                  <Stack direction="row" alignItems="center">
                    <Checkbox checked={passwordLength} color="success" disabled={!this.state.password} />
                    <Typography variant="body1">At least 8 characters</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Checkbox checked={passwordUpperCase} color="success" disabled={!this.state.password} />
                    <Typography variant="body1">At least 1 uppercase letter</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Checkbox checked={passwordLowerCase} color="success" disabled={!this.state.password} />
                    <Typography variant="body1">At least 1 lowercase letter</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Checkbox checked={passwordDigit} color="success" disabled={!this.state.password} />
                    <Typography variant="body1">At least 1 digit</Typography>
                  </Stack>
                </Stack>
              </Paper>
        </Paper>
      </Box>        
    );
  }
}

export default SignupView;