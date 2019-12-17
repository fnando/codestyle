module.exports = {
  roots: ["<rootDir>/src"],
  modulePaths: ["src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(scss|css|jpe?g|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-filename-transform",
  },
  testRegex: "^.+\\.(spec|test)\\.[tj]sx?$",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["/vendor/bundle/"]
};
