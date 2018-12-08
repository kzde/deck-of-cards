import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';
jest.mock('@material-ui/core/Paper', () => 'Paper');

const props = {
    card: {
        group: 'club',
        value: 'queen'
    }
}
describe('Card', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<Card {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})