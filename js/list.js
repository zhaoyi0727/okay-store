var divs=document.querySelectorAll(".link>div");
console.log(divs);
for(var div of divs){
div.onclick=function(){
  window.open('./detail.html','_blank')
  }
}
