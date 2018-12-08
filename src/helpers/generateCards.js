const generateCards = () => {
    const cards = [];
    const groups = ['heart', 'spade', 'club', 'diamond'];
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Ace', 'Jack', 'Queen', 'King'];
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

export default generateCards;
