/* 
* @Author: anchen
* @Date:   2017-06-29 09:02:24
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-12 15:01:56
*/

$(document).ready(function(){
    var count = -1;
        var timer= setInterval(function(){
            count++;
            $(".bigPicInner img").eq(count%3).animate({
                opacity:"1"
            }, 7000).siblings('img').animate({
                opacity:"0"
            }, 7000)
        }, 2000)
        
        $(".firstNews").children("dt").css({
            "overflow":"hidden",
            "height":"190px"
        })
        $(".secondNews").children("dt").css({
            "overflow":"hidden",
            "height":"190px"
        })
        function change(id){
            $(id).hover(function() {
            $(this).children("dt").children('img').stop().animate({
                "height":"230px",
                "width":"420px",
                "marginLeft":"-20px",
                "marginTop":"-10px"
            }, 100)
            console.log($(this).children("dd").children("p"));
            $(this).children("dd").children("p").css({
                "color":"#0160c4"
            })
           
        }, function() {
            $(this).children("dt").children('img').stop().animate({
                "height":"190px",
                "width":"358px",
                "marginLeft":"0px",
                "marginTop":"0px"
            }, 100)
            $(this).children("dd").children("p").css({
                "color":"#4d4d4d"
            })
            $(".news").css({
                "color":"#9d9d9d"
            })
            
        });
        }
        change(".firstNews");
        change(".secondNews");
        $(".conInnerDl1").click(function(){
            window.location.href="cn/main.html";
        })
        function changeTextColor(id){
            $(id).hover(function() {
                $(this).children('dd').children('h2').css({
                    color:"#0160c4"
                }).siblings('p').css({
                    color:"#0160c4"
                });
            }, function() {
                $(this).children('dd').children('h2').css({
                    color:"black"
                }).siblings('p').css({
                    color:"black"
                });
            });   
        }
        changeTextColor(".conInnerDl1");
        changeTextColor(".conInnerDl2");
        changeTextColor(".conInnerDl3");
        $(".conInnerDl2").click(function(){
            window.location.href="cn/main.html";
        })
        $(".conInnerDl3").click(function(){
            window.location.href="cn/aboutyd.html";
        })
        $(".listDiv li").hover(function() {
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac')
        });
        $(".listDiv1 li").hover(function() {
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac')
        });
        $(".listDiv1 li").click(function(){
            var index=$(this).index();
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac')
            for(var i=0;i<$(".tabPage").length;i++){
                $(".tabPage").eq(i).css({
                    display:"none"
                })
            }
            $(".tabPage").eq(index).css({
                display:"block"
            })

        })
        $(".listDiv li").click(function(){
            var index=$(this).index();
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac');
            for(var i=0;i<$(".tabDiv").length;i++){
                $(".tabDiv").eq(i).css({
                "display":"none"

                })
            }
            $(".tabDiv").eq(index).css({
                "display":"block"
            })
        })
        $(".pull-down-list li").click(function(){
            for(var i=0;i<$(".pull-down-list li").length;i++){
                $(".pull-down-list li").eq(i).css({
                    "backgroundColor":"#fff",
                    "color":"#666"
                })
            }
            $(this).css({
                "backgroundColor":"#0160c4",
                "color":"#fff"
            })
        })
        $(".secondLevel").click(function(){
            var index = $(this).index(".secondLevel");
            console.log(index);
            for(var i=0;i<$(".secondLevel").length;i++){
                $(".tabInner").eq(i).css({
                    display:"none"
                })
            }
            $(".tabInner").eq(index).css({
                    display:"block"
                })
        })
        console.log($(".pull-down-list li"));
        $(".pull-down-list li").hover(function() {
            console.log($(this));
            $(this).addClass('hoverStyle')
        }, function() {
            $(this).removeClass('hoverStyle')
        });

        $(".modelList .firstLevel").on("click",function(){
            console.log($(".firstLevel").parent(".modelList").height());
            if(!$(".rubbishList .firstLevel").hasClass('hoverStyle')&& $(".rubbishList").height()==37){
                        $(".rubbishList .firstLevel").css({
                        backgroundImage:"url(../images/retract.png)"
                    })
                }
            if($(".firstLevel").parent(".modelList").height()==37){
                $(".firstLevel").parent(".modelList").css({
                    height:$(".modelList li").length*37+"px"
                })
                $(".modelList .firstLevel").css({
                    backgroundImage:"url(../images/pull-down.png)"
                })
            }else{
                $(".firstLevel").parent(".modelList").css({
                    height:"37px"
                })
                $(".modelList .firstLevel").css({
                    backgroundImage:"url(../images/retract.png)"
                })
                if($(".modelList .firstLevel").hasClass('hoverStyle')&& $(".modelList").height()==37){
                        $(".modelList .firstLevel").css({
                        backgroundImage:"url(../images/retract1.png)"
                    })
                }
                
            }
        })
        $(".rubbishList .firstLevel").on("click",function(){
            console.log($(".firstLevel").parent(".rubbishList").height());
            if(!$(".modelList .firstLevel").hasClass('hoverStyle')&& $(".modelList").height()==37){
                        $(".modelList .firstLevel").css({
                        backgroundImage:"url(../images/retract.png)"
                    })
                }
            if($(".firstLevel").parent(".rubbishList").height()==37){
                $(".firstLevel").parent(".rubbishList").css({
                    height:$(".rubbishList li").length*37+"px"
                })
                $(".rubbishList .firstLevel").css({
                    backgroundImage:"url(../images/pull-down.png)"
                })
            }else{
                $(".firstLevel").parent(".rubbishList").css({
                    height:"37px"
                })
                $(".rubbishList .firstLevel").css({
                    backgroundImage:"url(../images/retract.png)"
                })
                if($(".rubbishList .firstLevel").hasClass('hoverStyle')){
                        $(".rubbishList .firstLevel").css({
                        backgroundImage:"url(../images/retract1.png)"
                    })
                }
            }
        })

        console.log($(".newsTab"));
        $(".newsInnerDiv li").click(function(){
            var index=$(this).index();
            localStorage.setItem("count1", index);
            window.location.href="newsinner.html";
        })
        $(".news a").eq(0).click(function(){
            localStorage.setItem("count1",6);
        })
        $(".news a").eq(1).click(function(){
            localStorage.setItem("count1",8);
        })
        $(".newsInnerDiv li").hover(function() {
            $(this).children().children().css({
                "color":"#0160c4"
            })

        }, function() {
            $(this).children().children("p").css({
                "color":"#9b9b9b"
            })
            $(this).children().children("h3").css({
                "color":"#4d4d4d"
            })
        });
        $(".newsTab").eq(localStorage.count1).css({
            "display":"block"
        }).siblings().css({
            "display":"none"
        })
        $("#industyDiv li").click(function(){
            var index=$(this).index();
           localStorage.setItem("num", index);
            window.location.href="industry.html";
        })
        $(".newInner .moreNews").click(function(){
            window.location.href="cn/news.html";
        })

        $(".industryTab").eq(localStorage.num).css({
            "display":"block"
        }).siblings().css({
            "display":"none"
        })

        $("#industyDiv li").hover(function() {
            $(this).children().children().css({
                "color":"#0160c4"
            })
        }, function() {
            $(this).children().children("p").css({
                "color":"#9b9b9b"
            })
            $(this).children().children("h3").css({
                "color":"#4d4d4d"
            })
        });
        $(".tabOffer li").click(function(){
            var index=$(this).index();
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac');
            for(var i=0;i<$(".tabOffer li").length; i++){
                $(".tabOfferPage").eq(i).css({
                display:"none"
            })
            }
            $(".tabOfferPage").eq(index).css({
                display:"block"
            })
        })

        $(".tabProduct li").click(function(){
            var index=$(this).index();
            $(this).addClass('defaultBac').siblings().removeClass('defaultBac');
            for(var i=0;i<$(".tabProduct li").length; i++){
                $(".tabProductPage").eq(i).css({
                display:"none"
            })
            }
            $(".tabProductPage").eq(index).css({
                display:"block"
            })
        })
});