<?php 
function insertar_db($data,$ramat){
$url='https://crud-ce022.firebaseio.com/'.$ramat.'.json';
$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_POST,1);
curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));//curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-Type: text/plain'));
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$response=curl_exec($ch);//echo $response[0];
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
    if($http_code!=200){
        echo '<div>Error '.$http_code.': No se creo la rama: <b>'.$ramat.'</b> </div>';
    }else{
        echo '<div>OK '.$http_code.':Se inserto la Rama: <b>'.$ramat.'</b> con exito</div>';
    }
}

/*vcard_vcard */

$ramat='vcard_vcard';
$data='';
$data=array(
    '{"ID":"1","cell":"+54 9 3534 19 6770","cover":"sinfoto.png","descripcion":"","email":"rodrigo.foresta@thebillnex.com","empresa":"Billnex","f_create":"19/08/2020 10:38","f_update":"2020-08-30 12:13:28","fb":"","idemp":3,"ins":"https://www.instagram.com/billnex","lk":"#","logo":"","nombre":"Rodrigo Foresta","profile":"rforesta","puesto":"Manager","tel":"","tel_ofi":"","tw":"","uid":"llrPAIN2I6YnE5RE88dsHAPNejl1","user":"admin","vcard":"1","visible":"1","web":"https://www.thebillnex.com"}',
    '{"ID":"2","cell":"+1(754)210-0433","cover":"avatar-0.jpg","descripcion":"Administración de Marketing","email":"juan.parra@thebillnex.com","empresa":"Billnex","f_create":"22/08/2020 17:04","f_update":"2020-08-30 12:13:42","fb":"","idemp":3,"ins":"https://www.instagram.com/billnex","lk":"#","logo":"","nombre":"Juana Parra","profile":"jparra","puesto":"Manager","tel":"","tel_ofi":"","tw":"","uid":"2RPUIugJ8nfQzPWqJ8htxjSr2iH3","user":"admin","vcard":"1","visible":"1","web":"https://www.thebillnex.com"}',
    '{"ID":"4","cell":"442 347 0504","cover":"avatar-1.jpg","descripcion":"","email":"pbetancourt@capitalsft.com","empresa":"Capital","f_create":"22/08/2020 21:39","f_update":"2020-08-30 13:17:20","fb":"","idemp":2,"ins":"","lk":"https://www.linkedin.com/company/13990038/admin/","logo":"","nombre":"Ponciano Betancourt","profile":"pbetancourt","puesto":"Manager","tel":"","tel_ofi":"","tw":"","uid":"2RPUIugJ8nfQzPWqJ8htxjSr2iH3","user":"admin","vcard":"1","visible":"1","web":"https://www.capitalsft.com"}',
    '{"ID":"5","cell":"4426002842","cover":"darth.jpg","descripcion":"Desarrollo de Paginas Web y Marketing Digital","email":"multiportal@outlook.com","empresa":"Multiportal","f_create":"2020-08-30 11:05:44","f_update":"2020-08-30 13:17:34","fb":"https://facebook.com/","idemp":1,"ins":"https://www.instagram.com/","lk":"https://www.linkedin.com/","logo":"","nombre":"Guillermo Jimenez Lopez","profile":"memojl","puesto":"Programador","tel":"","tel_ofi":"","tw":"","uid":"JjxZi4gu7qOzbAU2hk7fChlm6PC2","user":"admin","vcard":"1","visible":"1","web":"http://multiportal.com.mx"}'
);
for($i=0;$i<count($data);$i++){insertar_db($data[$i],$ramat);}
echo '<div>Total de Registros: ['.$i.'] en '.$ramat.'</div>';

/*vcard_vcard_empresas */
$ramat='vcard_vcard_empresas';
$data='';
$data=array(
    '{"ID":"1","bg_color":"#000","cover":"multiportal.jpg","empresa":"Multiportal","uid":"JjxZi4gu7qOzbAU2hk7fChlm6PC2","f_create":"2020-09-05","f_update":"2020-09-05","visible":"1"}',
    '{"ID":"2","bg_color":"#333","cover":"capital.jpg","empresa":"Capital","uid":"2RPUIugJ8nfQzPWqJ8htxjSr2iH3","f_create":"2020-09-05","f_update":"2020-09-05","visible":"1"}',
    '{"ID":"3","bg_color":"#f8971d","cover":"billnex.jpg","empresa":"Billnex","uid":"2RPUIugJ8nfQzPWqJ8htxjSr2iH3","f_create":"2020-09-05","f_update":"2020-09-05","visible":"1"}'
);
for($i=0;$i<count($data);$i++){insertar_db($data[$i],$ramat);}
echo '<div>Total de Registros: ['.$i.'] en '.$ramat.'</div>';
