var url_json = 'https://crud-ce022.firebaseio.com/vcard_vcard/-MLBBSCOdiImZ-yxdJmx.json';
console.log(url_json);

fetch(url_json).then(res => res.json()).then(data => {getJson(data);});

var file=getJson();
console.log(file);

function getJson(data){
  //const nJson=data;//
  console.log(data);
  return data;
}