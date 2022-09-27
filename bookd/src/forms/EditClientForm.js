import React, {useState, useContext} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import MyButton from '../components/Button';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import {AppContext} from '../context/AppContext';
import {useTheme} from '@mui/material/styles';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        role:Yup
            .string()
            .default( () => ('client'))
            .required(), //is this how i set default to 'client'?
        client_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        location:Yup.string().required(),
        description:Yup.string().required(),
        img:Yup.string().required(),
        website:Yup.string().required()
    }
)

export default function EditClientForm(){
    const{user} = useContext(AppContext);
    const[setEditUser] = useState({})
    const theme = useTheme()

    useEditUser(user)

    const initialValues={
        client_name:user?.client_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? '',
        description:user?.description ?? '',
        location:user?.location ?? '',
        website:user?.website ?? '',
        img:user?.img ?? '',
    }

    const handleSubmit=(values, resetForm)=>{
        // if (user?.token){
        //     setEditUser(values)
        // }
        setEditUser(values)
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
        <MyButton id="edit_client" type="submit"
                sx={{variant:'contained',
                    color: theme.palette.info.main,
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: theme.palette.logo.main, backgroundImage: theme.palette.logo.main,
                    width:'80%',
                    mt:5, ml:8, mb:5,
                    borderRadius: '25px'}}>
                {"Save Changes"}
        </MyButton>
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