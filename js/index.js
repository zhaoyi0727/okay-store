    var i=0;//现在正在显示第几张图片，从0开始
    var LIWIDTH=1270;//每个li的固定宽度
    var DURATION=500;//每次轮播动画持续的时间
    var LICOUNT=2;//li的总个数
    //要移动的ul
    var divs=document.getElementById("c");
    //包含小圆点列表的ul
    var ulIdxs=document.getElementById("ul-idxs");
    //小圆点的元素列表
    var lis=ulIdxs.children;
    //从当前位置移动到任意一个范围内的位置
    function moveTo(to){
      //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
      if(to==undefined){
        to=i+1;
      }
      if(i==0){//如果滚动从头开始，再重新加上transition
        if(to>i){//如果要看当前位置右边的图片，是不会出问题的
           divs.className="content";
        }else{//只有i=0在开头，且还要看左边的图片时，才会出问题
          //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
          divs.className="content1";
          //将ulImgs拉取到最左侧
          divs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;//先将表示第几张图片的变量i变为目标位置
      //再用i计算divs的marginLeft距离
      divs.style.marginLeft=-i*LIWIDTH+"px";
      //先删除所有小圆点的class
      for(var li of lis){
        li.className=""
      }
      if(i==LICOUNT){
        i=0;
        //当transition动画播放完之后，才
        setTimeout(function(){
          divs.className="content1";//清掉transition属性
          divs.style.marginLeft=0;//将divs拉回0位置
        },DURATION)
      }
      //再给当前位置的小圆点添加class active
      lis[i].className="active";
    }
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    //用开关，控制，上次动画没有播放完，下次动画不能开始！
    var canClick=true;
    btnRight.onclick=function(){
      //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
      move(1)
    }
    //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
    function move(n){
      if(canClick){//只有可以单击时
        moveTo(i+n);//才调用真正移动ul的方法
        canClick=false;//马上把开关关上，禁止再次点击
        //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
    var interval=3000;//每次轮播之间间隔3秒
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var min=document.getElementById("m");
   m.onmouseover=function(){
      clearInterval(timer);
    }
    m.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    };

    $(".wt-menu-btn").mouseenter(function(){ 
    $(".wt-menu-btn>img").prop("src","../img/index/cart-blue.png");
    $(".wt-head-menu>div").css("display","inline-block");
  });
    $(".wt-menu-btn").mouseleave(function(){ 
    $(".wt-menu-btn>img").prop("src","../img/index/cart.png")
    $(".wt-head-menu>div").css("display","none");
  });
