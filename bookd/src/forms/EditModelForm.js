import React, {useState, useContext} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import {AppContext} from '../context/AppContext';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        role:Yup
            .string()
            .default(()=> ('model'))
            .required(), //how do i set default to 'model'?
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        location:Yup.string().required(),
        height:Yup.number().required(),
        hips:Yup.number().required(),
        bust:Yup.string().required(),
        eyes:Yup.string().required(),
        hair:Yup.string().required(),
        shoe:Yup.number().required(),
        yrs_experience:Yup.integer().required(),
        skills:Yup.string().required(),
        pronouns:Yup.string().required(),
        race:Yup.string().required(),
        portfolio:Yup.string(),
        img:Yup.string().required(),
        }
)

export default function EditModelForm(){
    const{user} = useContext(AppContext)
    const[editUser, setEditUser] = useState({})

    useEditUser(user?.token)

    const initialValues={
        role:user?.role ?? 'model',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? '',
        height:user?.height ?? '',
        bust:user?.bust ?? '',
        waist:user?.waist ?? '',
        shoe:user?.shoe ?? '',
        hair:user?.hair ?? '',
        eyes:user?.eyes ?? '',
        pronouns:user?.pronouns ?? '',
        race:user?.race ?? '',
        location:user?.location ?? '',
        portfolio:user?.portfolio ?? '',
        img:user?.img ?? '',
        yrs_experience:user?.yrs_experience ?? '',
        skills:user?.skills ?? '',
    }

    const handleSubmit=(values, resetForm)=>{
        if (user){
            setEditUser(values)
        }
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
            id="first_name"
            name="first_name"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="first_name"
            placeholder="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
            helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
            id="last_name"
            name="last_name"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="last_name"
            placeholder="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
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
            id="height"
            name="height"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="height"
            placeholder="height"
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
        />
        <TextField
            id="waist"
            name="waist"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="waist"
            placeholder="waist"
            value={formik.values.waist}
            onChange={formik.handleChange}
            error={formik.touched.waist && Boolean(formik.errors.waist)}
            helperText={formik.touched.waist && formik.errors.waist}
        />
        <TextField
            id="bust"
            name="bust"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="bust"
            placeholder="bust"
            value={formik.values.bust}
            onChange={formik.handleChange}
            error={formik.touched.bust && Boolean(formik.errors.bust)}
            helperText={formik.touched.bust && formik.errors.bust}
        />
        <TextField
            id="shoe"
            name="shoe"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="shoe"
            placeholder="shoe"
            value={formik.values.shoe}
            onChange={formik.handleChange}
            error={formik.touched.shoe && Boolean(formik.errors.shoe)}
            helperText={formik.touched.shoe && formik.errors.shoe}
        />
        <TextField
            id="hair"
            name="hair"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="hair"
            placeholder="hair"
            value={formik.values.hair}
            onChange={formik.handleChange}
            error={formik.touched.hair && Boolean(formik.errors.hair)}
            helperText={formik.touched.hair && formik.errors.hair}
        />
        <TextField
            id="eyes"
            name="eyes"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="eyes"
            placeholder="eyes"
            value={formik.values.eyes}
            onChange={formik.handleChange}
            error={formik.touched.eyes && Boolean(formik.errors.eyes)}
            helperText={formik.touched.eyes && formik.errors.eyes}
        />
        <TextField
            id="pronouns"
            name="pronouns"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="pronouns"
            placeholder="pronouns"
            value={formik.values.pronouns}
            onChange={formik.handleChange}
            error={formik.touched.pronouns && Boolean(formik.errors.pronouns)}
            helperText={formik.touched.pronouns && formik.errors.pronouns}
        />
        <TextField
            id="race"
            name="race"
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="race"
            placeholder="race"
            value={formik.values.race}
            onChange={formik.handleChange}
            error={formik.touched.race && Boolean(formik.errors.race)}
            helperText={formik.touched.race && formik.errors.race}
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
        <Button id="edit_model" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Edit Profile"}</Button>
    </form>
    )
}