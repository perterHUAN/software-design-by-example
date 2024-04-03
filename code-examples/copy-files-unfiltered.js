import glob from "glob";
import fs from "fs-extra";
import path from "path";

const [srcRoot, dstRoot] = process.argv.slice(2);
// test/a.bck not be ignored, if you want to ignore it, you should set 
// ignore field with the value "*/*.bck".
// if we want to ignore test/inner-test/a.bck, you should set ignore field
// with the value "**/*.bck".
glob(`${srcRoot}/**/*.*`, { ignore: "*.bck" }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    for (const srcName of files) {
      console.log("srcName: ", srcName);
      const dstName = srcName.replace(srcRoot, dstRoot);
      const dstDir = path.dirname(dstName);
      // src/hello.js => src
      // ./src/hello.js => ./src
      console.log("dstDir: ", dstDir);
      // async
      fs.ensureDir(dstDir, (err) => {
        if (error) {
          console.error("error: ", err);
        } else {
          fs.copy(srcName, dstName, (err) => {
            if (error) {
              console.error("error: ", err);
            }
          });
        }
      });
    }
  }
});
