import PaymentForm from '../FormInput.jsx'
import AddressForm from '../AddressForm.jsx' 
import { useState,useEffect } from 'react'
import {commerce} from '../../../lib/commerce'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core'
import makeStyles from './styles.js'
const steps=['shipping process','payment details']
const Checkout = ({cart}) => {
    const [checkoutToken, setCheckoutToken] = useState(null)
    useEffect(() => {
        const generateToken =async()=>{
            try
            {
            const token =await commerce.checkout.generateToken(cart.id,{type:'cart'})
          console.log(token)
            setCheckoutToken(token) 
            
                   }
                   catch(error){
console.log(cart)
}
}
generateToken()
  }, [])
    const classes=makeStyles()
const [activeStep,setActiveStep]=useState(0) 
const Form=()=> activeStep===0?<AddressForm token={token} />:<PaymentForm/>
const Confirmation=()=><div>ok</div>   
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
{activeStep===steps.length?<Confirmation/>:<Form/>}
                </Paper>
            </main>

        </>
    )
}

export default Checkout
