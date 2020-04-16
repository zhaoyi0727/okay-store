window.onscroll=function(){
  var scrollTop=document.documentElement.scrollTop||this.document.body.scrollTop;
  console.log(scrollTop);
  var li=document.getElementById("nav-item-top");
  if(scrollTop>=300){
    li.style.display="block";
  }else{
    li.style.display="none";
  }
}