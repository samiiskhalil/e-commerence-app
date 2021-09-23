import React from 'react'
import {AppBar,ToolBar,Badge,MenuItemm,Menu,Typography, IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import makeStyles from './styles.js'
const Navbar = () => {
    return (
        <>
            <AppBar color='inherit' position='fixed' className='classes.appBar' >

<ToolBar><Typography>
    
<img src='https://www.pngfind.com/pngs/b/116-1162552_android-mobile-phone-png.png' alt="commerce.js" height='25px' className={classes.image} />
commerce.js
    </Typography>
    <div className={classes.grow}/>
    <div className={classes.button} >
        <IconButton aria-label='show cart items' color='inherit' >
            <Badge bodyContent={2} color='secondary' ></Badge>
        </IconButton>
    </div>
    </ToolBar>

            </AppBar>
        </>
    )
}

export default Navbar
