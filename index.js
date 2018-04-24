var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(firstOnLine) {
   var numberOne = [];
  if(firstOnLine === 0) {
    "There is nobody waiting to be served!";
  } else {
    firstOnLine.shift();
  } //return firstOnLine;
}