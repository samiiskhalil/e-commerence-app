import React from 'react'
import { useLocation } from 'react-router';
import {AppBar,Toolbar,Badge,MenuItemm,Menu,Typography, IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles';
import { Link } from 'react-router-dom';
const Navbar = ({totalItems}) => {
    let location =useLocation()
    const classes=useStyles()
    return (
        <>
            <AppBar color='inherit' position='fixed' className='classes.appBar' >

<Toolbar><Typography component={Link} to='/' className={classes.link} >
    
<img src='https://www.pngfind.com/pngs/b/116-1162552_android-mobile-phone-png.png' alt="commerce.js" height='25px' className={classes.image} />
commerce.js
    </Typography>
    <div className={classes.grow}/>
    <div className={classes.button} >
      { location.pathname==='/'?  <IconButton aria-label='show cart items' color='inherit' >
            <Badge component={Link} to='/cart' badgeContent={totalItems} color='secondary' >
                <ShoppingCart/>
            </Badge>
        </IconButton>: null}
    </div>
    </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar