/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
var zlib = require('zlib');

var data = '';
//======================== Reading from Stream ========================================
//Readable Stream
var readerStream = fs.createReadStream('input.txt');

//Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

//Handle stream events --> data, end, and erro
readerStream.on('data', function(chunk) {
	data += chunk; 
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('Program Ended');

//========================== writing  to a Stream ======================================
data = "Hey I am a developer\n";

//Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

//Mark the end of file
writerStream.end();

//Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

//======================= Piping the stream ===========================
//Pipe the read and write operations
//read input.txt and write data to output.txt
writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);

//======================= Chaining the stream =======================
//Compress the file input.txt to input.txt.gz
fs.createReadStream('input1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input1.txt.gz'));
  
console.log("File Compressed.");

//Decompress the file input.txt.gz to input.txt
fs.createReadStream('input1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input1.txt'));
  
console.log("File Decompressed.");