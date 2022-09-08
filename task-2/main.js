// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr = [];
let count = 0
for (i = 0; i < array.length - 1; i++) {
    const element = array[i]
    for (i = i + 1; i < array.length; i++){
    
        const next_element = array[i]
    if (element != next_element) {
        count++
    }
}

}
console.log(count);