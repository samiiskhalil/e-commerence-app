import React ,{useState,useEffect}from 'react'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import CustomTextField from './CustomTextField.jsx'
import { commerce } from '../../lib/commerce.js'
const AddressForm = ({checkoutToken}) => {
const [shippingCountries, setShippingCountries] = useState([])
const [shippingCountry, setShippingCountry] = useState('')
const [shippingSubDivisions, setShippingSubDivisions] = useState([])
const [shippingSubDivision, setShippingSubDivision] = useState('')
const [shippingOptions, setShippingOptions] = useState([])
const [shippingOption, setShippingOption] = useState('')
    const methods=useForm()
const fetchShippingCountries=async(checkoutTokenId)=>{
const {countries}=await commerce.services.localeListShippingCountries(checkoutTokenId)
setShippingCountries(countries)
console.log(shippingCountries)
}
const fetchShippingSubDivisions=async(shippingCountryId)=>{
    const {subdivisions}=await commerce.services.localeListSubdivisions(shippingCountryId)
    console.log(subDivisions)
    setShippingSubDivisions(subdivisions)
    console.log(shippingSubDivisions)
}
useEffect( async () => {
   await fetchShippingCountries(checkoutToken.id)

}, [])
useEffect(() => {
  if(shippingCountry) fetchShippingSubDivisions(shippingCountry) 
}, [shippingCountry])
console.log(shippingSubDivisions)
const countries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
const subDivisions=Object.entries(shippingSubDivisions).map(([code,name])=>({
    id:code,label:name
}))
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
    <InputLabel>Select Country</InputLabel>
    <Select value={shippingCountry} name="shipping country" fullWidth onChange={(e)=>{setShippingCountry(e.target.value)}}>
{countries.map(country=>(
    <MenuItem key={country.id} value={country.id} >{country.label}</MenuItem>
))}
    </Select>
</Grid>
<Grid item xs={12} sm={6} >
    <InputLabel>
    Select Region
    </InputLabel>
<Select fullWidth onChange={(e)=>{setShippingSubDivision(e.target.value)}}>{
    subDivisions.map((subDivision)=>(
        <MenuItem value={subDivision.id} key={subDivision.id} >
            {subDivision.label}
            </MenuItem>
        
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
