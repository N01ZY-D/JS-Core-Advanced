function arrMin(arr){
    return arr.sort((a, b) => a - b)[0];
}
console.log(arrMin([5,7,9,1,3]));