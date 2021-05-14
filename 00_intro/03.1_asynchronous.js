console.log('Hey Folks, Welcome to Webzen 2.O');


console.log('I am Line 1');
console.log('I am Line 2');
console.log('I am Line 3');
setTimeout(() => {
    console.log('I am Line 4, Sorry for the delay bro');
}, 1000);
console.log('I am Line 5, Hey Line 4 Where are you');
console.log('I am Line 6');



// setTimeout function just do nothing for given amount of time and after that it calls the callback

// So before executing line 4 it asks to wait for 3000 milli seconds
// but JS is asynchronous so it wont wait and continues to next step
// after 3 sec line 4 will be executed 