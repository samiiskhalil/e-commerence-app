import React from 'react'
import {AppBar,Toolbar,Badge,MenuItemm,Menu,Typography, IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles';
const Navbar = ({cartItems}) => {
    const classes=useStyles()
    return (
        <>
            <AppBar color='inherit' position='fixed' className='classes.appBar' >

<Toolbar><Typography>
    
<img src='https://www.pngfind.com/pngs/b/116-1162552_android-mobile-phone-png.png' alt="commerce.js" height='25px' className={classes.image} />
commerce.js
    </Typography>
    <div className={classes.grow}/>
    <div className={classes.button} >
        <IconButton aria-label='show cart items' color='inherit' >
            <Badge badgeContent={cartItems} color='secondary' >
                <ShoppingCart/>
            </Badge>
        </IconButton>
    </div>
    </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
