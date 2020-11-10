/* VARIABLES CONSTANTES*/
console.log('/* VARIABLES CONSTANTES*/');
var loc = window.location;
console.log(loc);
var fecha = new Date();
console.log(fecha);
const protocol = window.location.protocol;
console.log('protocol='+protocol);
const host = window.location.host;
console.log('host='+host);
const dominio = window.location.origin+'/';
console.log('dominio='+dominio);
const dominio1 = window.location.origin;
console.log('dominio1='+dominio1);
const path_url = window.location.pathname;
console.log('path_url='+path_url);
const URL = window.location.href;
console.log('URL='+URL);
/* VARIABLES */
console.log('/* VARIABLES */');
var path_url1 = path_url.replace("/", "");
//var path_root=(host=='localhost')?path_url1:'';
var path_root=(host=='localhost')?'MisSitios/orangejs/':'';
console.log('path_root='+path_root);
var page_url = dominio+path_root;
console.log('page_url='+page_url);
var perfil = filename();
console.log(perfil);
var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard.json';
console.log(url_json);
fetch(url_json).then(response => response.json()).then(data => {
  var val=Object.values(data);
  for(i=0;i<val.length;i++){reg=val[i];
    if(reg.profile==perfil){console.log(reg)
      document.getElementById('idp').innerHTML=reg.ID;
      document.getElementById('cov').innerHTML='<div class="img" ng-style="{&#39;background&#39;:view.avatar?&#39;url(&#39;+view.avatar+&#39;)&#39;:&#39;none&#39;}" style="background: url(../app/assets/img/photos/'+reg.cover+');"></div>';
      document.getElementById('prof').innerHTML=reg.profile;
      document.getElementById('nom').innerHTML=reg.nombre;
      document.getElementById('btn-cell').innerHTML='<a href="tel:'+reg.cell+'"><i class="icon-phone dynamicTextColor"></i><small class="dynamicTextColor">Llamar</small></a>';
      document.getElementById('btn-email').innerHTML='<a href="mailto:'+reg.email+'?subject=Desde%20Mi%20Tarjeta&body=" target="_newEmail""><i class="icon-send dynamicTextColor"></i><small class="dynamicTextColor">Email</small></a>';

      document.getElementById('bio').innerHTML=reg.descripcion;
      document.getElementById('emp').innerHTML=reg.empresa;
      document.getElementById('pue').innerHTML=reg.puesto;
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

function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}
/*
var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
console.log(url_json);
fetch(url_json).then(response => response.json()).then(data => {console.log(data.cell);});
*/