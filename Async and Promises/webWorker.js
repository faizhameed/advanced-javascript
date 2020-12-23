// how we run concurrent threads

var worker = new Worker("worker.js");
worker.postMessage("hello");

const { spawn } = require("child_process");

spawn("git", ["stuff"]);
