import React from 'react'
import { useState } from 'react'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core'
import makeStyles from './styles.js'
const steps=['shipping process','payment details']
const Checkout = () => {
    const classes=makeStyles()
const [activeStep,setActiveStep]=useState(0) 
   return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout} >
                <Paper className={classes.paper} >
                    <Typography variant='h3' align='center' >Checkout</Typography>
<Stepper activeStep={activeStep} className={classes.stepper} >
{steps.map(step=>(<Step key={step} >
    <StepLabel >{step} </StepLabel>
</Step>))}

</Stepper>
                </Paper>
            </main>
        </>
    )
}

export default Checkout
