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

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// Mostly copied solution because I did not understand how to define a new object
function combineNameAndSurname(user) {
    return users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));
}

let usersMapped = combineNameAndSurname(users)
console.log(usersMapped);

console.log("Map to names\n-------------------------\n")
let shuffleArr = [1,2,3];

function shuffle(arr) {
    // () => passes an function with no argument and name and returns Math.random() -0.5, because typeError if there is no function
    // sorts work by 1 
    return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(shuffleArr));
console.log(shuffle(shuffleArr));
console.log(shuffle(shuffleArr));

console.log("Get average age\n-------------------------\n")






