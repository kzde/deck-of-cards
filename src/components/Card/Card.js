import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Card.scss';

const Card = (props) => {
    const { card } = props;
    return (
        <div className="Card">
            <Paper>
                <div>{card.group}</div>
                <div>{card.value}</div>
            </Paper>
        </div>
    )
}

export default Card;