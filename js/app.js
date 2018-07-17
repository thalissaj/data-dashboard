var entranceDiv = document.getElementById('entrence');
function toggleSidebar() {
  document.getElementById('sideBar').classList.toggle("active");
};
var userButton = document.getElementsByClassName('entrence-btn')[0];
  userButton.addEventListener("click", function (){
var userInput = document.getElementById('name');
var nameUser = document.getElementById('user');
  nameUser.textContent ='Olá, ' + userInput.value + '.';
  clearDiv();
var indicate = document.createElement("img");
  indicate.setAttribute("src", "assets/images/sets.png");
var sedesNavigator = document.createElement("p");
  sedesNavigator.innerHTML = "Use o menu para navegar pelas turmas";
  entranceDiv.appendChild(indicate);
  entranceDiv.appendChild(sedesNavigator);
  entranceDiv.className = "navigator";
})
function clearDiv() {
  var clearEntrence = document.getElementById('entrence');
    clearEntrence.innerHTML='';
}
function removeYellow() {
  document.querySelector("body").classList.remove('yellow');
}
function aqp2016_2() {
  clearDiv();
  removeYellow();
  var sede = 'AQP';
  var turma = '2016-2';
  callGrafics(sede, turma);
}
function aqp2017_1() {
  clearDiv();
  removeYellow();
  var sede = 'AQP';
  var turma = '2017-1';
  callGrafics(sede, turma);
}
function cdmx2017_1() {
  clearDiv();
  removeYellow();
  var sede = 'CDMX';
  var turma = '2017-1';
  callGrafics(sede, turma);
}
function cdmx2017_2() {
  clearDiv();
  removeYellow();
  var sede = 'CDMX';
  var turma = '2017-2';
  callGrafics(sede, turma);
}
function lim2016_2() {
clearDiv();
removeYellow();
var sede = 'LIM';
var turma = '2016-2';
callGrafics(sede, turma);
}
function lim2016_2() {
  clearDiv();
  removeYellow();
  var sede = 'LIM';
  var turma = '2016-2';
  callGrafics(sede, turma);
}
function lim2017_1() {
  clearDiv();
  removeYellow();
  var sede = 'LIM';
  var turma = '2017-1';
  callGrafics(sede, turma);
}
function lim2017_2() {
  clearDiv();
  removeYellow();
  var sede = 'LIM';
  var turma = '2017-2';
  callGrafics(sede, turma);
}
function scl2016_2() {
  clearDiv();
  removeYellow();
  var sede = 'SCL';
  var turma = '2016-2';
  callGrafics(sede, turma);
}
function scl2017_1() {
  clearDiv();
  removeYellow();
  var sede = 'SCL';
  var turma = '2017-1';
  callGrafics(sede, turma);
}
function scl2017_2() {
  clearDiv();
  removeYellow();
  var sede = 'SCL';
  var turma = '2017-2';
  callGrafics(sede, turma);
}
function callGrafics(sede, turma) {
  studentsTotal(sede, turma);
  hseAndTech(sede, turma);
  npsSprints(sede, turma);
  tech(sede, turma);
  hse(sede, turma);
  satisfaction(sede, turma);
}
//primeiro grafico
function studentsTotal (sede, turma) {
  var totalStudents = data[sede][turma].students.length;
  var ativas = 0;
  var inativas = 0;
  for (var i = 0; i < totalStudents; i++){
    if(data[sede][turma]['students'][i]['active'] === false){
      inativas += 1;
    }else{
      ativas += 1;
    }
}
var insertGrafic = document.createElement('div');
  insertGrafic.setAttribute("id", "donutchart");
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Permanencia', 'Status'],
    ['Ativas',     ativas],
    ['Inativas',      inativas],
]);

