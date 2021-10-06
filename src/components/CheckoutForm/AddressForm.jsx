import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {InputLabel,Select,MenuItem,Button,Grid,Typography} from '@material-ui/core'
import {useForm,FormProvider} from 'react-hook-form'
import CustomTextField from './CustomTextField.jsx'
import { commerce } from '../../lib/commerce.js'
import { NextPlan } from '@mui/icons-material'
const AddressForm = ({checkoutToken,next}) => {
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
}
const fetchShippingSubDivisions=async(shippingCountryId)=>{
    const {subdivisions}=await commerce.services.localeListSubdivisions(shippingCountryId)
    console.log(subDivisions)
    setShippingSubDivisions(subdivisions)
    console.log(shippingSubDivisions)
}
const fetchShippingOptions=async(checkoutTokenId,country,region=null)=>{
    const options =await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region})
    setShippingOptions(options)
}
useEffect( async () => {
   await fetchShippingCountries(checkoutToken.id)

}, [])
useEffect(() => {
  if(shippingCountry) fetchShippingSubDivisions(shippingCountry) 
}, [shippingCountry])

useEffect(() => {
if(shippingSubDivision) fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubDivision)
console.log('as')

}, [shippingSubDivision])
const countries=Object.entries(shippingCountries).map(([code,name])=>({id:code,label:name}))
const subDivisions=Object.entries(shippingSubDivisions).map(([code,name])=>({
    id:code,label:name
}))
const options=shippingOptions.map(sO=>(
    {id:sO.id,label:`${sO.description}-(${sO.price.formatted_with_symbol})`}
))
console.log(shippingOptions)
return (
        <>
            <Typography variant='h6' gutterBottom >shipping address</Typography>
      <FormProvider {... methods}>
          <form onSubmit={
          methods.handleSubmit((data)=>
              next({... data,shippingCountry,shippingSubDivision,shippingOption})
          )
          }>
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
<Grid>
    <InputLabel>
shipping option    </InputLabel>
<Select fullWidth onChange={(e)=>{setShippingOption(e.target.value)}}>{
    options.map((option)=>(
        <MenuItem value={option.id} key={option.id} >
            {option.label}
            </MenuItem>
        
    ))}
</Select>
</Grid>
              </Grid>
              <br />
              <div style={{display:'flex',justifyContent:'space-between'}} >
<Button variant='outlined' component={Link} to='/cart' color='secondary' >back to cart</Button>
<Button variant='contained' color='primary' type='submit' >next step</Button>
              </div>
          </form>
      </FormProvider>
        </>

)}
export default AddressForm
