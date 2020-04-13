var as=document.querySelectorAll(".count>a");
    for(var a of as){
      a.onclick=function(){
        var input=this.parentNode.children[1];
        var n=parseInt(input.value);
        if(this.innerHTML=="＋"){
          n++;
        }else if(n>1){
          n--;
        }
        input.value=n;
        this.parentNode.children[0].className=(n>1)?"select":"select fail";
      }
    }