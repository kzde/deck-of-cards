import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Header.scss';

const Header = (props) => {

    const shuffleHandler = () => props.handleShuffle();
    const dealOneCardHandler = () => props.handleDealOneCard();

    return (
        <div className="Header">
            <AppBar position="static">
                <Typography variant="h6" color="inherit" >
                    Deck Of Cards
                </Typography>
                <Button color="inherit" onClick={shuffleHandler}>Shuffle</Button>
                <Button color="inherit" onClick={dealOneCardHandler}>Deal One Card</Button>
            </AppBar>
        </div>
    )
}

Header.propTypes = {
    handleShuffle: PropTypes.func.isRequired,
    handleDealOneCard: PropTypes.func.isRequired
}

export default Header;