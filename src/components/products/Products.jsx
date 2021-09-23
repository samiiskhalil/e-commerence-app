import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product.jsx'
import useStyles from './styles.js'
const products=[{
    name:'shoe',
    description:"this shoe is awsome",
    id:1,price:'350$'},{
        name:'macbook',
        description:"this mac is awsome",
        id:2,price:'200$'
    }
]
const Products = () => {
    const classes=useStyles()
    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />
       <Grid container justifyContent='center' >
{products.map((product)=>

<Grid item xs={16} sm={6} md={4} lg={3} key={product.id}  >
    <Product product={product}/>
</Grid>
)}
       </Grid>
       </main>
    )
}
export default Products
