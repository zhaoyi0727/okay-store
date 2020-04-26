window.onscroll=function(){
  var scrollTop=document.documentElement.scrollTop||this.document.body.scrollTop;
  // console.log(scrollTop);
  var li=document.getElementById("nav-item-top");
  if(scrollTop>=300){
    li.style.display="block";
  }else{
    li.style.display="none";
  }
}

$(".nav-list li:nth-child(-n+3)").on("mouseenter",".item-right",function(){
  $(this).parent().children(":first-child").css("display","block");
  $(this).css("display","none");
});
$(".nav-list li").on("mouseleave","div",function(){
    $(this).children(":first-child").css("display","none");
    $(this).children(":last-child").css("display","inline-block");
  })

 $(".item-qrcode-wrap").on("mouseenter",".item-right",function(){
  $(this).parent().children(":first-child").css("display","block");
 })
// $("li").on("mouseleave",".item-right",function(){
//   $(this).parent().children(":first-child").css("display","none");
//   $(this).css("display","block");
//   });
// $(".nav-list li").on("mouseleave","div>.item-right",function(){
//   $(this).prev().css("display","none");
//   $(this).css("display","block");
// })
// $(".item-phone-wrap>.item-right").hover(
//   function(){ 
//   $(this).prev().css("display","block");
//   $(this).css("display","none");
// },function(){  
//   $(this).prev().css("display","none");
//   $(this).css("display","block");
// })


