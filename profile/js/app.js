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
fetch(url_json).then(response => response.json()).then(data => {
  var val=Object.values(data);
  for(i=0;i<val.length;i++){reg=val[i];
    if(reg.profile==perfil){console.log(reg)
      document.getElementById('nom').innerHTML=reg.ID;
      document.getElementById('cov').innerHTML=reg.cover;
      document.getElementById('pro').innerHTML=reg.profile;
      document.getElementById('nom').innerHTML=reg.nombre;
      document.getElementById('emp').innerHTML=reg.empresa;
      document.getElementById('pue').innerHTML=reg.puesto;
      document.getElementById('ema').innerHTML=reg.email;
    }
  }
  /*
  function parentId(ID) {
    return function(item) {
      return item.profile === ID
    }
  }
  var regis=val.filter(parentId(perfil));
  console.log(regis[0]);*/
});
/*
var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
console.log(url_json);
fetch(url_json).then(response => response.json()).then(data => {console.log(data.cell);});
*/