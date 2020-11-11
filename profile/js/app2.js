var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
var file=getJson();
console.log(file);

fetch(url_json).then(res => res.json()).then(data => {getJson(data);});

function getJson(data){
  //const nJson=data;//
  console.log(data);
  return data;
}