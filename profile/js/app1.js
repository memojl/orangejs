function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

var perfil = filename();
console.log(perfil);
var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard.json';
console.log(url_json);
fetch(url_json).then(response => response.json()).then(data => {console.log(data);});

var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
console.log(url_json);
fetch(url_json).then(response => response.json()).then(data => {console.log(data.cell);});