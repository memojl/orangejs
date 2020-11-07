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
let perfil = filename();
console.log(perfil);

//function profileId(){
 db.ref("vcard_vcard").on("child_added", function (v) {
   var vcard = v.val();
   if(vcard.profile==perfil){
      console.log(vcard);
      return vcard;
   }
 });


//var dataPro = profileId;
console.log(vcard);
 
