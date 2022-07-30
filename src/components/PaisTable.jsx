import React, { useEffect } from "react";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"



function PaisTable ({ data, filter, setSelectedPais}) {

    

    useEffect (()=>{
        
        fetch('http://localhost:3030/paises',{
        method: 'POST',
        headers: {
        'Accept': 'application/json',  
        'Content-Type': 'application/json'
        },
        body: JSON.stringify( myData ),
    })
        .then((res) => res.json())
        .then((myData) => dispatch(setData(myData))
        );

    }, []);

    
return (
    
    <TableContainer component={Paper} sx={{ display: 'flex', mt: 2}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Grupo</TableCell>
                    <TableCell align='center'>Info</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data 
                .filter({pais} = pais.toLowerCase().startWith(filter.toLowerCase()))
                .slice(0,8)
                .map((pais)=> (
                    <PaisRow key={pais.id} pais={pais} setSelectedPais={setSelectedPais}/>
                ))}                    
                </TableBody>
          </Table>        
 </TableContainer>
        
)}

export default PaisTable
