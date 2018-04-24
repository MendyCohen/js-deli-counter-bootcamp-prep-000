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

function nowServing(firstOnLine) {
if(firstOnLine === 0) {
  return "There is nobody waiting to be served!";
} //else {return "There is nobody waiting to be served!"}
} 