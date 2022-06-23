import React, {useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useCreateUser from '../hooks/useCreateUser';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        role:Yup
            .string()
            .default( () => ('client'))
            .required(), //is this default syntax correct?
        client_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        location:Yup.string().required(),
        description:Yup.string().required(),
        img:Yup.string().required(),
        website:Yup.string().url().required()
    }
)

export default function ClientRegisterForm({ user }){
    const[newUser, setNewUser] = useState({})
    const[setError] = useState('')

    useCreateUser(newUser, setError)

    const initialValues={
        role:user?.role ?? 'client',
        client_name:user?.client_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? '',
        description:user?.description ?? '',
        location:user?.location ?? '',
        website:user?.website ?? '',
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        
         <TextField
            id="description"
            name="description"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
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
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="img"
            placeholder="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            error={formik.touched.img && Boolean(formik.errors.img)}
            helperText={formik.touched.img && formik.errors.img}
        />
        
        <br></br>
        <Button id="register" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Register"}</Button>
    </form>
    )
}