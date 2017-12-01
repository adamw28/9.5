var btnTag=document.getElementsByTagName('button');
for(var i=0;i<btnTag.length;i++){
	alert(btnTag[i].innerHTML);
}
var btnClass=document.getElementsByClassName('button');
for(var i=0;i<btnClass.length;i++){
	alert(btnClass[i].innerText);
}