function binarySearch(arr, x , start, end) {
    if (start > end) {
        return false
    }

    const mid = Math.floor((start + end) / 2)
    // console.log(mid);
    
    if (arr[mid] === x) {
        return true
    }

    if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid-1)
    }
    else {
        return binarySearch(arr, x, mid+1, end)
    }
}


const arr = [1, 2, 3, 6, 9, 10, 55]
const x=  5

const result = binarySearch(arr, x, 0 ,arr.length-1)
console.log(result);