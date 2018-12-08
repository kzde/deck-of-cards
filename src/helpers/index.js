const getRandomIndex = v => Math.floor(Math.random() * Math.floor(v))

export const shuffle = array => {
    const arrLength = array.length;
    for (let i = arrLength - 1; i > 0; i--) {
        let randomIndex = getRandomIndex(i + 1);
        let tmp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = tmp;
    }
    return array;
}

export const generateCards = () => {
    const cards = [];
    const groups = ['heart', 'spade', 'club', 'diamond'];
    const cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    groups.forEach(group => {
        cardValues.forEach(value => {
            cards.push({
                group,
                value
            })
        })
    })
    return cards;
}

export const dealOneCard = cards => {
    if (cards.length > 1) {
        const index = getRandomIndex(cards.length);
        const card = cards[index];
        cards.splice(index, 1);
        return { cards, card };
    } else if (cards.length === 1) {
        return { cards: [], card: cards[0] }
    }
    return { cards: [], card: {} };
}


