var button1 = document.getElementById('btn-paslon1'), count1 = 0;
var counter1 = document.getElementById('paslon1');
var button2 = document.getElementById('btn-paslon2'), count2 = 0;
var counter2 = document.getElementById('paslon2');
var percentage1 = (100/(count1+count2))*count1;
var percentage2 = (100/(count1+count2))*count2;

button1.onclick = function(){
  count1 +=1;
  counter1.innerHTML = count1;
  percentage1 = (100/(count1+count2))*count1;
  percentage2 = (100/(count1+count2))*count2;
  document.getElementById('progressbar1').style.width=percentage1+'%';
  document.getElementById('progressbar2').style.width=percentage2+'%';
  document.getElementById('percentage1').innerHTML=Math.round(percentage1)+'%';
  document.getElementById('percentage2').innerHTML=Math.round(percentage2)+'%';
};

button2.onclick = function(){
  count2 +=1;
  counter2.innerHTML = count2;
  percentage1 = (100/(count1+count2))*count1;
  percentage2 = (100/(count1+count2))*count2;
  document.getElementById('progressbar1').style.width=percentage1+'%';
  document.getElementById('progressbar2').style.width=percentage2+'%';
  document.getElementById('percentage1').innerHTML=Math.round(percentage1)+'%';
  document.getElementById('percentage2').innerHTML=Math.round(percentage2)+'%';
};
