// Iteration 1: Names and Input
const hacker1 = "Maria";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Penelope";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

// 3.1

let driverNameSpelled = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameSpelled += hacker1[i].toUpperCase() + " ";
}

console.log(driverNameSpelled);

// 3.2

let navigatorNameSpelled = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameSpelled += hacker2[i];
}

console.log(navigatorNameSpelled);

// 3.3

switch (hacker1.localeCompare(hacker2)) {
  case 1:
    console.log("The driver's name goes first.");
    break;
  case -1:
    console.log("Yo, the navigator goes first, definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}

//Bonus

//Bonus 1:

// I removed interlines
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae semper sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum urna eu neque consequat, non maximus orci vestibulum. Nam lobortis feugiat ornare. Nunc et erat aliquam, porttitor diam sed, facilisis orci. Donec luctus augue sit amet faucibus luctus. Ut bibendum nibh non dui varius, sed placerat lacus mollis. Proin dignissim non nibh ac consectetur. In tempus gravida pharetra. Quisque varius auctor justo, sed tincidunt justo sodales eu. Nullam aliquam faucibus nulla vel tristique. Nullam et purus id est tempor gravida. Morbi massa ligula, mattis at auctor in, finibus et risus. Curabitur hendrerit ullamcorper quam nec volutpat. Curabitur non nisi a nisl maximus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Integer aliquam tortor feugiat mauris lobortis, volutpat posuere lectus auctor. Proin non arcu id ipsum accumsan pellentesque. Vestibulum a rhoncus ex, et pretium nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque vel rutrum purus, et sagittis arcu. In convallis pellentesque porta. Vestibulum id consectetur felis. In gravida libero a aliquet varius. Aliquam in dictum ex. Nullam ac erat ut ipsum volutpat dictum. Suspendisse vel nisl orci. Nulla elementum purus eget leo fermentum, in ultrices dolor blandit. Aliquam erat volutpat. Curabitur nec justo nunc. Pellentesque et tincidunt lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam accumsan dapibus lacus, eget dictum enim blandit non.`;

const allWords = longText.split(" ");

console.log("words length ", allWords.length);

let wordCounter = 0;

for (let i = 0; i < allWords.length; i++) {
  if (allWords[i] === "et") wordCounter++;
}

console.log("Qty of 'et' ", wordCounter);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";

// I had to look up how to remove spaces and special characters
let newPhrase = phraseToCheck.replace(/[^A-Z0-9]+/gi, "").toUpperCase();

console.log(newPhrase);

let checkPalindrome = true;

for (let i = 0; i < newPhrase.length / 2; i++) {
  if (newPhrase[i] != newPhrase[newPhrase.length - 1 - i]) {
    console.log("The phrase is not a palindrome");
    checkPalindrome = false;
    break;
  }
}
if (checkPalindrome) console.log("The phrase IS a palindrome");
