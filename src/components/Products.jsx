import React from 'react'
import Grid from '@material-ui/core'
const Products=[{
    name:'shoe',
    description:"this shoe is awsome",
    id:1,price:'350$'},{
        name:'macbook',
        description:"this mac is awsome",
        id:2,price:'200$'
    }
]
const Products = () => {
    return (
       <Grid container justifyContent='center' >
{Products.map((product)=>

<Grid item xs={16} sm={6} md={4} lg={3} key={product.id}  >
    <Product product={product}/>
</Grid>
)}
       </Grid>
    )
}
import Grid from '@material-ui/core'
export default Products
