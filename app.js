// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
// Solution 1
function moreZeross1(s) {
    s.split('').filter(function (a, b, c) { console.log(c); });
    var result = [];
    // // Remove duplicate
    var codes = Array.from(new Set(s));
    codes = codes.map(function (e) {
        // Set charcodes and Index of element
        return { value: s.charCodeAt(s.indexOf(e)).toString(2), index: s.indexOf(e) };
    });
    codes.forEach(function (e) {
        // Check if zeros are more or less
        if (checkZeros(e.value)) {
            result.push(s[e.index]);
        }
    });
    return result;
}
function checkZeros(binary) {
    var zeros = binary.split('').filter(function (e) { return +e == 0; });
    return zeros.length > binary.length / 2;
}
// Solution2
function moreZeross2(str) {
    return Array.from(new Set(str.split('').filter(function (e, i) {
        var charCode = str.charCodeAt(i).toString(2);
        var zeros = charCode.split('').filter(function (e) { return +e == 0; });
        return zeros.length > charCode.length / 2;
    })));
}
// console.log(moreZeross1('Geereaaaaat job!')); 
// console.log(moreZeross2('Geereaaaaat job!')); 
// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript 
function addLength(str) {
    return str.split(' ').map(function (e) { return "".concat(e, " ").concat(e.length); });
}
// console.log(addLength('apple ban'))
// Pascal's Triangle #2
// https://www.codewars.com/kata/52945ce49bb38560fe0001d9
