const shuffle = (array) => {
    const arrLength = array.length;
    for(let i = arrLength - 1 ; i > 0; i--){
        let randomIndex = getRandomIndex(i+1);
        let tmp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = tmp;
    }
    return array;
}

const getRandomIndex = v => Math.floor(Math.random() * Math.floor(v))

export default shuffle;