import React ,{useState,useEffect}from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import CustomTextField from './CustomTextField.jsx'
import { commerce } from '../../lib/commerce.js'
const AddressForm = ({checkoutToken}) => {
const [shippingCountries, setShippingCountries] = useState([])
const [shippingCountry, setShippingCountry] = useState('')
const [shippingSubdivisions, setShippingSubdivisions] = useState([])
const [shippingSubdivision, setShippingSubdivision] = useState('')
const [shippingOptions, setShippingOptions] = useState([])
const [shippingOption, setShippingOption] = useState('')
    const methods=useForm()
const fetchShippingCountries=async(checkoutTokenId)=>{
const {countries}=await commerce.services.localeListShippingCountries(checkoutTokenId)
setShippingCountries(countries)
console.log(shippingCountries)
}
useEffect( async () => {
  return await fetchShippingCountries(checkoutToken.id)

}, [])
const s={
id:"sr",name:'syria',id:'al',name:'albania'
}
const countries=Object.entries(shippingcountries).map(([code,name])=>({id:code,label:name}))
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
<CustomTextField required name='zip' label='zip/postal code' />
<Grid item xs={12} sm={6} >
    <Select value={shippingCountry} name="country" onChange={(e)=>{setShippingCountry(e.target.value)}}>
{countries.map(country=>(
    <MenuItem key={country.code} value={country.name} ></MenuItem>
))}
    </Select>
</Grid>
              </Grid>
          </form>
      </FormProvider>
        </>
    )
}

export default AddressForm
