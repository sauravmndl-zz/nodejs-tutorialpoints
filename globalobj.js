/**
 * http://usejsdoc.org/
 */
console.log( __filename );
console.log( __dirname );

function printHello(){
	   console.log( "Hello, World!");
}


//Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
//clearTimeout(t);
setInterval(printHello,3000); 