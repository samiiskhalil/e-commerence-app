import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Button,Typography,IconButton} from '@material-ui/core'
import {ShoppingCard} from '@material-ui/icons'
import { ClassNames } from '@emotion/react'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles.js'

const  Product = ({product}) => {
    const classes=useStyles()
    return (
        <>
        
            <Card className={ClassNames.root} >
                <CardMedia className={classes.madia}
                image=''
                title={product.name}
                />
                <CardContent>
<div className={classes.cardContent}>
    <Typography variant='h5' gutterBottom >
    
    {product.name}
    
    </Typography>
    <Typography variant='h5' gutterBottom >
    
    {product.price}
    
    </Typography>
</div>
<Typography variant='h2' color='textSecondary' >{Product.description}</Typography>
                </CardContent>
                <CardActions disapleSpacing className={classes.cardActoin} >
<IconButton aria-label='add to cart' >
    <AddShoppingCart/>
</IconButton>

                </CardActions>
            </Card>
        </>
    )
}

export default  Product
