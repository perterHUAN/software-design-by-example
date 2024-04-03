import glob from "glob";

const srcDir = process.argv[2];
glob(`${srcDir}/**/*.*`, { ignore: "*.bck" }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    for (const name of files.filter((f) => !f.endsWith(".bck"))) {
      console.log(name);
    }
  }
});
