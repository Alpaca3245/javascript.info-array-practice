// Sort in decreasing order
function sortInDeceasingOrder(arr) {
    // ... your code to sort it in decreasing order
    return arr.sort((a,b) => {
       if (a < b) return 1; // does not have to be 1 , or -1, -2 and 2 is the same result
       if (a == b) return 0;
       if (a > b) return -1;
    });
}

console.log("Sort in decreasing order\n-------------------------\n")
console.log(sortInDeceasingOrder([5,2,1,-10, 8]));

let arrCopyAndSort = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arrCopy = arr.slice();
    console.log(arrCopy);
    return arrCopy.sort();
}

let sorted = copySorted(arrCopyAndSort)

console.log("Copy and Sort Array\n-------------------------\n")
console.log("Sorted Array:      " + sorted);
console.log("Unsorted Array:    " + arrCopyAndSort);

console.log("Map to names\n-------------------------\n")



