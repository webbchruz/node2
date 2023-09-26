const {readFileSync,writeFileSync}= require ("fs");

const first = readFileSync('./content/subfolder/first.txt',"utf8");
const second = readFileSync('./content/subfolder/second.txt', 'utf8');
const third = writeFileSync("./content/third.txt",`Here is the result: ${first}`,{flag:"a"});
const third1 =  readFileSync('./content/third.txt',"utf8");
console.log(first);
console.log(second);
console.log(third1);