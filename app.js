var fs = require('fs');

// FILE MANIPULATION
// Sync operation
// var readme = fs.readFileSync('readme.txt', 'utf8');

// //console.log(readme);

// fs.writeFileSync('writeme.txt', readme);


// Async file operation - Any code below will execute when this file operation runs in background
// fs.readFile('readme.txt', 'utf8', function(err, data){
//     //console.log(data);
//     fs.writeFile('writeme.txt', data);
// });

// Code

// Deleting file
// fs.unlink('writeme.txt');

// DIR MANIPULATION

// Sync Operation
// Create dir
// fs.mkdirSync('stuff');

// Remove dir
// fs.rmdirSync('stuff');

// ASync Operation
// Create dir
// fs.mkdir('stuff', function(){
//     fs.readFile('readme.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeme.txt', data);
//     });
// });

// Remove dir
fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});
