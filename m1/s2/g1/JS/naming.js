var username = 'Nick';
var defaultName;


if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}

console.log (defaultName);


var isNightTime = true;

if (isNightTime) {
    console.log ('Turn on the lights!');
} else {
    console.log ('Turn off the lights!')
}


var stopLight = 'yellow';

if (stopLight === 'red') {
    console.log ('Stop!');
} else if (stopLight === 'yellow') {
    console.log ('Slow down!');
} else if (stopLight === 'green') {
    console.log ('Go!');
} else {
    console.log ('Caution, unknown!');
}


greetWorld ();

function greetWorld () {
    console.log ('Hello, world!');
 }


 var stopLight = 'yellow';

if (stopLight === 'red') {
    document.write ('Stop!');
} else if (stopLight === 'yellow') {
    document.write ('Slow down!');
} else if (stopLight === 'green') {
    document.write ('Go!');
} else {
    document.write ('Caution, unknown!');
}

