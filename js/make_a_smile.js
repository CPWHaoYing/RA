$(document).ready(function(){

   $(".main").css({"opacity":1});

   $("#btn_01").mouseover(function() {
            $(this).css("background-position", "right top");
         }).mouseout(function(){
            if($("#content_set_01").hasClass("check")){
               $(this).css("background-position", "right top");
            }else{
               $(this).css("background-position", "left top");
            }
   });
   $("#btn_02").mouseover(function() {
            $(this).css("background-position", "right top");
         }).mouseout(function(){
            if($("#content_set_02").hasClass("check")){
               $(this).css("background-position", "right top");
            }else{
               $(this).css("background-position", "left top"); 
            }
   });  
   $("#btn_03").mouseover(function() {
            $(this).css("background-position", "right top");
         }).mouseout(function(){
            if($("#content_set_03").hasClass("check")){
               $(this).css("background-position", "right top");
            }else{
               $(this).css("background-position", "left top");
            }
   });
   $("#btn_04").mouseover(function() {
           $(this).css("background-position", "right top");
         }).mouseout(function(){
            if($("#content_set_04").hasClass("check")){
               $(this).css("background-position", "right top");
            }else{
               $(this).css("background-position", "left top");
            }
   });
   $("#btn_05").mouseover(function() {
            $(this).css("background-position", "right top");
         }).mouseout(function(){
            if($("#content_set_05").hasClass("check")){
               $(this).css("background-position", "right top");
            }else{
               $(this).css("background-position", "left top");
            }
   });     
   $("#btn_01").click(function(){
      if($("#content_set_01").hasClass("check")){
         $(this).css("background-position", "left top").animate({left:"0px"}).addClass("selected"); 
         $("#content_bg").fadeOut(100);
         // $("#bottom_holder_01").fadeOut(100);
         // $("#bottom_holder_02").fadeOut(100);
         // $("#bottom_holder_03").fadeOut(100);
         // $("#bottom_holder_04").fadeOut(100);
         $("#bottom_holder_01").removeClass("bottom_btn_02").fadeOut(100);
         $("#bottom_holder_02").removeClass("bottom_btn_03").fadeOut(100);
         $("#bottom_holder_03").removeClass("bottom_btn_04").fadeOut(100);
         $("#bottom_holder_04").removeClass("bottom_btn_05").fadeOut(100);
         $("#content_set_01").removeClass("check").fadeOut(100);
         
         $("#info").fadeIn();
         $("#btn_02").css("background-position", "left top").animate({left:"193px"},1).fadeIn();
         $("#btn_03").css("background-position", "left top").animate({left:"386px"},1).fadeIn();
         $("#btn_04").css("background-position", "left top").animate({left:"579px"},1).fadeIn();
         $("#btn_05").css("background-position", "left top").animate({left:"772px"},1).fadeIn();
      }else{
         $(this).css("background-position", "right top").delay(200).animate({left:"0px"},500).addClass("selected");   
         $("#btn_02, #btn_03, #btn_04, #btn_05").fadeOut();
         $("#info").fadeOut();
         $("#content_bg").delay(400).fadeIn();

         $("#content_set_01").delay(400).fadeIn(800).addClass("check");
         $("#content_set_02, #content_set_03, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");

         $("#bottom_holder_set").delay(400).fadeIn(function(){
            if($("#btn_02").hasClass("selected")){
                $("#bottom_holder_01").removeClass("bottom_btn_01_selected").addClass("bottom_btn_02_selected").css("background-position", "right bottom").animate({left:"0px"},1).fadeTo(200,1);
            }else{
                $("#bottom_holder_01").removeClass("bottom_btn_01").addClass("bottom_btn_02").css("background-position", "right top").animate({left:"0px"},1).fadeTo(200,1);
            };
            if($("#btn_03").hasClass("selected")){
                $("#bottom_holder_02").removeClass("bottom_btn_02_selected").addClass("bottom_btn_03_selected").css("background-position", "right bottom").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            }else{
                $("#bottom_holder_02").removeClass("bottom_btn_02").addClass("bottom_btn_03").css("background-position", "right top").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            };
            if($("#btn_04").hasClass("selected")){
                $("#bottom_holder_03").removeClass("bottom_btn_03_selected").addClass("bottom_btn_04_selected").css("background-position", "right bottom").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            }else{
                $("#bottom_holder_03").removeClass("bottom_btn_03").addClass("bottom_btn_04").css("background-position", "right top").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            };
            if($("#btn_05").hasClass("selected")){
                $("#bottom_holder_04").removeClass("bottom_btn_04_selected").addClass("bottom_btn_05_selected").css("background-position", "right bottom").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }else{
                $("#bottom_holder_04").removeClass("bottom_btn_04").addClass("bottom_btn_05").css("background-position", "right top").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }
         });
      }
   });

   $("#btn_02").click(function(){
      if($("#content_set_02").hasClass("check")){
         $(this).css("background-position", "left top").delay(100).animate({left:"193px"},500).addClass("selected"); 
         $("#content_bg").fadeOut(100);
         // $("#bottom_holder_01").fadeOut(100);
         // $("#bottom_holder_02").fadeOut(100);
         // $("#bottom_holder_03").fadeOut(100);
         // $("#bottom_holder_04").fadeOut(100);
         $("#bottom_holder_01").removeClass("bottom_btn_01").fadeOut(100);
         $("#bottom_holder_02").removeClass("bottom_btn_03").fadeOut(100);
         $("#bottom_holder_03").removeClass("bottom_btn_04").fadeOut(100);
         $("#bottom_holder_04").removeClass("bottom_btn_05").fadeOut(100);
         $("#content_set_02").removeClass("check").fadeOut(100);
         
         $("#info").fadeIn();
         $("#btn_01").css("background-position", "left top").delay(300).animate({left:"0px"},1).fadeIn();
         $("#btn_03").css("background-position", "left top").animate({left:"386px"},1).fadeIn();
         $("#btn_04").css("background-position", "left top").animate({left:"579px"},1).fadeIn();
         $("#btn_05").css("background-position", "left top").animate({left:"772px"},1).fadeIn();
      }else{
         $(this).css("background-position", "right top").animate({left:"0px"},500).addClass("selected");   
         $("#btn_01, #btn_03, #btn_04, #btn_05").fadeOut(100);
         $("#info").fadeOut();
         $("#content_bg").delay(500).fadeIn();

         $("#content_set_02").delay(500).fadeIn(800).addClass("check");
         $("#content_set_01, #content_set_03, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");

         $("#bottom_holder_set").delay(500).fadeIn(function(){
            if($("#btn_01").hasClass("selected")){
                $("#bottom_holder_01").removeClass("bottom_btn_02_selected").addClass("bottom_btn_01_selected").css("background-position", "left bottom").animate({left:"0px"},1).fadeTo(200,1);
            }else{
                $("#bottom_holder_01").removeClass("bottom_btn_02").addClass("bottom_btn_01").css("background-position", "left top").animate({left:"0px"},1).fadeTo(200,1);
            };
            if($("#btn_03").hasClass("selected")){
                $("#bottom_holder_02").removeClass("bottom_btn_02_selected").addClass("bottom_btn_03_selected").css("background-position", "right bottom").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            }else{
                $("#bottom_holder_02").removeClass("bottom_btn_02").addClass("bottom_btn_03").css("background-position", "right top").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            };
            if($("#btn_04").hasClass("selected")){
                $("#bottom_holder_03").removeClass("bottom_btn_03_selected").addClass("bottom_btn_04_selected").css("background-position", "right bottom").addClass("bottom_btn_04_selected").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            }else{
                $("#bottom_holder_03").removeClass("bottom_btn_03").addClass("bottom_btn_04").css("background-position", "right top").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            };
            if($("#btn_05").hasClass("selected")){
                $("#bottom_holder_04").removeClass("bottom_btn_04_selected").addClass("bottom_btn_05_selected").css("background-position", "right bottom").addClass("bottom_btn_05_selected").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }else{
                $("#bottom_holder_04").removeClass("bottom_btn_04").addClass("bottom_btn_05").css("background-position", "right top").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }
         });
      }

   });
   
   $("#btn_03").click(function(){
      if($("#content_set_03").hasClass("check")){
         $(this).css("background-position", "left top").delay(100).animate({left:"386px"},500).addClass("selected"); 
         $("#content_bg").fadeOut(100);
         // $("#bottom_holder_01").fadeOut(100);
         // $("#bottom_holder_02").fadeOut(100);
         // $("#bottom_holder_03").fadeOut(100);
         // $("#bottom_holder_04").fadeOut(100);
         $("#bottom_holder_01").removeClass("bottom_btn_01").fadeOut(100);
         $("#bottom_holder_02").removeClass("bottom_btn_02").fadeOut(100);
         $("#bottom_holder_03").removeClass("bottom_btn_04").fadeOut(100);
         $("#bottom_holder_04").removeClass("bottom_btn_05").fadeOut(100);
         $("#content_set_03").removeClass("check").fadeOut(100);
         
         $("#info").fadeIn();
         $("#btn_01").css("background-position", "left top").delay(300).animate({left:"0px"},1).fadeIn();
         $("#btn_02").css("background-position", "left top").delay(300).animate({left:"193px"},1).fadeIn();
         $("#btn_04").css("background-position", "left top").animate({left:"579px"},1).fadeIn();
         $("#btn_05").css("background-position", "left top").animate({left:"772px"},1).fadeIn();
      }else{
         $(this).css("background-position", "right top").delay(200).animate({left:"0px"},500).addClass("selected"); 
         $("#btn_02, #btn_01, #btn_04, #btn_05").fadeOut();
         $("#info").fadeOut(100);
         $("#content_bg").delay(600).fadeIn(100);

         $("#content_set_03").delay(600).fadeIn(800).addClass("check");
         $("#content_set_01, #content_set_02, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");

         $("#bottom_holder_set").delay(600).fadeIn(function(){
            if($("#btn_01").hasClass("selected")){
                $("#bottom_holder_01").removeClass("bottom_btn_02_selected").addClass("bottom_btn_01_selected").css("background-position", "left bottom").animate({left:"0px"},1).fadeTo(200,1);
            }else{
                $("#bottom_holder_01").removeClass("bottom_btn_02").addClass("bottom_btn_01").css("background-position", "left top").animate({left:"0px"},1).fadeTo(200,1);
            };
            if($("#btn_02").hasClass("selected")){
                $("#bottom_holder_02").removeClass("bottom_btn_03_selected").addClass("bottom_btn_02_selected").css("background-position", "left bottom").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            }else{
                $("#bottom_holder_02").removeClass("bottom_btn_03").addClass("bottom_btn_02").css("background-position", "left top").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            };
            if($("#btn_04").hasClass("selected")){
                $("#bottom_holder_03").removeClass("bottom_btn_03_selected").addClass("bottom_btn_04_selected").css("background-position", "right bottom").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            }else{
                $("#bottom_holder_03").removeClass("bottom_btn_03").addClass("bottom_btn_04").css("background-position", "right top").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            };
            if($("#btn_05").hasClass("selected")){
                $("#bottom_holder_04").removeClass("bottom_btn_04_selected").addClass("bottom_btn_05_selected").css("background-position", "right bottom").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }else{
                $("#bottom_holder_04").removeClass("bottom_btn_04").addClass("bottom_btn_05").css("background-position", "rights top").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }
         });
      }
   });

   $("#btn_04").click(function(){
      if($("#content_set_04").hasClass("check")){
         $(this).css("background-position", "left top").delay(100).animate({left:"579px"},700).addClass("selected"); 
         $("#content_bg").fadeOut(100);
         // $("#bottom_holder_01").fadeOut(100);
         // $("#bottom_holder_02").fadeOut(100);
         // $("#bottom_holder_03").fadeOut(100);
         // $("#bottom_holder_04").fadeOut(100);
         $("#bottom_holder_01").removeClass("bottom_btn_01").fadeOut(100);
         $("#bottom_holder_02").removeClass("bottom_btn_02").fadeOut(100);
         $("#bottom_holder_03").removeClass("bottom_btn_03").fadeOut(100);
         $("#bottom_holder_04").removeClass("bottom_btn_05").fadeOut(100);
         $("#content_set_04").removeClass("check").fadeOut(100);
         
         $("#info").fadeIn();
         $("#btn_01").css("background-position", "left top").delay(300).animate({left:"0px"},1).fadeIn();
         $("#btn_02").css("background-position", "left top").delay(300).animate({left:"193px"},1).fadeIn();
         $("#btn_03").css("background-position", "left top").delay(300).animate({left:"386px"},1).fadeIn();
         $("#btn_05").css("background-position", "left top").animate({left:"772px"},1).fadeIn();
      }else{
         $(this).css("background-position", "right top").delay(200).animate({left:"0px"},500).addClass("selected"); 
         $("#btn_01, #btn_02, #btn_03, #btn_05").fadeOut();
         $("#info").fadeOut();
         $("#content_bg").delay(700).fadeIn();
         
         $("#content_set_04").delay(700).fadeIn(800).addClass("check");
         $("#content_set_01, #content_set_02, #content_set_03, #content_set_05").fadeOut(300).removeClass("check");

         $("#bottom_holder_set").delay(700).fadeIn(function(){
            if($("#btn_01").hasClass("selected")){
                $("#bottom_holder_01").removeClass("bottom_btn_02_selected").addClass("bottom_btn_01_selected").css("background-position", "left bottom").animate({left:"0px"},1).fadeTo(200,1);
            }else{
                $("#bottom_holder_01").removeClass("bottom_btn_02").addClass("bottom_btn_01").css("background-position", "left top").animate({left:"0px"},1).fadeTo(200,1);
            };
            if($("#btn_02").hasClass("selected")){
                $("#bottom_holder_02").removeClass("bottom_btn_03_selected").addClass("bottom_btn_02_selected").css("background-position", "left bottom").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            }else{
                $("#bottom_holder_02").removeClass("bottom_btn_03").addClass("bottom_btn_02").css("background-position", "left top").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            };
            if($("#btn_03").hasClass("selected")){
                $("#bottom_holder_03").removeClass("bottom_btn_04_selected").addClass("bottom_btn_03_selected").css("background-position", "left bottom").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            }else{
                $("#bottom_holder_03").removeClass("bottom_btn_04").addClass("bottom_btn_03").css("background-position", "left top").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            };
            if($("#btn_05").hasClass("selected")){
                $("#bottom_holder_04").removeClass("bottom_btn_04_selected").addClass("bottom_btn_05_selected").css("background-position", "right bottom").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }else{
                $("#bottom_holder_04").removeClass("bottom_btn_04").addClass("bottom_btn_05").css("background-position", "right top").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }
         });
      }
   });

   $("#btn_05").click(function(){
      if($("#content_set_05").hasClass("check")){
         $(this).css("background-position", "left top").delay(100).animate({left:"772px"},700).addClass("selected"); 
         $("#content_bg").fadeOut(100);
         // $("#bottom_holder_01").fadeOut(100);
         // $("#bottom_holder_02").fadeOut(100);
         // $("#bottom_holder_03").fadeOut(100);
         // $("#bottom_holder_04").fadeOut(100);
         $("#bottom_holder_01").removeClass("bottom_btn_01").fadeOut(100);
         $("#bottom_holder_02").removeClass("bottom_btn_02").fadeOut(100);
         $("#bottom_holder_03").removeClass("bottom_btn_03").fadeOut(100);
         $("#bottom_holder_04").removeClass("bottom_btn_04").fadeOut(100);
         $("#content_set_05").removeClass("check").fadeOut(100);
         
         $("#info").fadeIn();
         $("#btn_01").css("background-position", "left top").delay(300).animate({left:"0px"},1).fadeIn();
         $("#btn_02").css("background-position", "left top").delay(300).animate({left:"193px"},1).fadeIn();
         $("#btn_03").css("background-position", "left top").delay(300).animate({left:"386px"},1).fadeIn();
         $("#btn_04").css("background-position", "left top").delay(300).animate({left:"579px"},1).fadeIn();
      }else{
         $(this).css("background-position", "right top").delay(200).animate({left:"0px"},500).addClass("selected");  
         $("#btn_02, #btn_03, #btn_04, #btn_01").fadeOut();
         $("#info").fadeOut();
         $("#content_bg").delay(800).fadeIn();

         $("#content_set_05").delay(800).fadeIn(800).addClass("check");
         $("#content_set_01, #content_set_02, #content_set_03, #content_set_04").fadeOut(300).removeClass("check");

         $("#bottom_holder_set").delay(800).fadeIn(function(){
            if($("#btn_01").hasClass("selected")){
                $("#bottom_holder_01").removeClass("bottom_btn_02_selected").addClass("bottom_btn_01_selected").css("background-position", "left bottom").animate({left:"0px"},1).fadeTo(200,1);
            }else{
                $("#bottom_holder_01").removeClass("bottom_btn_02").addClass("bottom_btn_01").css("background-position", "left top").animate({left:"0px"},1).fadeTo(200,1);
            };
            if($("#btn_02").hasClass("selected")){
                $("#bottom_holder_02").removeClass("bottom_btn_03_selected").removeClass("bottom_btn_03_selected").css("background-position", "left bottom").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            }else{
                $("#bottom_holder_02").removeClass("bottom_btn_03").addClass("bottom_btn_02").css("background-position", "left top").animate({left:"112px"},1).delay(150).fadeTo(200,1);
            };
            if($("#btn_03").hasClass("selected")){
                $("#bottom_holder_03").removeClass("bottom_btn_04_selected").addClass("bottom_btn_03_selected").css("background-position", "left bottom").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            }else{
                $("#bottom_holder_03").removeClass("bottom_btn_04").addClass("bottom_btn_03").css("background-position", "left top").animate({left:"224px"},1).delay(300).fadeTo(200,1);
            };
            if($("#btn_04").hasClass("selected")){
                $("#bottom_holder_04").removeClass("bottom_btn_05_selected").addClass("bottom_btn_04_selected").css("background-position", "left bottom").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }else{
                $("#bottom_holder_04").removeClass("bottom_btn_05").addClass("bottom_btn_04").css("background-position", "left top").animate({left:"336px"},1).delay(450).fadeTo(200,1);
            }
         });
      }
   });

    $("#bottom_holder_01").click(function(){
   	if($(this).hasClass("bottom_btn_01") || $(this).hasClass("bottom_btn_01_selected")){
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_02_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_02").css("background-position", "right top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_03_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_03").css("background-position", "right top");
   		}
   		if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_04_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_04").css("background-position", "right top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_01").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_02, #content_set_03, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");
	   	
	   	$("#btn_02, #btn_03, #btn_04, #btn_05").fadeOut(function(){
	   	 	$("#btn_01").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});
   	}else{
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_03_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_03").css("background-position", "right top");
   		}
   		if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_04_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_04").css("background-position", "right top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_02").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_03, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");
   		
   		$("#btn_01, #btn_03, #btn_04, #btn_05").fadeOut(function(){
	   	 	$("#btn_02").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});
   	}

   });
   $("#bottom_holder_02").click(function(){
   	if($(this).hasClass("bottom_btn_02")|| $(this).hasClass("bottom_btn_02_selected")){
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_03_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_03").css("background-position", "right top");
   		}
   		if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_04_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_04").css("background-position", "right top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_02").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_03, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");
        
        $("#btn_01, #btn_03, #btn_04, #btn_05").fadeOut(function(){
	   	 	$("#btn_02").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});

   	}else{
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_02_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_02").css("background-position", "left top");
   		}
   		if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_04_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_04").css("background-position", "right top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_03").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_02, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");

        $("#btn_01, #btn_02, #btn_04, #btn_05").fadeOut(function(){
	   	 	$("#btn_03").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});
   	}

   });
   $("#bottom_holder_03").click(function(){
   	if($(this).hasClass("bottom_btn_03")|| $(this).hasClass("bottom_btn_03_selected")){
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_02_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_02").css("background-position", "left top");
   		}
   		if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_04_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_04").css("background-position", "right top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_03").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_02, #content_set_04, #content_set_05").fadeOut(300).removeClass("check");

        $("#btn_01, #btn_02, #btn_04, #btn_05").fadeOut(function(){
	   	 	$("#btn_03").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});

   	}else{
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_02_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_02").css("background-position", "left top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_03_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_03").css("background-position", "left top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_04").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_02, #content_set_03, #content_set_05").fadeOut(300).removeClass("check");

        $("#btn_01, #btn_02, #btn_03, #btn_05").fadeOut(function(){
	   	 	$("#btn_04").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});
   	}

   });
   $("#bottom_holder_04").click(function(){
   	if($(this).hasClass("bottom_btn_04")|| $(this).hasClass("bottom_btn_04_selected")){
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_02_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_02").css("background-position", "left top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_03_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_03").css("background-position", "left top");
   		}
        if($("#btn_05").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_05_selected").css("background-position", "right bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_05").css("background-position", "right top");
   		}

        $("#content_set_04").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_02, #content_set_03, #content_set_05").fadeOut(300).removeClass("check");

        $("#btn_01, #btn_02, #btn_03, #btn_05").fadeOut(function(){
	   	 	$("#btn_04").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});

   	}else{
   		if($("#btn_01").hasClass("selected")){
   			$("#bottom_holder_01").removeClass().addClass("bottom_btn_01_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_01").removeClass().addClass("bottom_btn_01").css("background-position", "left top");
   		}
   		if($("#btn_02").hasClass("selected")){
   			$("#bottom_holder_02").removeClass().addClass("bottom_btn_02_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_02").removeClass().addClass("bottom_btn_02").css("background-position", "left top");
   		}
   		if($("#btn_03").hasClass("selected")){
   			$("#bottom_holder_03").removeClass().addClass("bottom_btn_03_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_03").removeClass().addClass("bottom_btn_03").css("background-position", "left top");
   		}
        if($("#btn_04").hasClass("selected")){
   			$("#bottom_holder_04").removeClass().addClass("bottom_btn_04_selected").css("background-position", "left bottom");
   		}else{
            $("#bottom_holder_04").removeClass().addClass("bottom_btn_04").css("background-position", "left top");
   		}

        $("#content_set_05").delay(300).fadeIn(500).addClass("check");
   	    $("#content_set_01, #content_set_02, #content_set_03, #content_set_04").fadeOut(300).removeClass("check");

        $("#btn_01, #btn_02, #btn_03, #btn_04").fadeOut(function(){
	   	 	$("#btn_05").css("left", "0").css("background-position", "right top").fadeIn().addClass("selected"); 
	   	});
   	}

   });

});
