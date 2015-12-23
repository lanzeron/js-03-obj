"use strict";
(function() {
    function getNumbers(arr) {
        var numbersArr = [];
        var x;
        for (var i = 0; i < arr.length; i++) {
            x = parseFloat(arr[i]);
            if (!isNaN(x)) {
                numbersArr.push(x);
            }
        }
        return numbersArr;
    }

    function getNumericSum(arr) {
        var sum = 0;
        var numbersArr = getNumbers(arr);
        for (var i = 0; i < numbersArr.length; i++) {
            sum += numbersArr[i];
        }
        return sum;
    }

    function getQuanOfUniqueElements(arr) {
        var resArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (resArr.indexOf(arr[i]) == -1) {
                resArr.push(arr[i]);
            }
        }
        return (resArr.length);
    }

    function getQuanOfUniqueCharacters(str) {
        var resArr = [];
        for (var i = 0; i < str.length; i++) {
            if (resArr.indexOf(str[i]) == -1) {
                resArr.push(str[i]);
            }
        }
        return resArr.length;
    }

    function getPensionersName(arr) {
        var pensionersArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].age > 65) {
                pensionersArr.push(arr[i].name);
            }
        }
        return pensionersArr;
    }
    /*console.log(getPensionersName([{
        name: "yura",
        age: 31
    }, {
        name: "Vasja",
        age: 66
    }]));*/
    function getBiggestPossibleLoss(arr) {
        var a;
        var p;
        var max = arr[0];
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        arr.forEach(function(item, i) {
            if (item == min) {
                a = i;
            }
        });
        for (var j = 0; j < a; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
        p = min - max;
        return p;
    }
    console.log(getBiggestPossibleLoss([3, 2, 4, 2, 1, 5, 4, 2, 1, 5, 8]));
})();