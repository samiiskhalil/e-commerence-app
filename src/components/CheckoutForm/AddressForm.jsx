import React ,{useState}from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import CustomTextField from './CustomTextField.jsx'
import { commerce } from '../../lib/commerce.js'
const AddressForm = ({cartToken}) => {
const [shippingCountries, setShippingCountries] = useState([])
const [shippingCountry, setShippingCountry] = useState('')
const [shippingSubdivisions, setShippingSubdivisions] = useState([])
const [shippingSubdivision, setShippingSubdivision] = useState('')
const [shippingOptions, setShippingOptions] = useState([])
const [shippingOption, setShippingOption] = useState('')
    const methods=useForm()
const fetchShippingCountries=async(checkoutTokenId)=>{
const {countries}=await commerce.services.localeListShippingCountries(checkoutTokenId)

}
    return (
        <>
            <Typography variant='h6' gutterBottom >shipping address</Typography>
      <FormProvider {... methods}>
          <form onSubmit=''>
              <Grid container spacing={3} >
<CustomTextField required name='firstname' label='first name' />
<CustomTextField required name='last name' label='last name' />
<CustomTextField required name='address1' label='address' />
<CustomTextField required name='Email' label='email' />
<CustomTextField required name='city' label='City' />
<CustomTextField required name='zpi' label='zip/postal code' />

              </Grid>
          </form>
      </FormProvider>
        </>
    )
}

export default AddressForm
