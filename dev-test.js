// call: npm run dev-test

// Import
const Block = require("./block");

/***  Test der Block-Funktionalität  */
const block = new Block("aktuelle Zeit","hash1","hash2","meineDaten");
console.log(block.toString());

