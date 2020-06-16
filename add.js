function add(x, y) {
    let _x = Number(x),
        _y = Number(y)

    if (isNaN(_x) || isNaN(_y)) {
        return NaN
    } else {
        return _x + _y
    }
}

module.exports = add