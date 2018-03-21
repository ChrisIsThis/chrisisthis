var textArray = document.getElementById('weird').innerHTML.split('')
var colorArray = [];
var counter = 0;

setInterval(function(){
  for (var x = 0; x < textArray.length; x++){
    var color;
    if (counter % 3 === 0){
      //color = "#01FEFF";
      color = "1.2em"
    } else if (counter % 3  === 1){
      //color = "#E90DED";
      color = "0.8em"
    } else if (counter % 3  === 2){
      //color = "#FFFD03";
      color = "1em"
    }
    var newText = "<span style='font-size: " + color + "'>" + textArray[x] + "</span>"
    colorArray.push(newText);
    counter++;
  }
  document.getElementById("weird").innerHTML = colorArray.join('');
  colorArray = [];
},700);
