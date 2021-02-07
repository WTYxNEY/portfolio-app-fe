import React, { useState, useEffect } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import useStyle from './style'
import Input from './Input'
import Icon from './Icon'
import { signUp, signIn } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes';
import Message from '../Message/Message'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const Auth = () => {
    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((pervShowPassword) => !pervShowPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setMessage(null)
    }, [isSignUp])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            if (formData.password.length < 9) {
                setMessage(null)
                setStatus(false)
                setMessage("Passwords must be at least 8 characters")
            }
            else if (formData.password !== formData.confirmPassword) {
                setMessage(null)
                setStatus(false)
                setMessage("Password don't match")
            } else {
                setMessage(null)
                setStatus(true)
                setMessage("Create an account successfully")
                dispatch(signUp(formData, history))
            }

        } else {  
            dispatch(signIn(formData, history)).then((res) => {
                if(res) {
                    setMessage(null)
                    setStatus(false)
                    setMessage("Invalid email or password")
                }
            });
        }
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj; // if it's have no res => undifined
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error)
        }
    };

    const googleFailure = (error) => {
        console.log("Google Sign In was unsuccessful. Try Again Later") //clear cached to fix error
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'SignUp' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>

                    {message ? <Message message={message} status={status} /> : null}

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'SignUp' : 'SignIn'}
                    </Button>
                    <GoogleLogin
                        clientId="290302021624-j65p7mq9at2am152lrbqdvvkclojclu7.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign In' : "Don't have an an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
