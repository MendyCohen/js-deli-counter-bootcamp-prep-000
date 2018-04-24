var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

/* function nowServing(firstOnLine) {
if(firstOnLine === 1) {
  return firstOnLine;
} else {return "There is nobody waiting to be served!"}
} */ 

/* function nowServing(firstOnLine) {
  firstOnLine.shift();
if(firstOnLine.length === 0) {
  return "There is nobody waiting to be served!";
} 
} */

/* function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = line.shift();
    return "now serving " + person;
  }
} */

function nowServing(firstOnLine) {
if(firstOnLine === 0) {
  return firstOnLine;
} else {return "There is nobody waiting to be served!"}
}