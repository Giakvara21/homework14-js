//task 1
const numbersArray = [10, 5, 39, 45, 53];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum = sum + numbersArray[i];
}
console.log(sum);

//task 2
const peopleArray = [
  { name: "Khvicha", age: 23, address: "Napoli" },
  { name: "Giorgi", age: 23, address: "Valencia" },
  { name: "George", age: 23, address: "Metz" },
];

// Task 3
console.log(
  "My name is " +
    peopleArray[0].name +
    ", My age is " +
    peopleArray[0].age +
    ", My address is " +
    peopleArray[0].address
);

// Task 4
if (peopleArray[1].age < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
}

// Task 5
const numbers = [10, 5, 39, 45, 53];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//task 6
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათო");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
}
