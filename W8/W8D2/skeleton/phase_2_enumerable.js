let array1 = [1, 2, 3, 4, 5, 6]

// Array.prototype.myEach = function(cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i]);
//     }
// };

// array1.myEach((num) => {
//     console.log(`square of ${num} is ${num * num}`);
// });


// Array.prototype.myMap = function (cb) {
//     const mapArray = [];

//     this.myEach(element => mapArray.push(cb(element)) );
//     return mapArray;
// };

Array.prototype.myMap = function (func) {
    const mappedArray = [];

    this.myEach(element => mappedArray.push(func(element)));

    return mappedArray;
};

console.log(array1.myMap(num => num * num));