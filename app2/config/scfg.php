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

date_default_timezone_set("America/Mexico_City");

$dominio    = $protocol.$host.'/';          //Dominio Estructurado
$dominio1   = $protocol.$host;              //Dominio Simple
$url        = $dominio1.$pag_self;			//Se obtiene la url de la pagina.
$URL        = $dominio1.$pag_url;			//Se obtiene la url completa, incluyendo variables.

$page = (isset($_GET['page']))?$_GET['page']:'index';
$path_root=($host=='localhost')?'MisSitios/orangejs/app/':'app/';
$tema='dark-app';
$path_dashboard='dashboard/'.$tema.'/';
$page_url=$dominio.$path_root;
$ruta_modulo='./'.$path_dashboard.'pages/'.$page.'.php';

/**APP***/
//include 'lib.php';
?>