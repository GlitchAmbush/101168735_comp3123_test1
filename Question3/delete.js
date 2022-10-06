const fs = require("fs");

for (let i = 0; i < 10; i++) {
  fs.unlink(`Question3/Logs/log${i}`, function (err) {
    if (err) throw err;
    console.log(`log${i}.txt deleted`);
  });
}
