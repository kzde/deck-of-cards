import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import suits from '../../constant/index';
import './Card.scss';

const Card = (props) => {
    const { card } = props;
    return (
        <div className="Card">
            <Paper>
                <div>{suits[card.group]}</div>
                <div className={card.group}>{card.value}</div>
            </Paper>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        group: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired
}

export default Card;