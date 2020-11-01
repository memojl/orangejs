<?php 
function insertar_db($data,$ramat){
//$url='https://crud-ce022.firebaseio.com/'.$ramat.'.json';
$url='https://console.firebase.google.com/u/0/project/crud-ce022/firestore/data~2F'.$ramat;
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

/* */
$ramat='m_access';
$data='{"ID":"1","user":"admin","ip":"127.0.0.1","navegador":"CHROME","os":"WIN","code":"944950","fecha":"2019-06-06 03:35:27"}';
insertar_db($data,$ramat);
