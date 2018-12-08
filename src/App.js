import React, { Component, Fragment } from 'react';
import { shuffle, generateCards, dealOneCard } from './helpers/index';
import Header from '../src/components/Header/Header';
import CardContainer from '../src/components/CardContainer/CardContainer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            card: {},
            cards: generateCards(),
            dealOneCard: false,
            shuffleForDealOneCard: false
        }
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleDealOneCard = this.handleDealOneCard.bind(this);
    }

    handleShuffle() {
        if (this.state.cards.length === 0) {
            this.setState({
                cards: shuffle(generateCards())
            })
        } else {
            this.setState({
                cards: shuffle(this.state.cards)
            })
        }
        this.setState({
            card: {},
            dealOneCard: false,
            shuffleForDealOneCard: false
        })
    }

    handleDealOneCard() {
        if (!this.state.shuffleForDealOneCard) {
            shuffle(this.state.cards);
            this.setState({
                shuffleForDealOneCard: true
            })
        }
        const { card, cards } = dealOneCard(this.state.cards);

        this.setState({
            card,
            cards,
            dealOneCard: true
        })
    }

    render() {
        return (
            <Fragment>
                <Header
                    handleShuffle={this.handleShuffle}
                    handleDealOneCard={this.handleDealOneCard}
                />
                <CardContainer
                    card={this.state.card}
                    cards={this.state.cards}
                    dealOneCard={this.state.dealOneCard}
                />
            </Fragment>
        )
    }
}

export default App;