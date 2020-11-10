// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyDj81oaNKnG79MlpRY83MOK0QksHyqx7qc",
   authDomain: "crud-ce022.firebaseapp.com",
   databaseURL: "https://crud-ce022.firebaseio.com",
   projectId: "crud-ce022",
   storageBucket: "crud-ce022.appspot.com",
   messagingSenderId: "419867682880",
   appId: "1:419867682880:web:408d053b7d2425ec6017a5"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.database();
 const auth = firebase.auth();
 const fs = firebase.firestore();
 
function filename(){
   var rutaAbsoluta = self.location.href;
   var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
   var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
   return rutaRelativa;
}

var perfil = filename();
console.log(perfil);
var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/'+perfil+'.json';
console.log(url_json);


const vcardTable = db.ref().child("vcard_vcard");
const vcardTable1 = db.ref("vcard_vcard");

function perfilx(){
 vcardTable.orderByChild("profile").equalTo(perfil).on('child_added',function(datos){
   var vcard=datos.val();
   document.getElementById('pro').value=JSON.stringify(vcard);
   console.log(vcard);
 });
}

function perfilv(){
 vcardTable1.on("child_added", function (datos) {
   var vcard = datos.val();
   if(vcard.profile==perfil){
      document.getElementById('pro').value=JSON.stringify(vcard);
      //console.log(vcard);
   }
 });
}

function leerIn(){
  var data=document.getElementById('pro').value;
  console.log(data);
  return data;
}
//setTimeout(leerIn, 5000);
var data=document.getElementById('pro').value;
console.log(data);
//perfilx();

var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
console.log(url_json);
//function getJSON(url) { return get(url).then(JSON.parse);}
//var myVar=getJSON(url_json);
// Se hace el fetch a tu url
//let myVar=fetch(url_json).then(function(response) {return response.json();});
//let myVar=fetch(url_json).then(response => response.json()).then(data => {return data;});
//let myVar = async()=>{await fetch(url_json).then(response => response.json()).then(data => {return data;})};
//let myVar={};
fetch(url_json).then(response => response.json()).then(d => {myVar = d;});

console.log(myVar);
//console.log(Object.PromiseResult(myVar));

//let miVar = {};
/* 
const getJson = async () => {
  try{
    let res = await fetch(url_json, {method:"GET"})
    miVar = await res.json()
    //console.log(miVar);
    return miVar;
  }catch(ex){
    console.log(ex)
  }
} 

var dato = getJson();
console.log(dato);
*/
//console.log(miVar.nombre);
/*
json_data = {"name":miVar.nombre,"numbers_mobile":miVar.cell,"email":miVar.email}
console.log(json_data.name);
*/