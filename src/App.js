import 'fontsource-roboto'
import {Typography,Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
const App = () => {
  return (
    <>
<CssBaseline/>

<AppBar color='secondary' position='relative' >
  <Toolbar  >
    <PhotoCamera/>
    <Typography variant="h6" > photo album </Typography>
  </Toolbar>
</AppBar>
<main>
  <div>
    <Container maxWidth='sm' >
      <Typography variant='h2' align='center' color='textPrimary' gutterBottom  >
Photo album 
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph  > 
hello everbody i am trying to male this sentance as long as possible so everyone can read thsi shit
</Typography>
<Typography>
  <Grid container spacing={2} justify='center' >
    <Grid item >
<Button variant='contained'color='primary' > see my photos </Button>
    </Grid>
    <Grid item >
<Button variant='outlined'color='primary' > secondary action </Button>
    </Grid>
  </Grid>
</Typography>
    </Container>
  </div>
</main>
</>
  )
}

export default App
