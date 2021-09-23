import 'fontsource-roboto'
import {Typography,Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles.js'
const cards=[1,2,3,4,5,6,7,8,9]

const App = () => {
  const classes=useStyles()
  return (
    <>
<CssBaseline/>

<AppBar color='secondary' position='relative' >
  <Toolbar  >
    <PhotoCamera className={classes.icon}/>
    <Typography variant="h6" > photo album </Typography>
  </Toolbar>
</AppBar>
<main>
  <div className={classes.container}>
    <Container maxWidth='sm' >
      <Typography variant='h2' align='center' color='textPrimary' gutterBottom  >
Photo album 
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph  > 
hello everbody i am trying to male this sentance as long as possible so everyone can read this 
</Typography>
<Typography>
  <div className={classes.buttons}>
  <Grid container spacing={2} justify='center' >
    <Grid item >
<Button variant='contained'color='primary' > see my photos </Button>
    </Grid>
    <Grid item >
<Button variant='outlined'color='primary' > secondary action </Button>
    </Grid>
  </Grid>
  </div>
</Typography>
    </Container>
  </div>

    <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4} >
     {
       cards.map(()=>
        ( <Grid item xs={12} sm={6} md={4} >
          <Card className={classes.card} >
          <CardMedia className={classes.cardMedia}
            image='http://source.unsplash.com/random'
            title='image title'
          />
              <CardContent className={classes.cardContent} >
                <Typography gutterBottom variant='h5' >Heading</Typography>
                <Typography  > this is the media card used to describe the content </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.buttons} size='small' color='primary'  > view </Button>
                <Button className={classes.buttons} size='small' color='primary'  > edit </Button>
  
              </CardActions>
          </Card>
        </Grid>))
       
     }
    </Grid>
    </Container>
</main>
</>
  )
}

export default App
