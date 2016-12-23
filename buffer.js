/**
 * http://usejsdoc.org/
 */
//Declaring buffer with value: int
var buf = new Buffer([48, 98, 65, 97]);
console.log(buf);
console.log(buf.toString());

// Declaring empty buffer
buf = new Buffer(10);
console.log(buf.toString());

//Declaring buffer with integer
buf = new Buffer("I am Saurav Mondal");
console.log(buf.toString());
console.log(buf.toString(undefined,0,4));
console.log(buf.toString('ascii',5,18));

//Checking whether object is buffer
console.log(Buffer.isBuffer(buf));

//sub buffer
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
//Returns as string
var ret = buf.toString('utf8',0,8);
console.log(ret);
console.log(Buffer.isBuffer(ret));
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//concatenate
var buf1 = new Buffer('I am Saurav. ');
var buf2 = new Buffer('I am a Software Developer');
var buf3 = Buffer.concat([buf1, buf2]);
console.log('content of buf3: '+buf3.toString());

//Slice
buf3 = buf1.slice(0, 11);
console.log(Buffer.isBuffer(buf3));
console.log('content of buf3: '+buf3.toString());
console.log(buf3.length);

//write to a buffer
buf = new Buffer(256);
len = buf.write("I am Saurav");
console.log(buf.toString());
console.log(buf.toString(undefined, 0, 14));
console.log("Octets written : "+  len);