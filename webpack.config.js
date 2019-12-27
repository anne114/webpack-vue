module.exports = env => {
  console.log("env:::", env);
  if (env === "production") {
    return require("./build/build.pro");
  } else if (env === "test") {
    return require("./build/build.test");
  } else {
    return require("./build/build.dev");
  }
};
