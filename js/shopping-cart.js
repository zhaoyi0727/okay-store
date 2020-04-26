var chbAll=document.querySelector(".title>.checkAll>li:first-child>input");
chbAll.onclick=function(){
  var inputs=document.querySelectorAll(".pro>ul>li:first-child>input");
  for(var chb of inputs){
    chb.checked=chbAll.checked;
  }
}
var inputs=document.querySelectorAll(".pro>ul>li:first-child>input");
for(var chb of inputs){
  chb.onclick=function(){
    var checked=document.querySelector(".pro>ul>li:first-child>input:not(:checked)");
    if(checked==null){
      chbAll.checked=true;
    }else{
      chbAll.checked=false;
    }
  }
}