const fs = require("fs");

function randString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//console.log(randString(30));

for (let i = 0; i < 10; i++) {
  fs.writeFile(`Question3/Logs/log${i}`, randString(30), function (err) {
    if (err) throw err;
    console.log(`log${i}.txt created`);
  });
}
