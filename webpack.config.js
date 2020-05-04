const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer:{
      // specifying the path from which the devserver will be serving the bundle.
      contentBase:path.join(__dirname,'public'),
  }
};
