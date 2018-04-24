var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

 function nowServing(firstOnLine) {
if(firstOnLine === 1) {
  return firstOnLine;
} else {return "There is nobody waiting to be served!"}
} 