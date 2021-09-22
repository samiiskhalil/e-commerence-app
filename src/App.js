import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import  {useState}  from 'react'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxIcon from '@mui/material/Checkbox'
import {makeStyles,ThemeProvider} from '@mui/styles'
const useStyles=makeStyles({
  root:{
    background:'linear-gradient(45deg,#fe6888,#ff8e53)'
    ,border:0,
    borderRadius:15,
    marginBottom:200,
    padding:'5px,30px',
    color:'white',
    padding:0
  }
})
let StyledButton=()=>{
  let classes=useStyles()
  return <Button className={classes.root}>testing</Button>
}

let CheckBox =()=>{
  const [checked,setChecked]=useState(false)


  return(
    <>
    <StyledButton/>
  <TextField
  label='name'
   variant='outlined'
   color='primary' />
    <CheckboxIcon 
    checkedIcon={<DeleteIcon/>}
    icon={<SaveIcon/>}
    checked={checked} onChange={(e)=>{
      setChecked(e.target.checked)
    }} />
  </>
  )
}
const App = () => {
  return (
<ThemeProvider>  
    <div className='container'>
    <CheckBox/>
      <ButtonGroup>
      <Button color='warning' startIcon={<DeleteIcon/>}  variant='contained'  >  delete</Button>

<Button startIcon={<SaveIcon/>}  variant='contained'  >  Save</Button>
  </ButtonGroup>  </div>
</ThemeProvider>)  
}

export default App
