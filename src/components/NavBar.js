import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
      }
});

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" style={{ background: '#AD1F1F', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Bank Banten
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );    
}

export default withStyles(styles, { withTheme: true })(NavBar);