const path =require('path');

console.log(path.sep); //pathsep indicates the character used by the operating system to separate search path components.
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //used to resolve a sequence of path-segments to an absolute path
console.log(absolute)