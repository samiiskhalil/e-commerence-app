import React from 'react'
import {TextField,Grid} from '@material-ui/core'
import {useFormContext,Controller} from 'react-hook-form'
const CustomTextField = ({name,label,required}) => {
    const {control}=useFormContext()
    const isError=false
    return (
        <>
            <Grid item xs={12} sm={6} >
             <Controller render={()=>(<TextField
             name={name}
             label={label}
             required

             error={isError}
             />)} />
            </Grid>
        </>
    )
}

export default CustomTextField
