import React from 'react';
import renderer from 'react-test-renderer';
import CardContainer from '../CardContainer';
jest.mock('../../Card/Card', () => 'Card');


const props = {
    cards: [{
        group: 'club',
        value: 'queen'
    },{
        group: 'spade',
        value: 'ase'
    }]
}

describe('Card', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<CardContainer {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})