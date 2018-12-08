import React from 'react';
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

export default Card;