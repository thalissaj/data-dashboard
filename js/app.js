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
  for (i in data[sede][turma]['students']){
    if(data[sede][turma]['students'] === true){
      ativas =+ 1;
    }else{
      inativas =+ 1;
    }
  }

}
//segundo gráfico
function hseAndTech (sede, turma) {

}
//terceiro gráfico
function npsSprints (sede, turma) {

}
//quarto gráfico
function tech (sede, turma) {

}
//quinto gráfico
function hse (sede, turma) {

}
//sexto gráfico
function satisfaction (sede, turma){

}






// for(sede in data) {
//   console.log(sede);
//   for(turma in data[sede]){
//     console.log(turma)
//     console.log(data[sede][turma].students)
//     for (student of data[sede][turma].students){
//       console.log(student.name)
//     }
//   }
// }
<<<<<<< HEAD
=======

>>>>>>> 1f1f913e5f127c7d008f0e1e3de4a071054559e1
