var lastIndexOf = function (arr, elt, start) {
    if (start === void 0) { start = 10; }
    for (var i = start - 1; i >= 0; i--)
        if (arr[i] === elt)
            return i;
    return -1;
};
console.log(lastIndexOf([1, 2, 1, 2], 2));
