import React, { Component, Fragment } from 'react';
import generateCards from './helpers/generateCards';
import shuffle from './helpers/shuffle';
import Header from '../src/components/Header/Header';
import CardContainer from '../src/components/CardContainer/CardContainer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            cards: generateCards()
        }
        this.handleShuffle = this.handleShuffle.bind(this);
    }

    handleShuffle(){
        const cardsShuffled = shuffle(this.state.cards);
        this.setState({
            cards: cardsShuffled
        })
    }

    render(){
        return (
            <Fragment>
                <Header 
                    handleShuffle={this.handleShuffle}
                />
                <CardContainer cards={this.state.cards} />
            </Fragment>
        )
    }
}

export default App;