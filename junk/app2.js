const {module3, modulefra} = require('./externalModule')
const os = require('os')
const path = require('path')
const fs = require('fs')
const {readFile, writeFile} = require('fs')

console.log("start")

readFile("./file1", "utf8", (err, result) => {
 if (err) {
  console.log(err)
  return
 }
 const first = result

 readFile("./file2", "utf8", (err, result) => {
  if (err) {
   console.log(err)
   return
  }
  const second = result
  writeFile(
  './fileout',
  'here the super result',
  (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log("done with wrtefile")
 })
 console.log("done with readfile2")
})
})


console.log("done for good!")

