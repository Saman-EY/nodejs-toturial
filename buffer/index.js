// let buff = Buffer.from("hello world");

// console.log(buff);
// console.log("N".charCodeAt(0), "n".charCodeAt(0), "N".charCodeAt(0) - "n".charCodeAt(0));

let buff = Buffer.alloc(4);
buff.write("noide");

// console.log(buff)

const buffer = Buffer.from("saman");

console.log(buffer.toJSON());

const buff2 = Buffer.from([115, 97, 109, 97, 110], "hex");
console.log(buff2.toString());