import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'

const PaisRow = ({ pais, setSelectedPais }) => {
    return (
        <TableRow>
            <TableCell>{pais.grupo}</TableCell>
            <TableCell>{paises.dt.join(" - ")}</TableCell>
            <TableCell><Button variant='outlined' color='secondary' onClick={() => setSelectedPais(pais)}>Info</Button></TableCell>
        </TableRow>
    )
}

export default PaisRow