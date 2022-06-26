const http = require('http');

//import * as fe_alias from 'fs';

const server = http.createServer((req,res) => {
    res.write("Welcome to Purga!")
    res.end()
})

server.listen(5000)