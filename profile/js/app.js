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
//const shareLink = document.querySelectorAll("#shareLink");

fetch(url_json).then(response => response.json()).then(data => {
  var val=Object.values(data);
  for(i=0;i<val.length;i++){reg=val[i];
    if(reg.profile==perfil){console.log(reg)
      document.getElementById('idp').innerHTML='<!-- '+reg.ID+' -->';
      document.getElementById('cov').innerHTML='<div class="img" ng-style="{&#39;background&#39;:view.avatar?&#39;url(&#39;+view.avatar+&#39;)&#39;:&#39;none&#39;}" style="background: url(../app/assets/img/photos/'+reg.cover+');"></div>';
      document.getElementById('prof').innerHTML='<!-- '+reg.profile+' -->';
      document.getElementById('nom').innerHTML=reg.nombre;
      document.getElementById('btn-cell').innerHTML='<a href="tel:'+reg.cell+'"><i class="icon-phone dynamicTextColor"></i><small class="dynamicTextColor">Llamar</small></a>';
      document.getElementById('btn-email').innerHTML='<a href="mailto:'+reg.email+'?subject=Desde%20Mi%20Tarjeta&body=" target="_newEmail""><i class="icon-send dynamicTextColor"></i><small class="dynamicTextColor">Email</small></a>';

      document.getElementById('bio').innerHTML=reg.descripcion;
      document.getElementById('pue').innerHTML=reg.puesto;
      document.getElementById('cell').innerHTML=reg.cell;
      document.getElementById('cell').href='tel:'+reg.cell;
      //document.getElementById('tel').innerHTML=reg.tel;
      document.getElementById('mailto').innerHTML=reg.email;
      document.getElementById('mailto').href='mailto:'+reg.email;
      document.getElementById('empresa').innerHTML=reg.empresa;
      document.getElementById('web').innerHTML=reg.web;
      document.getElementById('web').href=reg.web;

      document.getElementById('send-email').href=URL;
      document.getElementById('share-facebook').href=URL;
      //document.getElementById('share-twitter').href=URL;
      document.getElementById('share-whatsapp').href='whatsapp://send?text='+URL;
      document.getElementById('share-email').href='mailto:?body='+URL;
      document.getElementById('shortUrl').value=URL;

      if(reg.fb!=''){
        var fb=`
        <a href="`+reg.fb+`" target="_blank" class="channel-container ng-scope" id="channel-item-Facebook" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-facebook">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-facebook"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var fb='';}
      if(reg.tw!=''){
        var tw=`
        <a href="`+reg.tw+`" target="_blank" class="channel-container ng-scope" id="channel-item-Twitter" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-twitter">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-twitter"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var tw='';}
      if(reg.ins!=''){
        var ins=`
        <a href="`+reg.ins+`" target="_blank" class="channel-container ng-scope" id="channel-item-Instagram" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-instagram">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-instagram"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
           </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var ins='';}
      if(reg.lk!=''){
        var lk=`
        <a href="`+reg.lk+`" target="_blank" class="channel-container ng-scope" id="channel-item-LinkedIn" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-linkedin">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-linkedin"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var lk='';}
      document.getElementById('social-media').innerHTML=fb+tw+ins+lk;

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