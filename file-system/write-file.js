const fs = require("fs");

const txt = "\nhellooooooooo222221";

// fs.writeFile("./write.txt", txt, {  encoding: "utf-8" }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.writeFileSync("./write.txt", txt);

// fs.appendFile("./write.txt", txt, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
// fs.appendFileSync("./write.txt", txt, "utf-8");

// check exist
const checkExist = fs.existsSync("./write.txt");

// remove
if (checkExist) {
  fs.unlink("./write.txt", (err) => {
    if (err) {
      console.log(err);
    }
  });
} else {
  console.log("file not found");
}
