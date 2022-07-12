import React, {useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useCreateJob from '../hooks/useCreateJob';
import useEditJob from '../hooks/useEditJob';
import useDeleteJob from '../hooks/useDeleteJob';
import Box from '@mui/material/Box';

const FormSchema=Yup.object(
    {
        body:Yup.string().required(),
        location:Yup.string().required(),
        job_date:Yup.string().required(),
        duration:Yup.string().required(),
        rate:Yup.number().required(),
        rate_type:Yup.string().required(),
        travel_budget:Yup.number()
    }
)

export default function JobPostForm({ job }){
    const[newJob, setNewJob] = useState({})
    const[editJob, setEditJob] = useState({})
    const[deleteJob, setDeleteJob] = useState({})
    const[setError] = useState('')

    useCreateJob(newJob, setError)
    useEditJob(editJob, job?.id)
    useDeleteJob(deleteJob)

    const initialValues={
        body:job?.body ?? '',
        location:job?.location ?? '',
        job_date:job?.job_date ?? '',
        duration:job?.duration ?? '',
        rate:job?.rate ?? '',
        rate_type:job?.rate_type ?? '',
        travel_budget:job?.travel_budget ?? ''
    }

    const handleSubmit=(values, resetForm)=>{
        if (job){
            setEditJob(values)
        }else{
            setNewJob(values)
        }
        console.log(values)
        resetForm(initialValues)
    }

    const handleDelete=()=>{
        setDeleteJob(job)
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
            id="body"
            name="body"
            sx={{width:"100%", margin:'auto', display:'flex', alignSelf:'center'}}
            label="body"
            placeholder="body"
            value={formik.values.body}
            onChange={formik.handleChange}
            error={formik.touched.body && Boolean(formik.errors.body)}
            helperText={formik.touched.body && formik.errors.body}
        />
        <TextField
            id="location"
            name="location"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="location"
            placeholder="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
        />
        <TextField
            id="job_date"
            name="job_date"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="job_date"
            placeholder="job_date"
            value={formik.values.job_date}
            onChange={formik.handleChange}
            error={formik.touched.job_date && Boolean(formik.errors.job_date)}
            helperText={formik.touched.job_date && formik.errors.job_date}
        />
         <TextField
            id="duration"
            name="duration"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="duration"
            placeholder="duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
            error={formik.touched.duration && Boolean(formik.errors.duration)}
            helperText={formik.touched.duration && formik.errors.duration}
        />
        <TextField
            id="rate"
            name="rate"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="rate"
            placeholder="rate"
            value={formik.values.rate}
            onChange={formik.handleChange}
            error={formik.touched.rate && Boolean(formik.errors.rate)}
            helperText={formik.touched.rate && formik.errors.rate}
        />
        <TextField
            id="rate_type"
            name="rate_type"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="rate_type"
            placeholder="rate_type"
            value={formik.values.rate_type}
            onChange={formik.handleChange}
            error={formik.touched.rate_type && Boolean(formik.errors.rate_type)}
            helperText={formik.touched.rate_type && formik.errors.rate_type}
        />
        <TextField
            id="travel_budget"
            name="travel_budget"
            sx={{width:"100%", margin:'auto', display:'flex'}}
            label="travel_budget"
            placeholder="travel_budget"
            value={formik.values.travel_budget}
            onChange={formik.handleChange}
            error={formik.touched.travel_budget && Boolean(formik.errors.travel_budget)}
            helperText={formik.touched.travel_budget && formik.errors.travel_budget}
        />
        
        <br></br>
        {job?[
            <Button id="edit" type="submit" sx={{margin:'auto', color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Edit Job"}</Button>,
            <Button onClick={()=>{handleDelete()}} sx={{margin:'auto', color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Delete Job"}</Button>
            ]
        :
            <Button onClick={()=>{formik.handleSubmit()}} id="post" type="submit" sx={{display:'flex', margin:'auto', justifyContent:'center', alignItems:'center', color: "#b4761a", borderColor: "#b4761a", width:"20%"}}>{"Post Job"}</Button>
        }
        </form>

    );
};