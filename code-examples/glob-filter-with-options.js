import glob from "glob";

glob("**/*.*", { ignore: "*.bck" }, (error, files) => {
  if (error) {
    console.log(error);
  } else {
    for (const name of files.filter((f) => !f.endsWith(".bck"))) {
      console.log(name);
    }
  }
});
