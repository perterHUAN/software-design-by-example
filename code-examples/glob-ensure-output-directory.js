import glob from "glob";
import fs from "fs-extra";
import path from "path";

const [srcRoot, dstRoot] = process.argv.slice(2);
glob(`${srcRoot}/**/*.*`, { ignore: "*.bck" }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    for (const srcName of files) {
      const dstName = srcName.replace(srcRoot, dstRoot);
      const dstDir = path.dirname(dstName);
      // src/hello.js => src
      // ./src/hello.js => ./src 
      console.log("dstDir: ", dstDir);
      // async
      fs.ensureDir(dstDir, (err) => {
        console.error("error: ", err);
      });
    }
  }
});
