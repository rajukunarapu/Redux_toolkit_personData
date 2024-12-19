import { Typography } from '@mui/material'
import React from 'react'
import Form1 from './Form'
import Table1 from './Table'

const App = () => {
  return (
    <>
        <Typography 
        variant='h5'  
        fontWeight={'bold'} 
        color='warning' 
        marginBottom={2}
        >REACT REDUX TOOLKIT</Typography>

        <Form1/>
        <Table1/>
      
    </>
  )
}

export default App