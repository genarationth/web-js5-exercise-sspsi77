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

