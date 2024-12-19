import { Table, TableCell, TableContainer, TableRow ,TableHead , TableBody, Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Table1 = () => {

const user = useSelector((state)=>state.user)

  return (
    <>
        <TableContainer sx={{maxWidth:'sm',marginTop:4}} component={Paper} elevation={2} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{borderRight:'1px solid #ddd',fontWeight:'bold',padding:2,textAlign:'center'}} >Name</TableCell>
                        <TableCell sx={{borderRight:'1px solid #ddd',fontWeight:'bold',padding:2,textAlign:'center'}} >Email</TableCell>
                        <TableCell sx={{borderRight:'1px solid #ddd',fontWeight:'bold',padding:2,textAlign:'center'}} >Mobile</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableBody>
                    {
                    user.map((item,ind)=>(
                    <TableRow key={ind} >
                        <TableCell sx={{borderRight:'1px solid #ddd',padding:2,textAlign:'center'}} >{item.name}</TableCell>
                        <TableCell sx={{borderRight:'1px solid #ddd',padding:2,textAlign:'center'}} >{item.email}</TableCell>
                        <TableCell sx={{borderRight:'1px solid #ddd',padding:2,textAlign:'center'}} >{item.mobile}</TableCell>
                    </TableRow>
                    ))
                }
                </TableBody>
                
                
            </Table>
        </TableContainer>
    </>
  )
}

export default Table1