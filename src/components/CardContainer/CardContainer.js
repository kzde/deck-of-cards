import React from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';

const CardContainer = (props) => {

    const displayAllCard = () => {
        return props.cards.map((card, index) => <Card key={index} card={card} />)
    }

    const displayOneCard = () => {
        return (
            <div className="onecarddisplay">
                <div>Rest cards : {props.cards.length}</div>
                {props.cards.length !== 0 ?
                    <Card card={props.card} /> :
                    <div>No more card, click shuffle to restart</div>
                }
            </div>
        )
    }

    return (
        <div className="CardContainer">
            {
                props.dealOneCard ? displayOneCard() :
                    displayAllCard()
            }
        </div>
    )
}

export default CardContainer;