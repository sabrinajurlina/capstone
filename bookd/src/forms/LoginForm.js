import React, {useContext, useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import MyButton from '../components/Button';
import TextField from '@mui/material/TextField';
import {AppContext} from '../context/AppContext';
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import {useTheme} from '@mui/material/styles';


const FormSchema = Yup.object(
    {
        email:Yup.string().email("Must be a valid email format").required(),
        password:Yup.string().required()
    }
)

const initialValues={
    email:'',
    password:''
}

export default function LoginForm(){
    const {setUser} = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({});
    const [setError] = useState('');
    const navigate = useNavigate()
    const theme = useTheme()

    useLogin(loginCreds, setLoginCreds, setError, setUser)

    const handleSubmit=(values)=>{
        console.log(values)
        setLoginCreds(values)    
    }
  
    const formik = useFormik({
        // onSubmit:(values)=>{handleLogin(values)},
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <form id="loginForm" display='flex' flex-direction='column' onSubmit={formik.handleSubmit}>
            <TextField
                id='email'
                name='email'
                sx = {{width:'100%', mt:5}}
                label='email'
                placeholder='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id='password'
                name='password'
                sx = {{width:'100%', mb:1, mt:2}}
                label='password'
                placeholder='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <br></br>

            <MyButton id="loginButton" type="submit"
                sx={{borderColor: theme.palette.secondary.main,
                    color:theme.palette.info.main,
                    width:'100%', justifyContent:'center',
                    mb:2, borderRadius:'25px'}}>
                {"Login"}
            </MyButton>
            {/* horizontal line with text */}
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', backgroundColor: theme.palette.primary.grey}} />
                <div>
                    <p style={{width: '70px', textAlign: 'center', color: theme.palette.primary.dark}}>or</p>
                </div>
                <div style={{flex: 1, height: '1px', backgroundColor: theme.palette.primary.grey}} />
            </div>
        </form>
    )
}

