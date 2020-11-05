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
const quest = window.location.search;
console.log('quest='+quest);
/* VARIABLES */
console.log('/* VARIABLES */');
var mod='';
var ext='';
var id='';
var path_url1 = path_url.replace("/", "");
//var path_root=(host=='localhost')?path_url1:'';
var path_root=(host=='localhost')?'MisSitios/orangejs/app/':'app/';
console.log('path_root='+path_root);
var tema = 'default';
console.log('tema='+tema);
var path_tema = 'temas/'+tema+'/';
console.log('path_tema='+path_tema);
var page_url = dominio+path_root;
console.log('page_url='+page_url);

var pag_name=filename();
console.log('pag_name='+pag_name);

var vars=getQueryVariable();
console.log(vars);
for(var i=0;i<vars.length;i++) {
    var GET = vars[i].split("=");
    if(GET[0]=='mod'){mod=GET[1];}
    if(GET[0]=='ext'){ext=GET[1];}
    if(GET[0]=='id'){id=GET[1];}
}
mod=(mod=='')?'Home':mod;
console.log('mod='+mod);
ext=(ext=='' || ext=='undefined' || ext==null)?'index':ext;
console.log('ext='+ext);
id=(id=='' || id=='undefined')?'':id;
console.log('id='+id);
var url_mod = page_url+'pages/'+mod+'/'+ext+'.html';
console.log(url_mod);

var bootstrap='<link href="'+page_url+'assets/bootstrap/b-4.5.0/css/bootstrap.css" rel="stylesheet" type="text/css" />';
if(bootstrap!=""){console.log('Bootstrap Activo');}else{console.log('Bootstrap No Activo');}

console.log('/*Funciones*/');
/*FUNCIONES*/

function menu(){
    var menu = `<a href="${page_url}">Inicio</a> | 
    <a href="${page_url}productos/">Productos</a> | 
    <a href="${page_url}blog/">Blog</a> | 
    <a href="${page_url}contacto/">Contacto</a>`
    $('#menu').html(menu);
}

function modulos(){
$(function() {
    $.ajax({
        url : url_mod,
        dataType: "html",
        success : function (data) {
          $("#app-modulo").html(data);
          console.log('La pagina Existe');
        },
        error : function(){
          $("#app-modulo").html('<div class="alert alert-danger">Error:404 La pagina No existe</div>');
          console.log('Error:404 La pagina No existe');
        }
        
    });
});
}

function getQueryVariable(){
    var res = path_url.replace('/'+path_root,"");//console.log(res);
    var val = res.split("/");//console.log(val);

    var query = window.location.search.substring(1);//console.log(query);
    var vars = query.split("&");

    if(query==""){vars=['mod='+val[0],'ext='+val[1],'id='+val[2]];}
    return vars;
}

function filename(){
    var rutaAbsoluta = self.location.href;
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;
}

function inicio(){
    console.log('Corriendo funcion inicio');
    getQueryVariable();
    menu();
    if(mod!='Home' && mod!='registro'){modulos();}
    //modulos();
    //form_tema();
}

onload=inicio();