const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
let newArray = [];

function lowerCaseWords(array) {
  let lowerCasePromise = new Promise((resolve, reject) => {
    if (newArray !== undefined || newArray.length !== 0) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });

  array.map((item) => {
    if (typeof item == "string") {
      newArray.push(item.toLowerCase());
    }
  });

  lowerCasePromise
    .then((message) => {
      console.log(`Promise is ${message}`);
    })
    .catch((message) => {
      console.log(`Promise is ${message}`);
    });

  return newArray;
}

console.log(lowerCaseWords(mixedArray));
