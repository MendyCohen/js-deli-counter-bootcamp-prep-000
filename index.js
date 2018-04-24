var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(name) {
   name.pop();
  if(name === 0) {
    "There is nobody waiting to be served!";
  }
}