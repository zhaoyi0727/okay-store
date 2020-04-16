//DOM 4步
  //1. 查找触发事件的元素
  //本例中: 查找id为tab的ul下的li下的带有data-click属性，且属性值为tab的三个按钮元素
  var tabs=document.querySelectorAll(".tab>li>[data-click=tab]");
  //附加一个计数的变量
  var zIndex=10;//从10开始，每点一次标签，zIndex就+1，并将本次最大的zIndex赋值给当前div，就可保证当前div的zIndex暂时最大
  //2. 绑定事件处理函数
  //遍历tabs中每个tab，每遍历一个tab按钮就为其绑定单击事件
  for(var tab of tabs){
    tab.onclick=function(){
      //3. 查找要修改的元素
      //本例中: 从当前按钮自己身上取出对应div的id，用id去找自己对应的div
      var id=this.getAttribute("data-div");
            //this.dataset.div
      var div=document.getElementById(id);//因为id是变量所以不加""
      //4. 修改元素
      //本例中: 让当前div在最上边，z-index最大！
      //先将zIndex变量值+1
      zIndex++;
      //再将现在临时的最大zIndex赋值给div
      div.style.zIndex=zIndex;
    }
  }
  