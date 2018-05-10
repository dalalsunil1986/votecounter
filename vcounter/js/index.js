var button1 = document.getElementById('btn-paslon1'), count1 = 0;
var counter1 = document.getElementById('paslon1');
var button2 = document.getElementById('btn-paslon2'), count2 = 0;
var counter2 = document.getElementById('paslon2');
var button3 = document.getElementById('btn-paslon3'), count3 = 0;
var counter3 = document.getElementById('paslon3');
var percentage1=0,percentage2=0,percentage3=0;

//InitDisplay
initFirstState();

button1.onclick = function(){
  count1 +=1;
  counter1.innerHTML = count1;
  updateDisplay();
};

button2.onclick = function(){
  count2 +=1;
  counter2.innerHTML = count2;
  updateDisplay();
};

button3.onclick = function(){
  count3 +=1;
  counter3.innerHTML = count3;
  updateDisplay();
};


function updateDisplay(){
  percentage1 = (100/(count1+count2+count3))*count1;
  percentage2 = (100/(count1+count2+count3))*count2;
  percentage3 = (100/(count1+count2+count3))*count3;
  document.getElementById('progressbar1').style.width=percentage1+'%';
  document.getElementById('progressbar2').style.width=percentage2+'%';
  document.getElementById('progressbar3').style.width=percentage3+'%';
  document.getElementById('percentage1').innerHTML=Math.round(percentage1)+'%';
  document.getElementById('percentage2').innerHTML=Math.round(percentage2)+'%';
  document.getElementById('percentage3').innerHTML=Math.round(percentage3)+'%';
}

function initFirstState(){
  var initState = 100/3;
  percentage1 = initState;
  percentage2 = initState;
  percentage3 = initState;

  document.getElementById('progressbar1').style.width=percentage1+'%';
  document.getElementById('progressbar2').style.width=percentage2+'%';
  document.getElementById('progressbar3').style.width=percentage3+'%';
  document.getElementById('percentage1').innerHTML=Math.round(percentage1)+'%';
  document.getElementById('percentage2').innerHTML=Math.round(percentage2)+'%';
  document.getElementById('percentage3').innerHTML=Math.round(percentage3)+'%';
}
