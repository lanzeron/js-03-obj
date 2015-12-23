"use strict";
(function() {
    function getPensionersName(arr) {
        var pensionersArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].age > 65) {
                pensionersArr.push(arr[i].name);
            }
        }
        return pensionersArr;
    }
    console.log(getPensionersName([{name:"yura", age:31}, {name:"Vasja", age:66}, {name:"Sergij", age:70}]));
})();