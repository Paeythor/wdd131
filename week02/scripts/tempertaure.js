let temperature = 75;

if (temperature > 90) {
  console.log("It's really hot outside!");
} else if (temperature > 70) {
  console.log("It's a nice day.");
} else {
  console.log("You might need a jacket.");
}

// Example using switch
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Wednesday":
    console.log("Halfway through the week.");
    break;
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  default:
    console.log("Just another day.");
}

// Example using a for loop
console.log("Counting from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Example using a while loop
let count = 0;
console.log("Counting with a while loop until count is less than 3:");
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}

// Example using forEach loop
let fruits = ["apple", "banana", "cherry"];
console.log("Listing fruits using forEach:");
fruits.forEach(function(fruit) {
  console.log(fruit);
});