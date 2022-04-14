const arr = [5, 12, 56, 66, 45,10, 33, 58, 15]
const size = arr.length

// another partitioning way
// function partition(arr, low, high) {
//     let i = low - 1
//     let pivot = arr[high]
//     for (let j = low; j <= high - 1; j++) {
//         if (arr[j] < pivot) {
//             i++;
//
//           [arr[i],arr[j]]= [arr[j],arr[i]]
//         }
//     }
//          [arr[i+1],arr[high]= [arr[high],arr[i+1]]

//     return(i+1)
// }

function partition(arr, low, high) {
    let i = low
    let j = high
    // pivot 
    let pivot = arr[high]

    while (i < j) {
        // pivot is greater than left
        // then increase i
        do {
            i++
        } while (arr[i] < pivot) 
       
        // pivot is right than right
        // then decrease j
        do {
            j--
        } while (arr[j] > pivot)
        
        if (i < j) {
            [arr[i],arr[j]]= [arr[j],arr[i]]    // swap i and j using es6 destructuring
        }
    }
    [arr[i],arr[high]]= [arr[high],arr[i]]   /// swap left and pivot using es6 destructuring
    
    // console.log(i);
    return i
}

function quickSort(arr, low, high) {
    if (low < high) {
        const p = partition(arr, low, high)
        if (low < p - 1) {
            quickSort(arr, low, p - 1);
       }
       
        if (p < high) {
            quickSort(arr, p + 1, high);   
       }
       
    }
    
}
function printArr(arr, size) {
    for (let i = 0; i < size ; i++){
        console.log(arr[i] + ' ')
    }
}
quickSort(arr, 0, size-1)
printArr(arr,size)
