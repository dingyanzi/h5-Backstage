$(function() {
	//swiper分页图
	var curIndex = 1;
	var swiper = new Swiper('.swiper-container', {
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		pagination: '.swiper-pagination',
		observer: true,
		observerParents: false,
		paginationType: 'fraction',
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		},
		onTransitionEnd: function(swiper) {
			swiperAnimate(swiper);
		}
	});
	layui.use(['colorpicker', 'slider', 'element', 'form', 'layer', 'upload'],
		function() {
			var $ = layui.$,
				form = layui.form,
				element = layui.element,
				slider = layui.slider,
				layer = layui.layer,
				upload = layui.upload,
				colorpicker = layui.colorpicker;
			colorpicker.render({
				elem: '#textColor-id',
				color: 'rgba(7, 155, 140, 1)',
				format: 'rgb',
				predefine: true,
				alpha: true,
				done: function(color) {
					$('#textColor').val(color); //向隐藏域赋值
					color || this.change(color); //清空时执行 change
				},
				change: function(color) {
					$(".phoneBox .choseBorder").css("color", color);
					$(".phoneBox .choseBorder input").css("color", color)
				}
			});
			colorpicker.render({
				elem: '#bgColor-id',
				color: 'rgba(255, 255, 255, 1)',
				format: 'rgb',
				predefine: true,
				alpha: true,
				done: function(color) {
					$('#bgColor').val(color); //向隐藏域赋值
					color || this.change(color); //清空时执行 change
				},
				change: function(color) {
					$(".phoneBox .choseBorder").css("background-color", color)
					$(".phoneBox .choseBorder input").css("background-color", color)
				}
			});
			colorpicker.render({
				elem: '#bgimgColor-id',
				color: 'rgba(255, 255, 255, 1)',
				format: 'rgb',
				predefine: true,
				alpha: true,
				done: function(color) {
					$('#bgimgColor').val(color); //向隐藏域赋值
					color || this.change(color); //清空时执行 change
				},
				change: function(color) {
					$(".phoneBox .swiper-slide-active").css("background-color", color);
				}
			});
			colorpicker.render({
				elem: '#imgColor-id',
				color: 'rgba(255, 255, 255, 1)',
				format: 'rgb',
				predefine: true,
				alpha: true,
				done: function(color) {
					$('#imgColor').val(color); //向隐藏域赋值
					color || this.change(color); //清空时执行 change
				},
				change: function(color) {
					$(".phoneBox .swiper-slide-active span.choseBorder img").css("background-color", color)
				}
			});
			//行高
			slider.render({
				elem: '#slideTest8',
				input: true,
				change: function(value) {
					$(".phoneBox .choseBorder").css("line-height", value + "px")
				}
			});
			//字距
			slider.render({
				elem: '#slideTest9',
				input: true,
				change: function(value) {
					$(".phoneBox .choseBorder").css("letter-spacing", value + "px")
				}
			});
			//边框尺寸
			slider.render({
				elem: '#slideTest10',
				input: true,
				min: 0,
				max: 18,
				change: function(value) {
					$(".phoneBox .choseBorder").css("border-width", value)
				}
			});
			//边框弧度
			slider.render({
				elem: '#slideTest11',
				input: true,
				min: 0,
				max: 100,
				change: function(value) {
					$(".phoneBox .choseBorder").css("border-radius", value)
				}
			});
			//旋转
			slider.render({
				elem: '#slideTest12',
				input: true,
				min: 0,
				max: 360,
				change: function(value) {
					$(".phoneBox .choseBorder").css({
						transform: "rotate(" + value + "deg)"
					})
				}
			});
			//透明度
			slider.render({
				elem: '#slideTest13',
				input: true,
				value: 100,
				min: 0,
				max: 100,
				change: function(value) {
					var values = value / 100;
					$(".phoneBox .choseBorder p").css("opacity", values)
					$(".phoneBox .choseBorder img").css("opacity", values)
				}
			});
			//边框
			form.on('select(borderFn)', function(data) {
				var borderV = data.value;
				var domElements = $(".phoneBox .choseBorder");
				if(borderV == 0) {
					domElements.css("border-style", "none");
				} else if(borderV == 1) {
					domElements.css("border-style", "solid");
				} else if(borderV == 2) {
					domElements.css("border-style", "dashed");
				} else if(borderV == 3) {
					domElements.css("border-style", "dotted");
				} else if(borderV == 4) {
					domElements.css("border-style", "double");
				}
			});
			//边框颜色
			colorpicker.render({
				elem: '#borderColor-id',
				color: 'rgba(255, 255, 255, 1)',
				format: 'rgb',
				predefine: true,
				alpha: true,
				done: function(color) {
					$('#borderColor').val(color); //向隐藏域赋值
					color || this.change(color); //清空时执行 change
				},
				change: function(color) {
					$(".phoneBox .choseBorder").css("border-color", color)
				}
			});
			//音乐
			upload.render({
				elem: '#uploadM',
				url: '/upload/',
				accept: 'audio' //音频
					,
				done: function(res) {
					console.log(res)
				}
			});

		});
	//文字放大
	$("#fontBig").on('click', function() {
		var size = parseInt($(".choseBorder p").css("font-size"));
		$(".phoneBox .choseBorder p").css("font-size", size + 1 + "px")
	})

	//文字缩小
	$("#fontSmall").on('click', function() {
		var size = parseInt($(".phoneBox .choseBorder p").css("font-size"));
		if(size <= 12) {
			return
		} else {
			$(".phoneBox .choseBorder p").css("font-size", size - 1 + "px")
		}
	})

	//文字对齐
	$(".text-alginBox a").on('click', function() {
		$(this).removeClass("cur")
		$(".phoneBox .choseBorder p").removeClass("txtL");
		$(".phoneBox .choseBorder p").removeClass("txtC");
		$(".phoneBox .choseBorder p").removeClass("txtR");
		var classid = $(this).attr("data-class");
		$(this).addClass("cur").siblings().removeClass('cur');
		$(".phoneBox .choseBorder p").addClass(classid);
		$(this).addClass("cur").siblings().removeClass('cur')
	})
	//字体加粗
	$(".icon-jiacu").on('click', function() {
		$(".phoneBox .choseBorder").toggleClass("blod");
		$(this).toggleClass("cur");
	})
	//字体斜体
	$(".icon-704bianjiqi_Ixieti").on('click', function() {
		$(".phoneBox .choseBorder").toggleClass("itic");
		$(this).toggleClass("cur");
	})
	//字体下划线
	$(".icon-Underline").on('click', function() {
		$(".phoneBox .choseBorder").toggleClass("txtD");
		$(this).toggleClass("cur");
	})
	//清楚样式
	$(".icon-yunongtongqingchuhuancun").on('click', function() {
		$(".phoneBox .choseBorder").removeClass("txtL txtC txtR blod itic txtD")
	})
	//添加文字
	$("#addText").on('click', function() {
		$(".phoneBox .swiper-slide span").removeClass("choseBorder")
		var txt = '<span class="choseBorder" style="left: 80px; top:130px;"><p contenteditable="true">请输入文字</p><i class="moveElement"></i><i class="deleteElement"></i></span>';
		$(".phoneBox .swiper-slide-active").append(txt);
	})
	$("#setTime").bind("input propertychange change", function(event) {
		var times = $('#setTime').val();
		$(".phoneBox .choseBorder").attr("swiper-animate-duration", times + 's')
	});
	$("#setDelay").bind("input propertychange change", function(event) {
		var delays = $('#setDelay').val();
		$(".phoneBox .choseBorder").attr("swiper-animate-delay", delays + 's')
	});
	$(".swiper-button-next").on('click', function() {
		$(".phoneBox .swiper-slide span").removeClass("choseBorder")
	})
	//动画
	$("#addCar").on('click', function() {
		$(".choseBorder").addClass("animated");
		$(".lineBox .actBox").hide();
		$("ul.anim-list").removeClass("move");
	})
	$("#outAnim").on('click', function() {
		$(this).parent("ul").addClass("move");
		$(".lineBox .actBox").show();
	})
	var togClass;
	$("ul.anim-list li").on('click', function() {
		$(this).parent("ul").addClass("move");
		var actclass = $(this).attr("data-class");
		$(".lineBox .actBox").show();
		togClass = actclass;
		$(".phoneBox .choseBorder").attr("swiper-animate-effect", actclass)
	})
	$("ul.anim-list").on(handleMove, "li", function() {
		var actclass = $(this).attr("data-class");
		//$(".phoneBox .choseBorder").addClass("animated");
		$(".phoneBox .choseBorder").addClass("ani");
		$(".phoneBox .choseBorder").removeClass("fadeIn flip fadeOut fadeInRight fadeInLeft fadeInUp fadeInDown flipInX bounceInLeft bounceInRight bounceInDown bounceInUp flipInY rotateInUpRight rotateInUpLeft bounceIn bounceInLeft bounceInRight zoomIn shake wobble rotateIn flash jello jackInTheBox");
		$(".phoneBox .choseBorder").toggleClass(actclass);
	})
	//预览动画
	$("#showCar").on('click', function() {
		if($(".choseBorder animated")) {
			$(".choseBorder").toggleClass(togClass);
		} else {
			return
		}
	})
	//删除动画
	$("#removeCar").on('click', function() {
		$(".choseBorder").removeClass("fadeIn flip fadeOut fadeInRight fadeInLeft fadeInUp fadeInDown flipInX bounceInLeft bounceInRight bounceInDown bounceInUp flipInY rotateInUpRight rotateInUpLeft bounceIn bounceInLeft bounceInRight zoomIn shake wobble rotateIn flash jello jackInTheBox");
		$(".phoneBox .choseBorder").attr("swiper-animate-effect", '')
	})
	//动画是否循环
	$("#testB").on('click', function() {
		var check = document.getElementById("ifcheckbox").checked;
		if(check == true) {
			$(".choseBorder").addClass("infinite")
		} else {
			$(".choseBorder").removeClass("infinite")
		}
	})
	//选择音乐
	$(".musicList li span").on('click', function() {
		$(".nomusic").hide();
		$("#clearMusic").show();
		$(".music-foot .info").show();
		var musics = $(this).attr("data-music");
		var musicn = $(this).text();
		$("#audio").attr("src", musics);
		$("#musicname").text(musicn);
	})
	//删除音乐
	$("#clearMusic").on('click', function() {
		$("#audio").attr("src", '');
		$(".nomusic").show();
		$(this).hide();
		$(".music-foot .info").hide();
	})
	//确认选择的音乐
	$("#enterMusic").on('click', function() {
		var musicVal = $("#audio").attr("src");
		//这里把musicVal音乐路径保存在数组里一起返回接口里
		alert(musicVal);
		$("#media").attr("src", musicVal);
		$("#audio_btn").addClass("rotate");
		layer.closeAll()
	})
	
	//关闭展示h5弹窗
	$("#closeShowPage").on('click', function(e) {
		e.stopPropagation();
		document.getElementById("media").pause();
		$("#audio_btn").removeClass("rotate");
		$(".showPage").css("display", "none");
		$(".phoneBox .swiper-slide-active span").addClass("visibile")
	})
	setTimeout(function() {
		$(".phoneBox .swiper-slide-active span").removeClass("visibile")
	}, 10)

})