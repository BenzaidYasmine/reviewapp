//var header = document.querySelector("header");
var section = document.querySelector("section");

call();

function call() {
  var requestURL =
    "https://benzaidyasmine.github.io/reviewapp/data.json";

  // créer une requête
  var proxyURL = 'https://cors-anywhere.herokuapp.com';
  var request = new XMLHttpRequest();

  request.open("GET", proxyURL + '/' + requestURL, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('Access-Control-Allow-Origin', '*');

  //spécifier qu'on attends une reponse au format json
  request.responseType = "json";

  request.send();

  request.onload = function () {
    let reponseObject = request.response;
    //Call pour afficher le tableau
    showHeroes(reponseObject);

  };
}


function showHeroes(jsonObject) {

  //alert("tableau :"+jsonObject[0].name);
  // console.log("tableau :" + jsonObject); // Hello, world!


  var tbl = document.getElementsByTagName('table')[0];

  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < jsonObject.length; i++) {
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    // tdName.style.border = '1px solid black text-align: center';
    tdName.appendChild(document.createTextNode(jsonObject[i].name));

    tr.appendChild(tdName);

    var tdItem = document.createElement('td');
    tdItem.appendChild(document.createTextNode(jsonObject[i].item));
    tr.appendChild(tdItem)

    var tdReview = document.createElement('td');
    tdReview.appendChild(document.createTextNode(jsonObject[i].review));
    tr.appendChild(tdReview)

    var tdRating = document.createElement('td');
    tdRating.appendChild(document.createTextNode(jsonObject[i].rating));
    tr.appendChild(tdRating)

    var tdNRefound = document.createElement('td');
    tdNRefound.appendChild(document.createTextNode(jsonObject[i].refound));
    tr.appendChild(tdNRefound)

    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);



}
/**************************************************************************/

var table = document.getElementById("table"), rIndex;
console.log("rIndex "+rIndex);
for (var i = 0; i < table.rows.length; i++) {
  console.log("table.row[i] : "+table.rows[i]);
  table.rows[i].onclick = function () {
    rIndex = this.rowIndex;
   
    console.log('row index: '+rIndex);
    document.getElementById("name").value = this.cells[0].innerHTML;
    document.getElementById("article").value = this.cells[1].innerHTML;
    document.getElementById("review").value = this.cells[2].innerHTML;
    document.getElementById("rating").value = this.cells[3].innerHTML;
    document.getElementById("refound").value = this.cells[4].innerHTML;
  };
}




function editRow() {
  table.rows[rIndex].cells[0].innerHTML = document.getElementById("name").value;
  table.rows[rIndex].cells[1].innerHTML = document.getElementById("article").value;
  table.rows[rIndex].cells[2].innerHTML = document.getElementById("review").value;
  table.rows[rIndex].cells[3].innerHTML = document.getElementById("rating").value;
  table.rows[rIndex].cells[4].innerHTML = document.getElementById("refound").value;
}




// Data Update Table Here
function editTableDisplay() {
  document.querySelector('.editTable').setAttribute('style', 'display: block;')
}
















function style() {
  const buttonA = document.querySelector("#update");
  const headingA = document.querySelector("#name");

  buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
  }
}