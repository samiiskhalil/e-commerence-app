import {Container,Grid,Paper} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import  {useState}  from 'react'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckboxIcon from '@mui/material/Checkbox'
import {makeStyles} from '@mui/styles'
import Typography from '@mui/material/Typography';

import 'fontsource-roboto'
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
  return(<> <Button className={classes.root}>testing</Button>
  <Typography variant='h1'>
    welcome to my apap
  </Typography>

  </>
    )}

let CheckBox =()=>{
  const [checked,setChecked]=useState(false)


  return(
    <>
    <StyledButton/>
  <TextField
  label='name'
   variant='outlined'
   color='secondary' />
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
  return ( <Container maxWidth='sm' style={{backgroundColor:'lightgray'}}> <div className='container'>
    <CheckBox/>
    <Grid container spacing={4} justifyContent='center'>
    <Grid item >
      <Paper style={{
        height:75,width:50,
      }} />
      </Grid>
      <Grid item >
      <Paper style={{
        height:75,width:50,
      }} />
      </Grid><Grid item >
      <Paper style={{
        height:75,width:50,
      }} />
      </Grid><Grid item >
      <Paper style={{
        height:75,width:50,
      }} />
      </Grid>
    </Grid>
    
      <ButtonGroup>
      <Button color='secondary' startIcon={<DeleteIcon/>}  variant='contained'  >  delete</Button>

<Button startIcon={<SaveIcon/>} color='primary' variant='contained'  >  Save</Button>
  </ButtonGroup>  </div>
  </Container>)  
}

export default App
