// linear Search
/* const arr = [0, 1, 5, 8, 11, 25]
const x = 5;

function linearSearch(arr, x) {
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] === x) {
            return true
        }        
    }
    return false
}

const result = linearSearch(arr, x)
console.log(result); */

// binary Search 
const arr = [0, 1, 5, 8, 11,22,55,96,120,556]
const x = 120;

// recursion
// function binarySearch(arr, x, start, end) {
       
//     if (start > end) {
//         return false
//     }
    
//     const mid = Math.round((start+ end)/2)
//     // console.log(mid);

//     if (arr[mid]===x) {
//         return true
//     }

//     if (arr[mid] > x) {
//        return  binarySearch(arr, x , start, mid-1)
//     }
//     else {
//         return binarySearch(arr, x , mid + 1 , end)
//     }
// }


// iterative way
function binarySearch(arr, x) {
    let start = 0
    let end = arr.length - 1
    
    while (start <= end) {
        const mid = Math.round((start + end) / 2)
        // console.log(mid)
        if (arr[mid] === x) {
            return true
        }

        else if(arr[mid] > x){
            end = mid-1
        }
        else if(arr[mid] < x){
            start = mid+1
        }
    }
    return false
}

const result = binarySearch(arr, x)
console.log(result);