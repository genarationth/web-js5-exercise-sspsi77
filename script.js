// Exercise #1

// Part 1

// Create an array that has these three names Sofia, David, and Juan. 

const queue = [ 'Sofia', 'David', 'Juan'];

console.log(queue);

// Part 2

// Two people get added to the back of the line - Sara and Augustin. 

queue.push('Sara','Augustin');

// The first person in line is called to the teller.

queue.shift();

console.log(queue);

// Part 3

// David was saving a spot for his friend Renata.She shows up and goes behind him.

queue.splice(1,0,'Renata');

// Elena shows up and goes to the end of the line.

queue.push('Elena');

console.log(queue);

// Exercise #2

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
let stars = '';
for(let i=1; i<=5; i++){
    for(let j=0; j<1; j++){
   stars = stars + '* ';
   console.log(stars);
    }
}

// Exercise #3

// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive

let xValue = 7;
while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}

// Print all the odd numbers between 1 - 100

for(let i=0; i < 100; i++) {
    if ( i%2 === 1 ) {
        console.log(i);
    }
}

// Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
let num = '';
 const n_1 = 6;
 let i = 1;
 while ( i <= n_1 ) {
    num = num + '[' + i + '] ';
    i++;
 }

 console.log(num);


// Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

//part 4
let sum = 0;
const n_2 = 5;
let j = 0;
while (j <= n_2) {
   sum = sum + j ;
   j++;
} 

console.log(sum);
