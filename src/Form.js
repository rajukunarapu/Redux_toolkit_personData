import { TextField , Button, Stack ,Alert} from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { userUpdate} from './store'
import { useDispatch } from 'react-redux'
import {Send} from '@mui/icons-material'

const Form1 = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const [isSubmitted, setIsSubmitted] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitted(true)
        if (name !== '' && email !== '' && mobile !== ''){
          dispatch(userUpdate({name:name,email:email,mobile:mobile}))

          setName("")
          setEmail("")
          setMobile("")

          setIsSubmitted(false)
        }
        
    }

  return (
    <>
        <Stack spacing={2} >
            <TextField 
            sx={{marginBottom:2,width:'300px'}}
            variant='outlined'
            color='secondary'
            label='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            /> 
            {
              isSubmitted && name==='' && <Alert 
              severity='error' 
              sx={{maxWidth:'270px'}} 
              >
              Name field can't be empty
              </Alert>
            }

            <TextField 
            sx={{marginBottom:2,width:'300px'}}
            variant='outlined'
            color='secondary'
            label='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /> 

            {
              isSubmitted && email==='' && <Alert 
              severity='error'  
              sx={{maxWidth:'270px'}} 
              >
              Email field can't be empty
              </Alert>
            }

            <TextField
            sx={{marginBottom:2,width:'300px'}}
            variant='outlined'
            color='secondary'
            label='Mobile'
            type="number"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            /> 

            {
              isSubmitted && mobile ==='' && <Alert 
              severity='error'  
              sx={{maxWidth:'270px'}} 
              >
              Mobile number field can't be empty
              </Alert>
            }


            <Button 
            variant='contained'
            color='success'
            startIcon={<Send/>}
            onClick={handleSubmit}
            sx={{width:'100px'}} 
            >Submit</Button>
            {

            }
        </Stack>
            
    </>
  )
}

export default Form1