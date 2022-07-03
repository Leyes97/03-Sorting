function split(array) {
    let firstHalf;
    let secondHalf;
    if (array.length) {
        secondHalf = array.splice(Math.floor(array.length / 2));
        firstHalf = array;
        return [firstHalf, secondHalf];
    }

}

function merge(arr1, arr2) {
    let newArr = [];
    while (arr1.length || arr2.length) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift())
        }
        else {
            newArr.push(arr2.shift())
        }
    }
    return newArr
}

// if (!arr1.length) {
//         newArr.push(arr2.shift())
//     } else {
//         newArr.push(arr1.shift())
//     }

function mergeSort(array) {
    if (array.length <= 1) return array;
    const mitadDeArray = split(array)
    let mitad1 = mitadDeArray[0];
    let mitad2= mitadDeArray[1];
    const m1= mergeSort(mitad1);
    const m2 = mergeSort(mitad2)
    
    return merge(m1,m2)
}

// function mergeSort(array) {
//     if (array.length <= 1) return array;
//     let [arr1, arr2] = split(array)
//     const m1 = mergeSort(arr1);
//     const m2 = mergeSort(arr2);
//     return merge(m1,m2)
// }