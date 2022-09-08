// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]
let arr = []
for (i = 0; i < array_1.length; i++) {
    const element = array_1[i];
    let exist = false;
    for (j = 0; j < array_2.length; j++) {
        const next_element = array_2[j]
        if (element==next_element){
            exist= true;
            break;
        }
    }
    if(!exist){
        arr.push(element)
    }
}
console.log(arr.join(" "));