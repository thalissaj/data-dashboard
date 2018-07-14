function toggleSidebar() {
  document.getElementById('sideBar').classList.toggle("active");
};

function clearDiv() {
  var clearEntrence = document.getElementById('entrence');
  clearEntrence.innerHTML='';
}

function aqp2016_2() {
  clearDiv();
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
