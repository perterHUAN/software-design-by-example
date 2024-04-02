import fs from "fs";

const path = process.argv[2];
fs.readdir(path, (error, files) => {
  if (error) {
    console.error("error: ", error);
  } else {
    for (const name of files) {
      console.log(name);
    }
  }
});
console.log("last line of program");
