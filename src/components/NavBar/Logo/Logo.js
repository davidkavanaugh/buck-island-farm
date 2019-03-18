import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll'


import './Logo.css';
import LogoImg from '../../../assets/farmlogo.jpg';

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
            <Link id="logo"
                  to="section_1"
                  smooth={true}
                  offset={-65}
                  duration={500}
                >
                <img className="farm-logo" src={LogoImg} alt="farm logo" />
            </Link>
        </Typography>
      )
    }
  }
  export default withStyles(styles)(Logo);

