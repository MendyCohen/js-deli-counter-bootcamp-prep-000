var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(firstOnLine) {
  return firstOnLine;
  if(firstOnLine === 0) {
    "There is nobody waiting to be served!";
  } else {
    firstOnLine.shift();
  } //return firstOnLine;
}