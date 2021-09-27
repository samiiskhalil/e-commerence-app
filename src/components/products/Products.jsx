import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product.jsx'
import useStyles from './styles.js'


const Products = ({products,onAddCart}) => {
    const classes=useStyles()
    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />
       <Grid container justifyContent='center' spacing={4} >
{products.map((product)=>

<Grid item xs={16} sm={6} md={4} lg={3} key={product.id}  >
    <Product product={product} onAddCart={onAddCart} />
</Grid>
)}
       </Grid>
       </main>
    )
}
export default Products
