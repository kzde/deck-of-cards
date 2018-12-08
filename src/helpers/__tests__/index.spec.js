import { generateCards, dealOneCard } from '../index';

describe('generateCards', () => {
    it('should return 52 cards', () => {
        expect(generateCards().length).toEqual(52);
    });

    it('should return a card object with group and value key', () => {
        const cards = generateCards();
        expect(cards[0].group).not.toBeUndefined();
        expect(cards[0].value).not.toBeUndefined();
    });
})

describe('dealOneCard', () => {
    it('should return an object with card and cards', () => {
        const cards = ['1', '2', '3'];
        const result = dealOneCard(cards);
        expect(result.cards).not.toBeUndefined();
        expect(result.card).not.toBeUndefined();
    });

    it('should remove one card from cards', () => {
        const cards = ['1', '2', '3', '4'];
        const result = dealOneCard(cards);
        expect(result.cards.length).toEqual(3);
    })

    it('should return {} if the cards is empty', () => {
        expect(dealOneCard([])).toEqual({card: {}, cards: []});
    })

    it('should return the last card if cards has only one', () => {
        let cards = ['1'];
        const result = dealOneCard(cards);
        expect(result.cards.length).toEqual(0);
        expect(result.card).toEqual('1');
    })
})