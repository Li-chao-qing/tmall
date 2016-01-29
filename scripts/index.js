$(function(){
	//头部
	
	$('.dhnv').hover(
		function(){
			$(this).find('.jg').show();
			$(this).css('backgroundColor','white');
			$(this).find('b').css({'transform':'rotate(180deg)'},'slow');
		},
		function(){
			$(this).find('.jg').hide();
			$(this).css('backgroundColor','#f2f2f2');
			$(this).find('b').css({'transform':'rotate(0deg)'},'slow');
		}

	);

	$('#dhnv1').hover(
		function(){
			$(this).find('#jg1').show();
		},
		function(){
			$(this).find('#jg1').hide();
		}
	);
	// 汽车
	$('.t2-right').hover(
		function(){
			$(this).stop();
			$(this).animate({
				marginRight:'10px'
			},600);
		},
		function(){
			$(this).stop();
			$(this).animate({
				marginRight:'0px'
			},600);
		}

	);

	$('.yxiaode .xdsmd a').hover(function(){
		$(this).stop();
		$(this).animate({
			marginLeft:'-10px'
		},600);
	},
	function(){
		$(this).stop();
		$(this).animate({
			marginLeft:'0px'
		},600);
	});


	// 微动
	$('.co5-y a').hover(
		function(){
			$(this).stop();
			$(this).animate({
				marginLeft:'-10px'
			});
		},
		function(){
			$(this).stop();
			$(this).animate({
				marginLeft:'0px'
			});
		}

	);
	//左侧微动
	$('.dongx li a').hover(
		function(){
			$(this).stop();
			$(this).animate({
				marginLeft:'-10px'
			},'slow');
		},
		function(){
			$(this).stop();
			$(this).animate({
				marginLeft:'0px'
			},'slow');
		}

	);
	//列表微动
	$('.ling').hover(
		function(){
			$(this).css({
				marginLeft:'-10px'
				
			},'slow');
		},
		function(){
			$(this).css({
				marginLeft:'0px'
				
			},'slow');
		}

	);

	//换一批
	$('.yy1').click(function(){
		console.log($('.guochu').find('.pinpai'));
		var arr=[];
		for(var i=0;i<$('.guochu').find('.pinpai img').length;i++){
			arr.push($($('.guochu').find('.pinpai img')[i]).attr('src'));
		}
		console.log(arr);
		var dic={};
		
		var arr1=[];
		var suiji;
		for(var i=0;i<$('.guochu').find('.pinpai img').length;i++){
			suiji=Math.floor(Math.random()*24);
			while(dic[suiji]){
				suiji=Math.floor(Math.random()*24);
			}
			dic[suiji]=true;
			arr1.push(arr[suiji]);
	
		}
		console.log(arr1);
		for(var i=0;i<$('.guochu').find('.pinpai img').length;i++){
			$($('.guochu').find('.pinpai img')[i]).attr('src',arr1[i]);
		}
	});
	//左边固定
	$('.leftd_n').each(function(i){
		$(this).data('index',i);
	});
	var z_xiab;
	$('.leftd_n').click(function(){
		var i=$(this).data('index');
		z_xiab=i;
		var mm=$($('.con5')[i]).offset().top-$('.leftd').position().top;
		console.log(mm);
		$({t:$(window).scrollTop()}).animate({t:mm},{
			duration:700,
			step:function(){
				$(window).scrollTop(this.t);
			}
		})
	});

	//返回顶部//左侧固定

	$('.con5').each(function(i){
		$(this).data('index',i);
	});
	$('#fanhui').hide();
	var tt;
	var jihao;
	$(window).scroll(function(){
		for(var i=0;i<$('.con5').length;i++){
			if($(window).scrollTop()>=$($('.con5')[i]).offset().top-200&&$(window).scrollTop()<=$($('.con5')[i]).offset().top+200){
				jihao=i;
				console.log(1);
				$($('.leftd_n')[jihao]).removeClass('hong_'+(z_xiab+1));
				$($('.leftd_n')[z_xiab]).removeClass('hong_'+(z_xiab+1));
				z_xiab=i;
				$($('.leftd_n')[i]).addClass('hong_'+(i+1));
			}
		}
		if($(window).scrollTop()>600){		
				$('#fanhui').show();
				$('.leftd ul').show();
				// clearInterval(tt);
				// tt=setInterval(function(){
				clearTimeout(tt);
				tt=setTimeout(function(){
					$('#top-search').show();
					$('#top-search').animate({top:0},'fast');
					// 

				},1000);
				// $('#top-search').hide();

		}else{
			$($('.leftd_n')[0]).removeClass('hong_1');
			clearInterval(tt);
			$('#fanhui').hide();
			$('.leftd ul').hide();
			$('#top-search').animate({top:'-53px'},'fast',function(){
				$('#top-search').hide();
			});
			
		}
		if($(window).scrollTop()>=6787){
			$('.leftd ul').hide();
		}
	});
	$('#fanhui').css('cursor','pointer');

	$('#fanhui').click(function(){
		$({t:$(window).scrollTop()}).animate({t:0},{
			duration:700,
			step:function(){
				$(window).scrollTop(this.t);
			}
		})
	});

	//购物车
	$('.gwc').hover(
		function(){	
			$(this).children().first().css({backgroundImage:'url("./images/gwc2.png")'});
		},
		function(){
			$(this).children().first().css({backgroundImage:'url(./images/gwc.png)'});
		}
	);
	//列表
	$('.fenlei ul li').each(function(i){
		$(this).data('index',i);
	});
	$('.fenleixt').each(function(i){
		$(this).data('index',i);
	});


	var liecolors=['#0638F9','#FFDDDC','#DE0609','#DB2D62','#C0C1C6','#415E80','#FAA912','#FFD44A','#FAA912','#FFC6D5','#30C4FF','#C0F9F2','#F2F7FD','#C9E0B2','#29A6FF','#E4E2E3'];
	$('.fenlei ul li').hover(
		function(){	
			$(this).children().last().css({display:'block'});
			var i=$(this).data('index');
			if($(this).data('index')!==0){
				clearInterval(time_lunbo);
				$('#blue').css('backgroundColor',liecolors[i]);
			}else{
				$('#blue').css('backgroundColor',colors[lu_index]);
				clearInterval(time_lunbo);
				time_lunbo=setInterval(fn_lunbo,1000);
			}
			$('.fenleixt').hide();
			$('.yxiaode .xdsmd ').children().hide();
			$($('.fenleixt')[i]).show();
			$($('.yxiaode .xdsmd ')[i]).children().show();
			
		
			$(this).find('.zi_fang').show();
		
		},
		function(){
			$(this).children().last().css({display:'none'});
			$(this).find('.zi_fang').hide();
			$($('.fenlei ul li')[0]).find('.ling').css({display:'block'});
		}

	);
	//轮播
	var lu_index=0;
	var colors=['#0638F9','#FFCFDB','#E8E8E8','#E8E8E8','#F51655','#FBED3B'];
	var fn_lunbo=function(){
		$('.xdd').removeClass('dd1');
		$('.zjddt').hide();
		lu_index++;
		if(lu_index==$('.zjddt').length){
			lu_index=0;
		}
		var el=$('.zjddt')[lu_index];
		$(el).show();
		$($('.xdd')[lu_index]).addClass('dd1');
		$('#blue').css('backgroundColor',colors[lu_index]);
	};
	$('.xdd').each(function(i){
		$(this).data('index',i);

	});
	$('.xdd').hover(function(){
		clearInterval(time_lunbo);
		$('.xdd').removeClass('dd1');
		$(this).addClass('dd1');
		var i=$(this).data('index');
		$('.zjddt').hide();
		$($('.zjddt')[i]).show();
		lu_index=i;
		$('#blue').css('backgroundColor',colors[lu_index]);
	},function(){
		clearInterval(time_lunbo);
		time_lunbo=setInterval(fn_lunbo,1000);
	});
	$('.zjddt').each(function(i){
		$(this).data('index',i);

	});
	$('.zjddt').hover(function(){
		clearInterval(time_lunbo);

		var i=$(this).data('index');
		$('.xdd').removeClass('dd1');
		$($('.xdd')[lu_index]).addClass('dd1');
		lu_index=i;
	},function(){
		clearInterval(time_lunbo);
		time_lunbo=setInterval(fn_lunbo,1000);
	});


	var time_lunbo=setInterval(fn_lunbo,1000);


	//点击轮播


	
	$('.zjt  b').css('cursor','pointer');

	$('.yjt  b').css('cursor','pointer');

	var dj_index1=0;
	var kai=false;
	var bianl;
	var dian_lun1=function(){
		dj_index1++;
		if(dj_index1==3){dj_index1=0;}
		if(kai){
			$($('.zchang')[bianl]).stop();
		}
		$('.zchang').css({'marginLeft':-dj_index1*189});
	
	};

	$('.zjt  b').click(function(e){
	
		var i=$('.zjt  b').index(this);
		dj_index1--;
		if(dj_index1==-1){dj_index1=2;}
		bianl=i;
		$($('.zchang')[i]).stop();
		$($('.zchang')[i]).css('marginLeft',-dj_index1*189);
	});
	$('.zjt  b').mousedown(function(e){
		 e.preventDefault();
	});


	$('.yjt  b').click(function(){
		var i=$('.yjt  b').index(this);
		dj_index1++;
		if(dj_index1==3){dj_index1=0;}
		$($('.zchang')[i]).stop();
		$($('.zchang')[i]).css('marginLeft',-dj_index1*189);
	});
	$('.yjt  b').mousedown(function(e){
		 e.preventDefault();
	});
	var dian_time1=setInterval(dian_lun1,1000);

	//选项卡
	
	var qianyige=$('.rmpp ul li')[0];
	var qianyige_block=$('.rm-among ul')[0];
	$('.rmpp ul li').click(function(e){
		$(qianyige).css({borderBottom:''});
		$(qianyige).find('a').css({color:'#666'});
		$(qianyige_block).removeClass('guochu');
		var i=$('.rmpp ul li').index(this);
		$(this).css({borderBottom:'2px solid #000'});
		$(this).find('a').css({color:'black'});
		$($('.rm-among ul')[i]).addClass('guochu');
		qianyige=$('.rmpp ul li')[i];
		qianyige_block=$('.rm-among ul')[i];


	});

	//右侧
	$('.ycjg').hover(
		function(){
			var i=$('.ycjg').index(this);
			$($('.wz')[i]).show();
			$($('.wz')[i]).stop();
			$($('.wz')[i]).animate({'left':'-90px'},200);
			$(this).css('backgroundColor','#c40000');

		},
		function(){
			var i=$('.ycjg').index(this);
			$($('.wz')[i]).stop();
			$($('.wz')[i]).hide();
			$($('.wz')[i]).css('left','-120px');
			$(this).css('backgroundColor','#000');
		}
	);

	// nav 搜索
	$('#search').focus(function(){

		$(this).css('opacity','0.5');
		$(document).keydown(function(){
			$('#shihua').text('');
		});

	});
	$('#search').blur(function(){

		if($(this).val()==''){
			$(this).css('opacity','0');
			$('#shihua').text('施华洛世奇华丽入驻，璀璨好礼疯狂送');
		}

	});
	//top-search
	$('#kuang').focus(function(){

		$(this).css('opacity','0.8');
		$(document).keydown(function(){
			$('#chaonan').text('');
		});

	});
	$('#kuang').blur(function(){

		if($(this).val()==''){
			$(this).css('opacity','0.5');
			$('#chaonan').text('潮男必备神器！');
		}

	});

	//xin
	$('#rm-among ul li ').hover(
		function(){
			var i=$('#rm-among ul li ').index(this);
			$($('#rm-among ul li .xinxing')[i]).show();
		},
		function(){
			var i=$('#rm-among ul li ').index(this);
			$($('#rm-among ul li .xinxing')[i]).hide();
		}
	);





// var o={
// 	d:7,
// 	fn:function(){
// 		var fn=function(){
// 			console.log(this.d,arguments);
// 		}
// 		fn.apply(this,[this]);
// 	}
	
// };

// o.fn.apply({a:1,b:2,d:3});


// Array.prototype.mymap=function(fn){
// 	var a=[];
// 	for(var i=0;i<this.length;i++){
// 		a.push(fn.apply(this,[this[i],i,this]));
// 	}
// 	return a;

// 	// return f(data,index,origin){
// 	// 	var i=0;
// 	// 	for(;i<this.length;i++){
// 	// 		data=this[i];
// 	// 		index=i;
// 	// 	}
// 	// 	origin=this;

// 	// 	return [data,index,origin];
// 	// };
// };

// [1,2,3].mymap(function(){return arguments[0]*arguments(1);});

});//最后