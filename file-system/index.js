const fs = require("fs");

// NON-BLOCKING CODE
// fs.readFile("./package.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// BLOCKING CODE
// const data = fs.readFileSync("./index.js", "utf-8")
// console.log(data)

