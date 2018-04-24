var katzDeli = [];

  function takeANumber(currentLine, name) {
   currentLine.push(name);
return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(name) {
  if(katzDeliLine === 0) {
    "There is nobody waiting to be served!";
  } else {
    katzDeliLine.pop();
  } return katzDeliLine;
}