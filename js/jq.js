// 풀페이지
$(document).ready(function() {
	$("#fullpage").fullpage({
        navigation:true,
        afterLoad:function (a,b,c) {
            if(b=="section_wh"){
                $("#fp-nav ul li:nth-child(3) span").addClass("active_wh")
            }else{
                $("#fp-nav ul li:nth-child(3) span").removeClass("active_wh")
            }
        }
    });
});

// bx 슬라이드
$(function () {
    customSlide=$(".img_control_slider").bxSlider({
        pager:true,
        pagerType:'short',
        controls:true,
        prevSelector:".img_controls .imgcontrols .prev",
        nextSelector:".img_controls .imgcontrols .next",
        auto:true,
        autocontrols:true,
    });
    // var pagers="";
    // var pagersWrap=$(".img_controls .custom_pager");
    // var mySliders=$(".img_control_slider img");

    // mySliders.each(function(i, j){
    //     if(i < mySliders.length - 2){
    //       pagers += "<span>" + (i+1) +"</span>";
    //     }
    //     // pagersWrap.html(`/ ${mySliders.length - 2}`);
    //     pagersWrap.html(pagers);

    // });
});