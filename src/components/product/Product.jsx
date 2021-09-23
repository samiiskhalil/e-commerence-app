import React from 'react'
import {Card,CardMedia,CardContent,CardAction,Button,Typography,IconButton} from 'materil-ui/core'
import {ShoppingCard} from 'material-ui/icons'
import { ClassNames } from '@emotion/react'
import { AddShoppingCart } from '@material-ui/icons'
const  Product = ({Product}) => {
    return (
        <>
            <Card className={ClassNames.root} >
                <CardMedia className={classes.madia}
                image=''
                title={Product.name}
                />
                <CardContent>
<div className={classes.cardContent}>
    <Typography variant='h5' gutterBottom >
    
    {Product.name}
    
    </Typography>
    <Typography variant='h5' gutterBottom >
    
    {Product.price}
    
    </Typography>
</div>
<Typography variant='h2' color='textSecondary' >{Product.description}</Typography>
                </CardContent>
                <CardActions disapleSpacing className={classes.cardActoin} >
<IconsButton aria-label='add to cart' >
    <AddShoppingCart/>
</IconsButton>

                </CardActions>
            </Card>
        </>
    )
}

export default  Product
