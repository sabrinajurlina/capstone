import React, {useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import MyButton from '../components/Button';
import TextField from '@mui/material/TextField';
import useCreateUser from '../hooks/useCreateUser';
import {useTheme} from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        role:Yup
            .string()
            .default( () => ('Client'))
            .required(), //is this default syntax correct?
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        client_name:Yup.string().required(),
        description:Yup.string().required(),
        website:Yup.string().required(),
        location:Yup.string().required(),
        img:Yup.string().required(),   
    }
)

export default function ClientRegisterForm({ user }){
    const[newUser, setNewUser] = useState({})
    const[error, setError] = useState('')
    const theme = useTheme()
    const navigate = useNavigate()

    useCreateUser(newUser, setError)

    const initialValues={
        role:user?.role ?? 'Client',
        email:user?.email ?? '',
        password:user?.password ?? '',
        client_name:user?.client_name ?? '',
        description:user?.description ?? '',
        website:user?.website ?? '',
        location:user?.location ?? '',
        img:user?.img ?? '',
    }

    const handleSubmit=(values, resetForm)=>{
        setNewUser(values)
        console.log(values)
        resetForm(initialValues)
    }
  
    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="role"
            name="role"
            sx={{width:"80%", ml:8, mt:2}}
            label="role"
            placeholder="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
        />
        <TextField
            id="client_name"
            name="client_name"
            sx={{width:"80%", ml:8, mt:2}}
            label="client_name"
            placeholder="client_name"
            value={formik.values.client_name}
            onChange={formik.handleChange}
            error={formik.touched.client_name && Boolean(formik.errors.client_name)}
            helperText={formik.touched.client_name && formik.errors.client_name}
        />
        <TextField
            id="email"
            name="email"
            sx={{width:"80%", ml:8, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id="password"
            name="password"
            sx={{width:"80%", ml:8, mt:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
            id="description"
            name="description"
            sx={{width:"80%", ml:8, mt:2}}
            label="description"
            placeholder="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
            id="location"
            name="location"
            sx={{width:"80%", ml:8, mt:2}}
            label="location"
            placeholder="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
        />
        <TextField
            id="website"
            name="website"
            sx={{width:"80%", ml:8, mt:2}}
            label="website"
            placeholder="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
        />
        <TextField
            id="img"
            name="img"
            sx={{width:"80%", ml:8, mt:2}}
            label="img"
            placeholder="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            error={formik.touched.img && Boolean(formik.errors.img)}
            helperText={formik.touched.img && formik.errors.img}
        />
        
        <br></br>
        <MyButton id="registerButton" type="submit"
                sx={{variant:'contained',
                    color: theme.palette.info.main,
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: theme.palette.logo.main, backgroundImage: theme.palette.logo.main,
                    width:'80%',
                    mt:5, ml:8, mb:5,
                    borderRadius: '25px'}}>
                {"Register"}
        </MyButton>
    </form>
    )
}

