var newCommandForm = document.forms.newTaskF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //Vérification de la récupération
    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.categorie.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem)

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
}

function loadTasks(tasks) {
  const newItem = document.createElement('tr')
  const taskTd = document.createElement('td')
  const dateTd = document.createElement('td')
  const categorieTd = document.createElement('td')
  const table = document.querySelector('.datatable tbody')
  taskTd.textContent = tasks.task;
  dateTd.textContent = tasks.date;
  categorieTd.textContent = tasks.category;
  newItem.append(taskTd, dateTd, categorieTd)
  table.appendChild(newItem)
}

function getTasks() {
  var newLine = [];
  var row = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  for(var i = 0; i<row.length; i++) {
    const addTask = new Task(row[i].getElementsByTagName('td')[0].innerHTML, row[i].getElementsByTagName('td')[1].innerHTML, row[i].getElementsByTagName('td')[2].innerHTML)
    newLine.push(addTask);
  }
  const jsonObj = JSON.stringify(newLine);
  console.log(jsonObj);
}

class Task {
  constructor(task, date, category) {
    this.task = task;
    this.date = date;
    this.category = category;
  }
}


    let page = 0;
    const tasksCount = 200;
    const itemsPerPage = 10;

    function getTasks(page) {
        const start = page * itemsPerPage;
        const limit = itemsPerPage;
        fetch(
            "http://jsonplaceholder.typicode.com/todos?_start=" +
            start +
            "&_limit=" +
            limit
        )
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
            createTask(data[i]);
        }
        });
    }


function createTask(element){
    var tache = document.forms.nouvelleTache;
    var nouvelleTache = document.createElement('tr')
    var idTache = document.createElement('td')
    var etatTache = document.createElement('td')
    var TacheComplete = document.createElement('td')

    if(element.completed == true){
        nouvelleTache.style = "background-color:green;"
    }

    if(element.completed == false){
        nouvelleTache.style = "background-color:red;"
    }

    idTache.textContent = element.id
    idTache.className = "idTache"
    etatTache.textContent = element.title
    etatTache.className = "etatTache"
    TacheComplete.textContent = element.completed
    TacheComplete.className = "TacheComplete"

    nouvelleTache.append(idTache, etatTache, TacheComplete)

    const table = document.querySelector('.datatable tbody')
    table.appendChild(nouvelleTache)
}