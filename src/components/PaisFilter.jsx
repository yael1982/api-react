import { TextField } from "@mui/material";

import React from 'react'

const PaisFilter = ({ setFilter }) => {
    return <TextField
        label="Find..." variant="filled"
        onChange={(e) => setFilter(e.target.value)} />
}

export default PaisFilter;