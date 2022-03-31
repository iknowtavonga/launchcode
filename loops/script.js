// Print the numbers 0 - 20, one number per line.
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
console.log('*******************')

// Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}
console.log('*******************')

// Print the EVEN numbers 12 down to -14 in descending order, one number per line
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
console.log('*******************')

// Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], 
// then construct for loops to accomplish the following tasks:

// Print each element of the array to a new line.

const randomArray = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}
console.log('*******************')

//Print each character of the string---in reverse order---to a new line.
let launch = 'LaunchCode';

for (let i = launch.length - 1; i >= 0; i--) {
    console.log(launch[i]);
}
