import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
jest.mock('@material-ui/core/AppBar', () => 'AppBar');
jest.mock('@material-ui/core/Button', () => 'Button');
jest.mock('@material-ui/core/Typography', () => 'Typography');

const props = {
    handleShuffle: () => { },
    handleDealOneCard: () => { }
}
describe('Header', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(<Header {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})