let resolvedPromise = new Promise(function (resolve, reject) {
  let success = { message: "delayed success!" };
  setTimeout(() => resolve(success), 500);
});

let rejectedPromise = new Promise(function (resolve, reject) {
  let rejected = { message: "delay rejected!" };
  setTimeout(() => reject(rejected), 500);
});

resolvedPromise.then((message) => {
  console.log(message);
});
rejectedPromise.catch((message) => {
  console.log(message);
});
