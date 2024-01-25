// Intentional Error: If you haven’t received an array index error in one of
//  your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
var myArray = [1, 2, 3, 4, 5];
// Trying to access an index that doesn't exist (index 10)
console.log(myArray[10]); // This will cause an array index error
// To correct the error, let's check the length of the array before accessing the index
if (myArray.length > 10) {
    console.log(myArray[10]); // Accessing index 10 if it exists
}
else {
    console.log("Index 10 is out of bounds for this array."); // Error handling message
}
