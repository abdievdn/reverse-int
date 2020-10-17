module.exports = function reverse (n) {
    let arr = n.toString();
    let arrResult = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '-') break;
        arrResult.push(arr[i]);
    }

    return parseInt(arrResult.join(''));
}


