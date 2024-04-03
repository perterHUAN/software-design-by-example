import glob from "glob";

const [srcDir, dstDir] = process.argv.slice(2);
glob(`${srcDir}/**/*.*`, { ignore: "*.bck" }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    for (const srcName of files) {
      const dstName = srcName.replace(srcDir, dstDir);
      console.log(srcName, dstName);
    }
  }
});
