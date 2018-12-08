import React from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';

const CardContainer = (props) => {

    return (
        <div className="CardContainer">
            {props.cards.map((card, index ) => {
                return (<Card key={index} card={card} />)
            })}
        </div>
    )
}

export default CardContainer;