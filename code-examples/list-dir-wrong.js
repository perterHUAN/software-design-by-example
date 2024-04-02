import fs from "fs";
// get the parameter which represents the directory name
const dirName = process.argv[2];
/* 
  wrong, asyn operation
  readdir(path[,options],callback)
  callback(error, files)
  don't return anything
*/
const results = fs.readdir(dirName);
for (const name of results) {
  console.log(name);
}
