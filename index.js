var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(shift) {
 var please = `Currently serving ${shift[0]}.`;
 shift.shift();
 if(shift.length === 0) {
   return "There is nobody waiting to be served!";
 } return please;
}

function currentLine(line) {
  if(line.length === 0) {
     return 'The line is currently empty.';
  } else {return `The line is currently:${line}`}
}

