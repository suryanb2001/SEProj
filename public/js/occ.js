const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const floor = document.getElementById('movie');
const time = document.getElementById('slot')
const day = document.getElementById('day')
const occ=[];




function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.occupied');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  var x = (selectedSeatsCount/24)*100;
rate.innerText = x.toPrecision(2)+" %";
}
function displayseats(){
  var d = day.value.toString();
  var f=floor.value.toString();
  var t=time.value.toString();
  return [d,f,t];
}


function disp(x,value){

for(var j=201;j<224;j++) {
  for(var i =0; i<x.length;i++){
    if (j == x[i]){
      var y= j%200;
var ele= document.getElementById(y);

ele.classList.add("occupied");

    }
  }
}
updateSelectedCount();

}




