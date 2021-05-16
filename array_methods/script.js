const data = [10, 12, 14, 16, 18, 20, 22, 24];

const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");
const content = document.querySelector(".content");

content.innerHTML = "Original Array: " + data;

const checkAdult = (age) => {
  return age >= 18;
};

const square = (n) => {
  return n * n;
};

// every method
const myFunction1 = () => {
  ans1.innerHTML =
    "Using every Method: All ages are >=18: " + data.every(checkAdult);
};

// map method
const myFunction2 = () => {
  let x = data.map(square);
  ans2.innerHTML = "Using map Method: All ages after squaring: " + x;
};

// filter method
const myFunction3 = () => {
  let x = data.filter(checkAdult);
  ans3.innerHTML = "Using filter Method: " + x;
};
