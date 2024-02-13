function insertionSortReverse(array) {
    for (let i = array.length - 1; i > 1; i--) {
        let value = array[i];
        for (let j = i; j < array.length && array[j-1] > value; j++) {
            array[j] = array[j-1]; }
        array[j] = value;
    return array;
}
