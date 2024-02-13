function insertionSortReverse(array) {
    for (var i = array.length - 2; i >= 0; i--) {
        var value = array[i];
        var j;
        for (j = i; j < arr.length - 1 && array[j+1] < value; j++) {
            array[j] = array[j+1]; }
        array[j] = value; }
    return array;
}
