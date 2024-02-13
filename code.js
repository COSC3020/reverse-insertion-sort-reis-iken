function insertionSortReverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let value = array[i];
        let j;
        for (j = i; j >= 0 && array[j-1] < value; j--) {
            array[j] = array[j-1]; }
        array[j] = value; }
    return array;
}
