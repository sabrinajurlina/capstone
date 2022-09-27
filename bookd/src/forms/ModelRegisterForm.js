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
            .default(()=> ('Model'))
            .required(),
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        location:Yup.string().required(),
        height:Yup.number().required(),
        waist:Yup.number().required(),
        bust:Yup.string().required(),
        shoe:Yup.number().required(),
        hips:Yup.number().required(),
        hair:Yup.string().required(),
        eyes:Yup.string().required(),
        pronouns:Yup.string().required(),
        race:Yup.string().required(),
        yrs_experience:Yup.number().required(),
        skills:Yup.string().required(),
        img:Yup.string().required(),
        portfolio:Yup.string(),
        }
)

export default function ModelRegisterForm({ user }){
    const[newUser, setNewUser] = useState({})
    const[error, setError] = useState('')
    const navigate = useNavigate()
    const theme = useTheme()

    useCreateUser(newUser, setError)

    const initialValues={
        role:user?.role ?? 'Model',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? '',
        location:user?.location ?? '',
        height:user?.height ?? '',
        waist:user?.waist ?? '',
        bust:user?.bust ?? '',
        shoe:user?.shoe ?? '',
        hips:user?.hips ?? '',
        hair:user?.hair ?? '',
        eyes:user?.eyes ?? '',
        pronouns:user?.pronouns ?? '',
        race:user?.race ?? '',
        yrs_experience:user?.yrs_experience ?? '',
        skills:user?.skills ?? '',
        img:user?.img ?? '',
        portfolio:user?.portfolio ?? '',
    }

    const handleSubmit=(values, resetForm)=>{
        console.log(values)
        setNewUser(values)
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
            sx={{width:"80%", ml:8, mt:5}}
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
            sx={{width:"40%", ml:8, mt:2}}
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
            sx={{width:"39.5%", ml:.5, mt:2}}            
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
            id="height"
            name="height"
            sx={{width:"40%", ml:8, mt:2}}
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
            sx={{width:"39.5%", ml:.5, mt:2}}
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
            sx={{width:"40%", ml:8, mt:2}}
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
            sx={{width:"39.5%", ml:.5, mt:2}}
            label="shoe"
            placeholder="shoe"
            value={formik.values.shoe}
            onChange={formik.handleChange}
            error={formik.touched.shoe && Boolean(formik.errors.shoe)}
            helperText={formik.touched.shoe && formik.errors.shoe}
        />
        <TextField
            id="hips"
            name="hips"
            sx={{width:"40%", ml:8, mt:2}}
            label="hips"
            placeholder="hips"
            value={formik.values.hips}
            onChange={formik.handleChange}
            error={formik.touched.hips && Boolean(formik.errors.hips)}
            helperText={formik.touched.hips && formik.errors.hips}
        />
        <TextField
            id="hair"
            name="hair"
            sx={{width:"39.5%", ml:.5, mt:2}}
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
            sx={{width:"40%", ml:8, mt:2}}
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
            sx={{width:"39.5%", ml:.5, mt:2}}
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
            sx={{width:"40%", ml:8, mt:2}}
            label="race"
            placeholder="race"
            value={formik.values.race}
            onChange={formik.handleChange}
            error={formik.touched.race && Boolean(formik.errors.race)}
            helperText={formik.touched.race && formik.errors.race}
        />
        <TextField
            id="yrs_experience"
            name="yrs_experience"
            sx={{width:"39.5%", ml:.5, mt:2}}
            label="yrs_experience"
            placeholder="yrs_experience"
            value={formik.values.yrs_experience}
            onChange={formik.handleChange}
            error={formik.touched.yrs_experience && Boolean(formik.errors.yrs_experience)}
            helperText={formik.touched.yrs_experience && formik.errors.yrs_experience}
        />
        <TextField
            id="skills"
            name="skills"
            sx={{width:"80%", ml:8, mt:2}}
            label="skills"
            placeholder="skills"
            value={formik.values.skills}
            onChange={formik.handleChange}
            error={formik.touched.skills && Boolean(formik.errors.skills)}
            helperText={formik.touched.skills && formik.errors.skills}
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
                    borderRadius: '25px'
                }}
                >Register
            </MyButton>
            {error}
    </form>
    )
}