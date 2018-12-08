import React, { Component } from 'react';
import generateCards from '../../helpers/generateCards';
import Card from '../../components/Card/Card';
import './CardContainer.scss';

class CardContainer extends Component {

    constructor() {
        super();
        this.state = {
            cards: generateCards()
        }
    }

    render() {
        return (
            <div className="CardContainer">
                {this.state.cards.map(card => {
                    return (<Card card={card} />)
                })}
            </div>

        )
    }
}

export default CardContainer;