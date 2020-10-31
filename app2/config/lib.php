<?php
/*---------------------------------------------------------------------------------------------------------------------*/
//Funcion para quitar los Notice (Avisos) de PHP7
error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT & ~E_WARNING & ~E_NOTICE);
/*---------------------------------------------------------------------------------------------------------------------*/
//--VARIABLES--//////////////////////////////////////////////////////////////////////////////
/*---------------------------------------------------------------------------------------------------------------------*/
/*VARIABLES DEL SISTEMA*/
$year		   = date('Y');
$month		= date('m');
$day		   = date('d');
$time		   = date('Gis');
$fecha		= date('Y-m-d');
$date		   = date("Y-m-d H:i:s");
$serv_proto = (isset($_SERVER['SERVER_PROTOCOL']))?$_SERVER['SERVER_PROTOCOL']:''; //Protocolo de Internet
//$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://'; //Protocolo de Internet
$protocol   = (isset($_SERVER['HTTPS']))?'https://':'http://';  //Protocolo de Internet
$host		   = $_SERVER['HTTP_HOST'];			//Nombre del dominio (dominio.com).
$ip_address = $_SERVER['REMOTE_ADDR'];			//Se obtiene la direccion ip del visitante de la pagina web.
$ip			= ($ip_address!='' && $ip_address!=NULL && $ip_address!='::1')?$ip_address:gethostbyname($host);
$IPv4 		= ip2long($ip);						//Direccion IPv4 
$pag_self 	= $_SERVER['PHP_SELF'];			    //Se obtiene la raiz y el nombre de la pagina.
$pag_url 	= $_SERVER['REQUEST_URI'];		    //Se obtiene la url de la pagina incluyendo variables.
$pag_name 	= basename($_SERVER['PHP_SELF']);   //Nombre de la pagina.
$refer 		= (isset($_SERVER['HTTP_REFERER']))?$_SERVER['HTTP_REFERER']:'';

/*VARIABLES GET*/
$mod 		   = (isset($_GET['mod']))?$_GET['mod']:'Home';
$ext 		   = (isset($_GET['ext']))?$_GET['ext']:'index';
switch(true){case($ext=='admin/index'):$ext2='admin';break;case($ext=='miembros/index'):$ext2='miembros';break;default:$ext2=$ext;break;}
$opc		   = (isset($_GET['opc']))?$_GET['opc']:'';
$action 	   = (isset($_GET['action']))?$_GET['action']:'';
$ctrl 		= (isset($_GET['ctrl']))?$_GET['ctrl']:'';
//$frm 		= (isset($_GET['frm']))?$_GET['frm']:'';
$form		   = (isset($_GET['form']))?$_GET['form']:'';//Variable para mostrar formulario crud
$id 		   = (isset($_GET['id']))?$_GET['id']:'';//Variable de id general
$idp 		   = (isset($_GET['id']))?$_GET['id']:'';//Variable de id producto
$idm		   = (isset($_GET['idm']))?$_GET['idm']:'';//Variable de id para mail en formularios de contacto
$idf 		   = (isset($_GET['idf']))?$_GET['idf']:'';//Variable bandera
$vhref 		= (isset($_GET['vhref']))?$_GET['vhref']:''; //Variable de seguimiento.

$dominio    = $protocol.$host.'/';          //Dominio Estructurado
$dominio1   = $protocol.$host;              //Dominio Simple
$url        = $dominio1.$pag_self;			//Se obtiene la url de la pagina.
$URL        = $dominio1.$pag_url;			//Se obtiene la url completa, incluyendo variables.

//$token = bin2hex(random_bytes(64));
$ver_file   = ($host=='localhost')?'ver='.$time:'ver='.$date;
$path_mod   = 'modulos/'.$mod.'/';
$path_jsonDB= 'bloques/webservices/rest/json/';
$path_jsonWS= 'bloques/ws/t/?t=';
date_default_timezone_set("America/Mexico_City");

$page = (isset($_GET['page']))?$_GET['page']:'index';
$path_root='MisSitios/orangejs/app/';
$tema='dark-app';
$tema_previo=(isset($_GET['tema_previo']))?$_GET['tema_previo']:'';
$tema = ($tema_previo!='' && $tema_previo!=NULL)?$tema_previo:$tema;
$tema = ($subtema!='' && $subtema!=NULL)? $tema.'/'.$subtema:$tema;
$path_dashboard='dashboard/'.$tema.'/';
$page_url=$dominio.$path_root;
$ruta_modulo='./'.$path_dashboard.'pages/'.$page.'.php';

