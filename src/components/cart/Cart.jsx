import {Container,Typography,Button,Grid} from '@material-ui/core'
const Cart = ({cart}) => {
    let classes='as'
  let items={... cart.line_items}
  console.log(items)
    const EmptyCart=()=>{
        return(
            <Typography variant='subtitle1' > you have no items inside the card ! </Typography>
        )
    }
    const FilledCart=()=>{
        return(
<Grid container spacing={3} > 
{items.map(item=>(
    <Grid item xs={12} sm={6} >
        <Typography variant='h3' > {item.name} </Typography>
    </Grid>
))}
</Grid>
            )
    }
if (items.length)return(
    <p> loading .....</p>
)
    return (
        <>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant='h3' > Your Shopping Cart</Typography>
                { !items.length?<EmptyCart/>:<FilledCart/>}
                <Grid itme xs={12} sm={6}  >
                    <Typography variant='h3'  > {} </Typography>
                </Grid>
            </Container>
        </>
    )
}

export default Cart
