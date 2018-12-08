import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import * as helpers from '../helpers/index';
jest.mock('../components/Header/Header', () => 'Header');
jest.mock('../components/CardContainer/CardContainer', () => 'CardContainer');


describe('App', () => {

    it('should renders correctly', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe('handleShuffle', () => {
        it('should call shuffle function and set card state to an empty object dealOneCard to be false', () => {
            const shuffleSpy = jest.fn();
            helpers.shuffle = shuffleSpy;
            const wrapper = shallow(<App />);
            wrapper.setState({
                card: { goupe: 'club', value: '2' },
                dealOneCard: true,
                shuffleForDealOneCard: true
            })
            wrapper.instance().handleShuffle();
            expect(shuffleSpy).toHaveBeenCalled();
            expect(wrapper.state('card')).toEqual({});
            expect(wrapper.state('dealOneCard')).toBeFalsy();
            expect(wrapper.state('shuffleForDealOneCard')).toBeFalsy();
        });

        it('should call generateCards function if there is no cards in the cards state', () => {
            const shuffleSpy = jest.fn();
            const generateCardsSpy = jest.fn().mockReturnValue([]);
            helpers.shuffle = shuffleSpy;
            helpers.generateCards = generateCardsSpy;
            const wrapper = shallow(<App />);
            wrapper.instance().handleShuffle();
            expect(generateCardsSpy).toHaveBeenCalled();
        })
    })

    describe('handleDealOneCard', () => {
        it('should call shuffle if the shuffleForDealOneCard is false', () => {
            const shuffleSpy = jest.fn();
            helpers.shuffle = shuffleSpy;
            const wrapper = shallow(<App />);
            wrapper.setState({
                shuffleForDealOneCard: false
            })
            wrapper.instance().handleDealOneCard();
            expect(shuffleSpy).toHaveBeenCalled();
        })

        it('should call dealOneCard function', () => {
            const dealOneCardSpy = jest.fn().mockReturnValue({
                card: { group: 'heart' },
                cards: [{ group: 'heart' }]
            });
            helpers.dealOneCard = dealOneCardSpy;
            const wrapper = shallow(<App />);
            wrapper.instance().handleDealOneCard();
            expect(dealOneCardSpy).toHaveBeenCalled();
        })

        it('should set state with the dealOneCard return value', () => {
            const dealOneCardSpy = jest.fn().mockReturnValue({
                card: { group: 'heart' },
                cards: [{ group: 'heart' }]
            });
            helpers.dealOneCard = dealOneCardSpy;
            const wrapper = shallow(<App />);
            wrapper.instance().handleDealOneCard();
            expect(wrapper.state('card')).toEqual({ group: 'heart' });
            expect(wrapper.state('cards')).toEqual([{ group: 'heart' }]);
        })
    })
})