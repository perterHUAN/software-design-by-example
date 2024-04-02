import fs from "fs";

const listContents = (error, files) => {
  if (error) {
    console.error("error: ", error);
  } else {
    for (const name of files) {
      console.log(name);
    }
  }
};

const path = process.argv[2];
fs.readdir(path, listContents);
console.log("last line of program");