var options = {
  title: 'Total de Alunas: ' + totalStudents,
  pieHole: 0.4,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
  entranceDiv.appendChild(insertGrafic);
}
//segundo gráfico
function hseAndTech (sede, turma) {
  var mediaTech = 0;
  var mediaHse = 0;
  var studentsAtingiu = [];
  var totalStudents = data[sede][turma].students.length;
  for (student in data[sede][turma]['students']){
    for(scores in data[sede][turma]['students'][student]['sprints']){
      mediaTech += data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
      mediaHse += data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
    }
    mediaTech = mediaTech / data[sede][turma]['students'][student]['sprints'].length;
    mediaHse = mediaHse / data[sede][turma]['students'][student]['sprints'].length;
    if (mediaTech >= 1260 && mediaHse >= 840){
      studentsAtingiu.push(data[sede][turma]['students'][student].name);
    }
    mediaTech = 0;
    mediaHse = 0;
  }
  var atingiu = studentsAtingiu.length;
  var nopAtingiu = totalStudents - atingiu;
  var insertGraficTechAndHse = document.createElement('div');
  insertGraficTechAndHse.setAttribute("id", "donutchart-hse-tech");
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Alunas', 'Pontuação'],
  ['Atingiu',     atingiu],
  ['Não Atingiu',      nopAtingiu]
  ]);
var options = {
  title: 'Estudantes que atingiram 70%, em media, em Tech e HSE',
  pieHole: 0.4,
  };
