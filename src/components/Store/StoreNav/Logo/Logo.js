import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './Logo.css';
import LogoImg from '../../../../assets/farmlogo.jpg';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    }
  };

class Logo extends Component {
    
    render() {
    const { classes } = this.props;
      return (
        <Typography variant="h6" color="inherit" className={classes.grow}>
            <a id="logo"
                  href="/"
                >
                <img className="farm-logo" src={LogoImg} alt="farm logo" />
            </a>
        </Typography>
      )
    }
  }
  export default withStyles(styles)(Logo);

