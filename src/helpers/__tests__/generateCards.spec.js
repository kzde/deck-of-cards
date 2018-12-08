import generateCards from '../generateCards';

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