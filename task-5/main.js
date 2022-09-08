// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let sum = 0;
let sum_1 = 0;
for (let i = 0; i < matrix.length; i++) {
    let element = matrix[i][i]
    sum += element
    let next_element = matrix[i][matrix[i].length - 1 - i]
    sum_1 += next_element
}
console.log(sum,sum_1);
