const {module3, modulefra} = require('./externalModule')
const os = require('os')
const path = require('path')
const fs = require('fs')
const {readFileSync, writeFileSync} = require('fs')

const amount = 9
const john = 'john'
const susan = 'susan'

if (amount < 10) 
  console.log("less than ten")
else
  console.log("more or equal than ten")


const sayHi = (name) => {
  console.log(`Hi ${name}!`)
}

const module1 = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const module2 = {
  x: 24,
  getX: function() {
    return this.x;
  }
};

sayHi(john)
sayHi(susan)

fgetx = module1.getX 
console.log(fgetx.bind(module1)())
console.log(fgetx.bind(module2)())
console.log(fgetx.bind(module3)())

const osType = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem()/(1024*1024*1024),
  freeMem: os.freemem()/(1024*1024*1024)
}

const file1 = path.join(".","subfolder","file1")
const file2 = path.join(".","subfolder","file2")
console.log(path.resolve("subfolder","file2"))
console.log(path.resolve(__dirname,"subfolder","file2"))
console.log(path.resolve("/subfolder","file2"))
console.log(path.resolve("/file2"))

const text1 = readFileSync(path.resolve(".","subfolder","file1"), 'utf8')
try {
  const text2 = readFileSync(path.resolve("subfolder","file2"), 'utf8')
  console.log(text2)
} catch(error) {
  console.log("file2 is not existent")
}
console.log(text1)
console.log("--------------------")

writeFileSync(
"./subfolder/filewrote",
"here is the result!"
)


console.log(os.userInfo())
console.log(osType)
console.log(`${file1} ${path.basename(file1)}`)
console.log(path.basename(file2))

