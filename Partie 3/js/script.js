var newCommandForm = document.forms.newTaskF;

class Tache{
  constructor(nom, date, categorie)
    {this.nom = nom
    this.date = date
  this.categorie = categorie}
}

var mesTaches = []

function ajouter(){
  var newtask = tacheSaisie()
  var a = true
  const table = document.querySelector('.datatable tbody')
  mesTaches.forEach( (e)=> {
    if (newtask.nom===e.nom & newtask.categorie===e.categorie ) 
      a = false
    })
  if (a){
    for(var i = 0; i<table.getElementsByTagName('tr').length; i++) {
      if(table.getElementsByTagName('tr')[i].getElementsByTagName('td')[0] === newtask.nom & table.getElementsByTagName('tr')[i].getElementsByTagName('td')[2] === newtask.categorie ) {
        a=false
    }}
      if (a){
      pushTache(newtask)
      const newItem = document.createElement('tr')
      const taskTd = document.createElement('td')
      const dateTd = document.createElement('td')
      const categorieTd = document.createElement('td')

      taskTd.textContent = newtask.nom
      dateTd.textContent = newtask.date
      categorieTd.textContent = newtask.categorie
      const table = document.querySelector('.datatable tbody')
      newItem.append(taskTd, dateTd, categorieTd)
      table.appendChild(newItem)}}
      console.log(mesTaches)}

function supprimer() {
  const tbody = document.querySelector('.datatable tbody' )
  while (tbody.firstChild) {
  tbody.removeChild(tbody.firstChild)
  }
}

function tacheSaisie(){
  var nouvelletache = new Tache(document.newTaskF.tache.value,document.newTaskF.date.value,document.newTaskF.categorie.value)
  return nouvelletache
}

function pushTache(unetache){
  mesTaches.push(unetache)
}

/*var maNouvelleTache = {
  nom : document.newTaskF.name.value,
  date : debut_fin_tache(),
  categorie : document.newTaskF.categorie.value
}*/

function debut_fin_tache() {
  var d = new Date();
  var date; 
  return  date= (d.getFullYear() + '-' + d.getMonth() + "-"+ d.getDay() + " " + d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds()) 
 }