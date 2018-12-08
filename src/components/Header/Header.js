import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <AppBar position="static">
                <Typography variant="h6" color="inherit" >
                    Deck Of Cards
                </Typography>
                <Button color="inherit">Shuffle</Button>
                <Button color="inherit">Deal One Card</Button>
            </AppBar>
        </div>
    )
}

export default Header;