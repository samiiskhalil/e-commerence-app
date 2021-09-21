import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import  {useState}  from 'react'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxIcon from '@mui/material/Checkbox'
import {makeStyles} from '@mui/styles'
const useStyles=makeStyles({
  root:{
    border:0,
    borderRadius:15,
    color:'white',
    padding:0,
    background:'linear-gradient(45deg,#333,#999)'
  }
})
let StyledButton=()=>{
  let classes=makeStyles()
  return <Button className={classes.root}>testing</Button>
}

let CheckBox =()=>{
  const [checked,setChecked]=useState(false)


  return(
    <>
    <StyledButton/>
  <TextField variant='standard' />
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
    
    <div className='container'>
    <CheckBox/>
      <ButtonGroup>
      <Button color='warning' startIcon={<DeleteIcon/>}  variant='contained'  >  delete</Button>

<Button startIcon={<SaveIcon/>}  variant='contained'  >  Save</Button>
  </ButtonGroup>  </div>
  )
}

export default App
