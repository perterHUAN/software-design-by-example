import glob from "glob";

glob("**/*.*", (error, files) => {
  if (error) {
    console.error(error);
  } else {
    for (const name of files) {
      console.log(name);
    }
  }
});
