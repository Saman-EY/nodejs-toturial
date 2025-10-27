const fs = require("fs");

// fs.mkdir("new-file", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

const folderAddress = "new-dir/inner-new1";
const checkExist = fs.existsSync(folderAddress);


if (checkExist) {
  console.log("folder already exist");
} else {
  fs.mkdir(folderAddress, (err) => {
    console.log(err);
  });
}


// ------------------------------------
fs.readdir("./", (err,files) => {
    console.log(files)
})