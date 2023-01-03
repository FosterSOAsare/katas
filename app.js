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
// Pascal's Triangle #2
// https://www.codewars.com/kata/52945ce49bb38560fe0001d9
// Idea
// Pascal triangle gets the next value from the immediate top value and and it's immediate left value. If none is available we use 0 except for thr first ever value which
// 
// 1  1
// 1  [x]
// [x] gets its value from the value at the top which is 1 and the value on the left of 1 which is 1 making x = 2
function pascal(depth) {
    var result = [];
    //  Create a loop with the depth as the max number
    for (var i = 0; i < depth; i++) {
        var arr = [1];
        var top_1 = result[i - 1];
        if (i > 0) {
            for (var j = 1; j <= i; j++) {
                // top[j] is the immediate top top[j -1] is to the left of the immediate left
                arr.push((top_1[j] ? top_1[j] : 0) + top_1[j - 1]);
            }
        }
        result.push(arr);
    }
    return result;
}
// console.log(pascal(9));