var chart = new google.visualization.PieChart(document.getElementById('donutchart-hse-tech'));
  chart.draw(data, options);
  }
  entranceDiv.appendChild(insertGraficTechAndHse);
}
//terceiro gráfico
function npsSprints (sede, turma) {
}
//quarto gráfico
function tech (sede, turma) {
  var studentsAtingiu = [];
  var techSprint1 = 0;
  var techSprint2 = 0;
  var techSprint3 = 0;
  var techSprint4 = 0;
  var studentsSprint1 = [];
  var studentsSprint2 = [];
  var studentsSprint3 = [];
  var studentsSprint4 = [];
  var totalSprints;
  var totalStudents = data[sede][turma].students.length;
  for (student in data[sede][turma]['students']){
    for(scores in data[sede][turma]['students'][student]['sprints']){
      totalSprints = data[sede][turma]['students'][student]['sprints'].length;
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 1){
        techSprint1 = data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
        if(techSprint1 >= 1260){
          studentsSprint1.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 2){
        techSprint2 = data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
        if(techSprint2 >= 1260){
          studentsSprint2.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 3){
        techSprint3 = data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
        if(techSprint3 >= 1260){
          studentsSprint3.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 4){
        techSprint4 = data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
        if(techSprint4 >= 1260){
          studentsSprint4.push(data[sede][turma]['students'][student].name);
        }
      }
    }
  }
//gráfico
var totalAtingiu1 = studentsSprint1.length;
var totalAtingiu2 = studentsSprint2.length;
var totalAtingiu3 = studentsSprint3.length;
var totalAtingiu4 = studentsSprint4.length;
var nTotalAtingiu1 = totalStudents - studentsSprint1.length;
var nTotalAtingiu2 = totalStudents - studentsSprint2.length;
var nTotalAtingiu3 = totalStudents - studentsSprint3.length;
var nTotalAtingiu4 = totalStudents - studentsSprint4.length;
var insertGraficTech = document.createElement('div');
insertGraficTech.setAttribute("id", "chart_tech");
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  if(totalSprints === 4){
    var data = google.visualization.arrayToDataTable([
      ['Sprints', 'Atingiram', 'Não atigiram'],
      ['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
      ['Sprint 2',  totalAtingiu2,      nTotalAtingiu2],
      ['Sprint 3',  totalAtingiu3,      nTotalAtingiu3],
      ['Sprint 4',  totalAtingiu4,      nTotalAtingiu4]]);
    } else if (totalSprints === 3) {
      var data = google.visualization.arrayToDataTable([
        ['Sprints', 'Atingiram', 'Não atigiram'],
        ['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
        ['Sprint 2',  totalAtingiu2,      nTotalAtingiu2],
        ['Sprint 3',  totalAtingiu3,      nTotalAtingiu3]]);
      } else if (totalSprints === 2) {
        var data = google.visualization.arrayToDataTable([
          ['Sprints', 'Atingiram', 'Não atigiram'],
          ['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
          ['Sprint 2',  totalAtingiu2,      nTotalAtingiu2]]);
        };
        var options = {
          title: 'Estudantes que atingiram a meta em Tech, por sprint',
          hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0,}
        };
        var chart = new google.visualization.AreaChart(document.getElementById('chart_tech'));
        chart.draw(data, options);
      }
      entranceDiv.appendChild(insertGraficTech);
}
//quinto gráfico
function hse (sede, turma) {
  var studentsAtingiu = [];
  var hseSprint1 = 0;
  var hseSprint2 = 0;
  var hseSprint3 = 0;
  var hseSprint4 = 0;
  var studentsSprint1 = [];
  var studentsSprint2 = [];
  var studentsSprint3 = [];
  var studentsSprint4 = [];
  var totalSprints;
  var totalStudents = data[sede][turma].students.length;
  for (student in data[sede][turma]['students']){
    for(scores in data[sede][turma]['students'][student]['sprints']){
      totalSprints = data[sede][turma]['students'][student]['sprints'].length;
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 1){
        hseSprint1 = data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
        if(hseSprint1 >= 840){
          studentsSprint1.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 2){
        hseSprint2 = data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
        if(hseSprint2 >= 840){
          studentsSprint2.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 3){
        hseSprint3 = data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
        if(hseSprint3 >= 840){
          studentsSprint3.push(data[sede][turma]['students'][student].name);
        }
      }
      if (data[sede][turma]['students'][student]['sprints'][scores].number === 4){
        hseSprint4 = data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
        if(hseSprint4 >= 840){
          studentsSprint4.push(data[sede][turma]['students'][student].name);
        }
      }
    }
  }
//gráfico
var totalAtingiu1 = studentsSprint1.length;
var totalAtingiu2 = studentsSprint2.length;
var totalAtingiu3 = studentsSprint3.length;
var totalAtingiu4 = studentsSprint4.length;
var nTotalAtingiu1 = totalStudents - studentsSprint1.length;
var nTotalAtingiu2 = totalStudents - studentsSprint2.length;
var nTotalAtingiu3 = totalStudents - studentsSprint3.length;
var nTotalAtingiu4 = totalStudents - studentsSprint4.length;
var insertGraficHse = document.createElement('div');
insertGraficHse.setAttribute("id", "chart_hse");
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
if(totalSprints === 4){
var data = google.visualization.arrayToDataTable([
['Sprints', 'Atingiram', 'Não atigiram'],
['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
['Sprint 2',  totalAtingiu2,      nTotalAtingiu2],
['Sprint 3',  totalAtingiu3,      nTotalAtingiu3],
['Sprint 4',  totalAtingiu4,      nTotalAtingiu4]]);
} else if (totalSprints === 3) {
var data = google.visualization.arrayToDataTable([
['Sprints', 'Atingiram', 'Não atigiram'],
['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
['Sprint 2',  totalAtingiu2,      nTotalAtingiu2],
['Sprint 3',  totalAtingiu3,      nTotalAtingiu3]]);
} else if (totalSprints === 2) {
var data = google.visualization.arrayToDataTable([
['Sprints', 'Atingiram', 'Não atigiram'],
['Sprint 1',  totalAtingiu1,      nTotalAtingiu1],
['Sprint 2',  totalAtingiu2,      nTotalAtingiu2]]);
};
var options = {
title: 'Estudantes que atingiram a meta em Hse, por sprint',
hAxis: {title: 'Sprints',  titleTextStyle: {color: '#333'}},
vAxis: {minValue: 0,}
};

var chart = new google.visualization.AreaChart(document.getElementById('chart_hse'));
chart.draw(data, options);
}
entranceDiv.appendChild(insertGraficHse);
}
//sexto gráfico
function satisfaction (sede, turma){

}

var entranceDiv = document.getElementById('entrence');
function toggleSidebar() {
document.getElementById('sideBar').classList.toggle("active");
};
var userButton = document.getElementsByClassName('entrence-btn')[0];
userButton.addEventListener("click", function (){
var userInput = document.getElementById('name');
var nameUser = document.getElementById('user');
nameUser.textContent ='Olá, ' + userInput.value + '.';
clearDiv();
var indicate = document.createElement("img");
indicate.setAttribute("src", "assets/images/sets.png");
var sedesNavigator = document.createElement("p");
sedesNavigator.innerHTML = "Use o menu para navegar pelas turmas";
entranceDiv.appendChild(indicate);
entranceDiv.appendChild(sedesNavigator);
entranceDiv.className = "navigator";
})
function clearDiv() {
var clearEntrence = document.getElementById('entrence');
clearEntrence.innerHTML='';
}
function removeYellow() {
document.querySelector("body").classList.remove('yellow');
}
function aqp2016_2() {
clearDiv();
removeYellow();
var sede = 'AQP';
var turma = '2016-2';
callGrafics(sede, turma);
}
function aqp2017_1() {
clearDiv();
removeYellow();
var sede = 'AQP';
var turma = '2017-1';
callGrafics(sede, turma);
}
function cdmx2017_1() {
clearDiv();
removeYellow();
var sede = 'CDMX';
var turma = '2017-1';
callGrafics(sede, turma);
}
function cdmx2017_2() {
clearDiv();
removeYellow();
var sede = 'CDMX';
var turma = '2017-2';
callGrafics(sede, turma);
}
function lim2016_2() {
clearDiv();
removeYellow();
var sede = 'LIM';
var turma = '2016-2';
callGrafics(sede, turma);
}
function lim2016_2() {
clearDiv();
removeYellow();
var sede = 'LIM';
var turma = '2016-2';
callGrafics(sede, turma);
}
function lim2017_1() {
clearDiv();
removeYellow();
var sede = 'LIM';
var turma = '2017-1';
callGrafics(sede, turma);
}
function lim2017_2() {
clearDiv();
removeYellow();
var sede = 'LIM';
var turma = '2017-2';
callGrafics(sede, turma);
}
function scl2016_2() {
clearDiv();
removeYellow();
var sede = 'SCL';
var turma = '2016-2';
callGrafics(sede, turma);
}
function scl2017_1() {
clearDiv();
removeYellow();
var sede = 'SCL';
var turma = '2017-1';
callGrafics(sede, turma);
}
function scl2017_2() {
clearDiv();
removeYellow();
var sede = 'SCL';
var turma = '2017-2';
callGrafics(sede, turma);
}
function callGrafics(sede, turma) {
studentsTotal(sede, turma);
hseAndTech(sede, turma);
npsSprints(sede, turma);
tech(sede, turma);
hse(sede, turma);
// satisfaction(sede, turma);
}
//primeiro grafico
function studentsTotal (sede, turma) {
var totalStudents = data[sede][turma].students.length;
var ativas = 0;
var inativas = 0;
for (var i = 0; i < totalStudents; i++){
if(data[sede][turma]['students'][i]['active'] === false){
inativas += 1;
}else{
ativas += 1;
}
}
var insertGrafic = document.createElement('div');
insertGrafic.setAttribute("id", "donutchart");
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Permanencia', 'Status'],
['Ativas',     ativas],
['Inativas',      inativas],
]);
var options = {
title: 'Total de Alunas: ' + totalStudents,
pieHole: 0.4,
};
var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}
entranceDiv.appendChild(insertGrafic);
}
//segundo gráfico
function hseAndTech (sede, turma) {
var mediaTech = 0;
var mediaHse = 0;
var studentsAtingiu = [];
var totalStudents = data[sede][turma].students.length;
var nSprints = 0;
for (student in data[sede][turma]['students']){
for(scores in data[sede][turma]['students'][student]['sprints']){
mediaTech += data[sede][turma]['students'][student]['sprints'][scores]['score']['tech'];
mediaHse += data[sede][turma]['students'][student]['sprints'][scores]['score']['hse'];
}
mediaTech = mediaTech / data[sede][turma]['students'][student]['sprints'].length;
mediaHse = mediaHse / data[sede][turma]['students'][student]['sprints'].length;
if (mediaTech >= 1260 && mediaHse >= 840){
studentsAtingiu.push(data[sede][turma]['students'][student].name);
}
mediaTech = 0;
mediaHse = 0;
}
var atingiu = studentsAtingiu.length;
var nopAtingiu = totalStudents - atingiu;
var insertGraficTechAndHse = document.createElement('div');
insertGraficTechAndHse.setAttribute("id", "donutchart-hse-tech");
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Alunas', 'Pontuação'],
['Atingiu',     atingiu],
['Não Atingiu',      nopAtingiu]
]);
var options = {
title: 'Estudantes que atingiram 70%, em média, em Tech e HSE',
pieHole: 0.4,
};
var chart = new google.visualization.PieChart(document.getElementById('donutchart-hse-tech'));
chart.draw(data, options);
}
entranceDiv.appendChild(insertGraficTechAndHse);
}
//terceiro gráfico
function npsSprints (sede, turma) {
var ratings = data[sede][turma].ratings;

var npsCount = 0;
var promoters = 0;
var passive = 0;
var detractors = 0
for (var i = 0; i < ratings.length; i++) {
totalyNpc = ratings[i]['nps']['promoters'] - ratings[i]['nps']['detractors'];  //[npc] = [promoters] - [detractors];
npsCount = npsCount + totalyNpc;
promoters = promoters + ratings[i]['nps']['promoters'];
passive = passive + ratings[i]['nps']['passive'];
detractors = detractors + ratings[i]['nps']['detractors'];
var resultTotal = parseInt(npsCount/ratings.length);

/* Cálculo médio NPS */
var resultPromoters = parseInt(promoters/ratings.length);
var resultPassive = parseInt(passive/ratings.length);
var resultDetractors = parseInt(detractors/ratings.length);
var totalNps = document.getElementById("totalNps");
var cumple = 0;
var supera = 0;
var noCumple = 0;
cumple = cumple + ratings[i]['student']['cumple'];
supera = supera + ratings[i]['student']['supera'];
noCumple = noCumple +  ratings[i]['student']['no-cumple'];
var mentores = 0;
var jedi = 0;
mentores = mentores + ratings[i]['teacher'];
jedi = jedi + ratings[i]['jedi'];
}
var npsSprints = document.createElement('div');
npsSprints.setAttribute("id", "donutchart-nps");
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['NPS', 'Percentual'],
['Promoters', promoters],
['Passive', passive],
['Detractors',detractors]
]);
var options = {
title: 'Net Promoter Score (NPS): ' + totalyNpc +' média dos sprints.' ,
pieHole: 0.4,
};
var chart = new google.visualization.PieChart(document.getElementById("donutchart-nps"));
chart.draw(data, options);
}
entranceDiv.appendChild(npsSprints);
var allScoreTeam = document.createElement('div');
allScoreTeam.setAttribute("id", "teamBox");
allScoreTeam.innerHTML = 'Notas média geral dos Jedis: '+ jedi +'<br>' + 'Notas média geral dos Mentores: ' + mentores
entranceDiv.appendChild(allScoreTeam);
var insertSatisfaction = document.createElement('div');
insertSatisfaction.setAttribute("id", "donutchart-satisfaction");
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Permanencia', 'Status'],
['Cumpre', cumple],
['Não Cumpre', noCumple],
['Supera', supera]
]);
var options = {
title: 'Satisfaction',
pieHole: 0.4,
};
var chart = new google.visualization.PieChart(document.getElementById('donutchart-satisfaction'));
chart.draw(data, options);
}
entranceDiv.appendChild(insertSatisfaction);
}
