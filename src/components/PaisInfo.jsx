import React from 'react'
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"

const PaisInfo = ({ paises: pais, continente, grupo, dt, setSelectedPais }) => {
    return (
        <Card sx={{ height: 350, width: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <CardContent>
                <Typography variant='h5' gutterBottom>{pais}</Typography>
                {Object.keys(base).map((key) => (<Typography key={key}
                >{key} : {base[key]}</Typography>)
                )}

            </CardContent>
            <CardActions>
                <Button variant='contained' color="warning" onClick={() => setSelectedPais(null)}>dismiss</Button>
            </CardActions>
        </Card>
    )
}

export default PaisInfo