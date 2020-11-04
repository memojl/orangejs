<?php 
function insertar_db($data,$ramat){
$url='https://crud-ce022.firebaseio.com/'.$ramat.'.json';
//$url='https://console.firebase.google.com/u/0/project/crud-ce022/firestore/data~2F'.$ramat;
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
    '{"ID":"1","cover":"foto.png","profile":"rforesta","logo":"","nombre":"Rodrigo Foresta","descripcion":"","puesto":"Manager","empresa":"Billnex","tel":"","tel_ofi":"","cell":"+54 9 3534 19 6770","email":"rodrigo.foresta@thebillnex.com","web":"https://www.thebillnex.com","fb":"","tw":"","lk":"#","ins":"https://www.instagram.com/billnex","f_create":"19/08/2020 10:38","f_update":"2020-08-30 12:13:28","vcard":"1","user":"admin","visible":"1"}',
    '{"ID":"2","cover":"foto.png","profile":"jparra","logo":"","nombre":"Juan Parra","descripcion":"","puesto":"Manager","empresa":"Billnex","tel":"","tel_ofi":"","cell":"+1(754)210-0433","email":"juan.parra@thebillnex.com","web":"https://www.thebillnex.com","fb":"","tw":"","lk":"#","ins":"https://www.instagram.com/billnex","f_create":"22/08/2020 17:04","f_update":"2020-08-30 12:13:42","vcard":"1","user":"admin","visible":"1"}',
    '{"ID":"4","cover":"foto_capital.png","profile":"pbetancourt","logo":"","nombre":"Ponciano Betancourt","descripcion":"","puesto":"Manager","empresa":"Capital","tel":"","tel_ofi":"","cell":"442 347 0504","email":"pbetancourt@capitalsft.com","web":"https://www.capitalsft.com","fb":"","tw":"","lk":"https://www.linkedin.com/company/13990038/admin/","ins":"","f_create":"22/08/2020 21:39","f_update":"2020-08-30 13:17:20","vcard":"1","user":"admin","visible":"1"}',
    '{"ID":"5","cover":"foto_capital.png","profile":"memojl","logo":"","nombre":"Guillermo Jimenez Lopez","descripcion":"","puesto":"Programador","empresa":"Multiportal","tel":"","tel_ofi":"","cell":"4426002842","email":"multiportal@outlook.com","web":"http://multiportal.com.mx","fb":"","tw":"","lk":"https://www.linkedin.com/","ins":"https://www.instagram.com/","f_create":"2020-08-30 11:05:44","f_update":"2020-08-30 13:17:34","vcard":"1","user":"admin","visible":"1"}');
for($i=0;$i<count($data);$i++){insertar_db($data[$i],$ramat);}
echo '<div>Total de Registros: ['.$i.'] en '.$ramat.'</div>';
/*vcard_vcard_empresas */
$ramat='vcard_vcard_empresas';
$data='{"ID":"1","cover":"multiportal.jpg","empresa":"Multiportal","web":"http://multiportal.com.mx","tel":"442602842","email":"multiportal@outlook.com","ID_user":"1","user":"admin","f_create":"2020-09-05","f_update":"2020-09-05","visible":"1"}';
insertar_db($data,$ramat);
