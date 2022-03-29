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

// footer : 관련사이트
$(document).ready(function() {
	if($(".relate_site").size() != 0){
        var i = 1;
		js_relate ();
	}
});
function js_relate (){
	var obj = $(".relate_site"); 
	
	obj.each(function() {
		var t = $(this);
			t.btn = t.find(">a"); 
			t.ul = t.find(">ul"); 
			t.ul.li = t.ul.find(">li"); 
		
		$("<em class='hidden'>열기</em>").appendTo(t.btn);		
			
		t.btn.on("click",function() {
			if(t.ul.is(":animated")) return false;
			
			$(this).toggleClass("on").siblings("ul").slideToggle(300);
			if($(this).hasClass("on")){
				$(this).find(">em").text("닫기");
			} else {
				$(this).find(">em").text("열기");
			}
			return false;
		});
		
		t.on("mouseleave",function() {
			$(this).find(">a").removeAttr("class");
			$(this).find(">ul").slideUp(300);
			t.btn.find(">em").text("열기");
			return false;
		});
		
		t.ul.li.last().find(">a").on("focusout",function() {
			$(this).parent().parent().siblings("a").removeAttr("class");
			$(this).parent().parent().slideUp(300);
			t.btn.find(">em").text("열기");
			return false;
		});		
	});
}
	//animate
	function movement(ty){
		slide.li = slide.ul.find(">li");
	
		var olds = 0;
		var news = 0;
	
		if(ty == "right"){
			//다음
			olds = slide.nums;
			news = slide.nums + 1;
			
			
			//alert(news);
	
			//if(news >= slide.li.size()) news = 0;
			if(news < slide.li.size()) {
				news = news;
			} else if (news > slide.li.size()) {
				news = 1;
			}
		} else if(ty == "left"){
			//이전
			olds = slide.nums;
			news = slide.nums - 1;
	
			if(news < 1) news = slide.li.size();
		} else {
			//심볼클릭
			olds = slide.nums;
			news = ty+1;
			if(news >= slide.li.size()) news = 0;
		}
	
	
		if(slide.li.eq(news-1).is(":animated")) return false;
	
		slide.li.eq(olds-1).stop().css({"opacity":"1","left":"0","z-index":"10"}).animate({"opacity":"0"},slide.speeds,function(){
			slide.li.eq(olds-1).css({"left":"100%","display":"none"});
			if(slide.autos == "Y"){
				slide.times = setTimeout(function(){
					movement("right");
				},slide.times_speeds);
			}
		});
	
		slide.li.eq(news-1).css({"display":"block"}).stop().css({"opacity":"1","left":"0","z-index":"9"}).animate({"opacity":"1"},slide.speeds,function(){
		});
	
		slide.nums = news;
	
		//총 카운트 적용
		slide.counts.html("<span>"+slide.nums+"</span>"+slide.li.size());
	
		//심볼
		slide.simbols.find(">a.on").removeClass("on");
		slide.simbols.eq(slide.nums-1).find(">a").addClass("on");
	}


// 메인 배너 슬라이더
