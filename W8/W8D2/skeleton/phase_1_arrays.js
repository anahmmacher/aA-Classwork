// function Array(array){
// this.array = array;
// }

// let Array1 = [1, 2, 1, 3, 4, 4, 5];

// Array.prototype.unique = function(){
//     let newArr = [];
//     this.forEach(element => {
//         if (!newArr.includes(element)){
//             newArr.push(element);
//         }
//     });
//     return newArr;
// }

// console.log(Array1.unique())

// let Array2 = [1, 5, -1, 6, 2, -5];

// Array.prototype.twoSum = function(){
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) { ---- this is the equivalent of 'while i' loop 
//         for (let j = i + 1; j < this.length; j++) {
//             if (this[i] + this[j] === 0) {
//                 newArr.push([i, j]);
//             }
//         };
//     };
//     return newArr;
// }

// console.log(Array2.twoSum())

let Array3 = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
];

Array.prototype.transpose = function(){
    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length }) // this creates an empty 2-d array
    );
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j]; // this adds what's in index[i][j] to the empty 2d-array's inverse index
        };
    };
    return columns
};

console.log(Array3.transpose())