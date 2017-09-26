/* 
* @Author: anchen
* @Date:   2017-07-21 09:18:57
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-24 09:57:23
*/

$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                
                // 如果需要分页器
                pagination: '.swiper-pagination',
                
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay: 3000
          })     
          function clearActive(){
            $(".footer a").eq(0).css({
                background:"url(images/home.png) center 0.71rem no-repeat;",
                backgroundSize:"1.5rem 1.5rem"
            })
            $(".footer a").eq(1).css({
                background:"url(images/business.png) center 0.71rem no-repeat;",
                backgroundSize:"1.5rem 1.5rem"
            })
            $(".footer a").eq(2).css({
                background:"url(images/product.png) center 0.71rem no-repeat;",
                backgroundSize:"1.5rem 1.5rem"
            })
            $(".footer a").eq(3).css({
                background:"url(images/news.png) center 0.71rem no-repeat;",
                backgroundSize:"1.5rem 1.5rem"
            })
            $(".footer a").eq(4).css({
                background:"url(images/us.png) center 0.71rem no-repeat;",
                backgroundSize:"1.5rem 1.5rem"
            })
            $(".userCon").css({
                display:"none"
            })
            $(".newsCon").css({
                display:"none"
            })
            $(".productCon").css({
                display:"none"
            })
            $(".businessCon").css({
                display:"none"
            })
          }   
          $(".footer a").eq(0).on("click",function(){
             clearActive();
             $(this).addClass('active').siblings().removeClass('active');
             $(this).css({
                background:"url(images/home_active.png) center 0.71rem no-repeat",
                backgroundSize:"1.5rem 1.5rem"
             })

          })
          $(".footer a").eq(1).on("click",function(){
             clearActive();
             $(this).addClass('active').siblings().removeClass('active');
             $(this).css({
                background:"url(images/business_active.png) center 0.71rem no-repeat",
                backgroundSize:"1.5rem 1.5rem"
             })
             $(".businessCon").css('display', 'block');
             $(".businessCon li").click(function() {
                clearActive();
                 $(this).addClass('hoverStyle').siblings().removeClass('hoverStyle')

             });

          })
          $(".footer a").eq(2).on("click",function(){
             clearActive();
             $(this).addClass('active').siblings().removeClass('active');
             $(this).css({
                background:"url(images/product_active.png) center 0.71rem no-repeat",
                backgroundSize:"1.5rem 1.5rem"
             })
             // $(".productCon").css('display', 'block');
             // $(".productCon li").click(function() {
             //     $(this).addClass('hoverStyle').siblings().removeClass('hoverStyle')
             // });

          })
          $(".footer a").eq(3).on("click",function(){
             clearActive();
             $(this).addClass('active').siblings().removeClass('active');
             $(this).css({
                background:"url(images/news_active.png) center 0.71rem no-repeat",
                backgroundSize:"1.5rem 1.5rem"
             })
             $(".newsCon").css('display', 'block');
             $(".newsCon li").click(function() {
                 $(this).addClass('hoverStyle').siblings().removeClass('hoverStyle')
             });

          })
          $(".footer a").eq(4).on("click",function(){
             clearActive();
             $(this).addClass('active').siblings().removeClass('active');
             $(this).css({
                background:"url(images/us_active.png) center 0.71rem no-repeat",
                backgroundSize:"1.5rem 1.5rem"
             })
             $(".userCon").css('display', 'block');
             $(".userCon li").click(function() {
                 $(this).addClass('hoverStyle').siblings().removeClass('hoverStyle')
             });

          })
          console.log($(".newsTab"));
          $(".newsLiClick").click(function(){
             var index=$(this).index();
             // console.log(index);
             localStorage.setItem("num",index);
             window.location.href="company-news.html";
          })
          $(".indexNews").click(function(){
             var index=$(this).index();
             // console.log(index);
             localStorage.setItem("num",index);
             window.location.href="cn/company-news.html";
          })
          $(".newsLiClick1").click(function(){
             var index=$(this).index()+9;
             // console.log(index);
             localStorage.setItem("num",index);
             window.location.href="company-news.html";
          })
          for(var i=0;i<$(".newsLiClick").length;i++){
            $(".newsTab").css({
                display:"none;"
            })
          }
          $(".newsTab").eq(localStorage.num).css({
            display:"block"
          })
});