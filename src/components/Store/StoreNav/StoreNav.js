import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Headroom from 'react-headroom';
import Logo from './Logo/Logo';
import Button from '@material-ui/core/Button';


import './StoreNav.css';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    }
  };
  
  function StoreNav(props) {
    
    const { classes } = props;
    
    return (
    <Headroom>
      <div id="storeNav" className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <span className="spacer"></span>
            <div className="cart-btn">
              <Button variant="outlined" size="small" color="inherit" className='snipcart-checkout snipcart-summary'>
                <i className="material-icons">shopping_cart</i>
                cart (<span className="snipcart-total-items"></span>)
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      </Headroom>
    );
  }
  
  StoreNav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(StoreNav);