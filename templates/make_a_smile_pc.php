<?php
/*
Template Name: The Making of a Smile PC
*/
?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/css/make_a_smile.css" />
<script type="text/javascript"> var templateUrl = "<?php bloginfo('stylesheet_directory'); ?>"; </script>
<script type="text/javascript" src="<?php bloginfo('stylesheet_directory'); ?>/js/make_a_smile.js" /></script>

<?php if (!$_GET['ajax']) get_header();?>

<div class="main" >
    <div class="title_wrap cf">
      <div class="title_wrap_01">
        <div class="title">THE MAKING OF A SMILE</div>
        <div class="sub_title">Dr. Michael Apa takes you inside the design & planning of a cosmetic smile lift.</br>See the transformation from the first to final appointment.</div>
      </div>
      <div id="info">CLICK BELOW TO VIEW MORE INFORMATION</div>
    </div>
    <div class="wrap">
<!--  Five Big Buttons -->
      <div id="btn_01" class="btn"></div><img id="background_image_btn_01" src="#" style="display:none;"/>
      <div id="btn_02" class="btn"></div><img id="background_image_btn_02" src="#" style="display:none;"/>
      <div id="btn_03" class="btn"></div><img id="background_image_btn_03" src="#" style="display:none;"/>
      <div id="btn_04" class="btn"></div><img id="background_image_btn_04" src="#" style="display:none;"/>
      <div id="btn_05" class="btn"></div><img id="background_image_btn_05" src="#" style="display:none;"/>
<!--  Four Bottom Button Holders-->      
      <div id="bottom_holder_set">
        <div id="bottom_holder_01"></div>
        <div id="bottom_holder_02"></div>
        <div id="bottom_holder_03"></div>
        <div id="bottom_holder_04"></div>
      </div>
<!--  Content's Background--> 
      <div id="content_bg"></div>
<!--  Content Set_01--> 
      <div id="content_set_01" class="content_set">
          <div id="set_01_text" class="content_text">Dr. Apa fits a temporary smile to the patient. He then minimally</br>shapes and fits their teeth for the temporary veneers they will</br>wear for just under a week. This unique step allows patients to</br>test drive their new, improved smile. 
          </div>
          <div id="set_01_pic" class="content_pic"></div>
          <img id="background_image_set_01" src="#" style="display:none;"/>
      </div>
<!--  Content Set_02--> 
      <div id="content_set_02" class="content_set">
          <div id="set_02_text" class="content_text">Dr. Apa creates permanent veneers for the patient. After wearing the</br>temporary smile, the patient returns to provide feedback on the look and</br>fit of their veneers. Using this feedback, a master ceramist makes a new</br>mold before creating the final veneers.  
          </div>
          <div id="set_02_pic" class="content_pic"></div>
          <img id="background_image_set_02" src="#" style="display:none;"/>
      </div>
<!--  Content Set_03--> 
      <div id="content_set_03" class="content_set">
          <div id="set_03_text" class="content_text">Dr. Apa fits the patient with the permanent veneers. At this time, he</br>removes the temporary veneers and the patient receives their new,</br>permanent smile. 
          </div>
          <div id="set_03_pic" class="content_pic"></div>
          <img id="background_image_set_03" src="#" style="display:none;"/>
      </div>
<!--  Content Set_04--> 
      <div id="content_set_04" class="content_set">
          <div id="set_04_text" class="content_text">During this final re-contouring appointment, Dr. Apa applies the finishing</br>touches to the patient’s new smile. It occurs one to two days after the</br>veneers are fitted.
          </div>
          <div id="set_04_pic" class="content_pic"></div>
          <img id="background_image_set_04" src="#" style="display:none;"/>
      </div>
<!--  Content Set_05--> 
      <div id="content_set_05" class="content_set">
          <div id="set_05_text" class="content_text">Veneers, if treated properly, should look and feel great for up to 15 years</br>after their placement. Most patients forget they have them after a month</br>or so because facial muscles adapt to the new teeth and make them look</br>more natural than the day they were put in.</br></br>This patient needed width added to her smile to offset her narrow chin.</br>She also needed to restore harmony between the nose, chin, and smile.</br>To do this, Dr. Apa canted the nose to the right and the chin to the left. By</br>centering the teeth, closing gaps, and widening the smile, Dr. Apa drew</br>attention away from the asymmetries and created the illusion of facial harmony. This is the power of great aesthetic dentistry. 
          </div>
          <div id="set_05_pic" class="content_pic_02"></div>
          <img id="background_image_set_05" src="#" style="display:none;"/>
      </div>

    </div>
  </div>

<script type="text/javascript">
$(document).ready(function() {

    $("#loadingBox_RA").fadeOut(100);
    var background_image_url = new Array();
    var background_image_set_url = new Array();

    for(var i=0; i<5; i++)
    {
      background_image_url[i] = templateUrl + '/img/treatments/make_a_smile/0' + (i+1) + '/btn_0' + (i+1) + '.jpg';
    }

    $("#background_image_btn_01").one("load", function() {
      $("#btn_01").css("background-image", 'url('+background_image_url[0]+')');
      $("#btn_01").animate({opacity:1});
    }).attr("src", background_image_url[0]);

    $("#background_image_btn_02").one("load", function() {
      $("#btn_02").css("background-image", 'url('+background_image_url[1]+')');
      $("#btn_02").animate({opacity:1});
    }).attr("src", background_image_url[1]);

    $("#background_image_btn_03").one("load", function() {
      $("#btn_03").css("background-image", 'url('+background_image_url[2]+')');
      $("#btn_03").animate({opacity:1});
    }).attr("src", background_image_url[2]);

    $("#background_image_btn_04").one("load", function() {
      $("#btn_04").css("background-image", 'url('+background_image_url[3]+')');
      $("#btn_04").animate({opacity:1});
    }).attr("src", background_image_url[3]);

    $("#background_image_btn_05").one("load", function() {
      $("#btn_05").css("background-image", 'url('+background_image_url[4]+')');
      $("#btn_05").animate({opacity:1});
    }).attr("src", background_image_url[4]);

    for(var j=0; j<5; j++)
    {
      background_image_set_url[j] = templateUrl + '/img/treatments/make_a_smile/0' + (j+1) + '/set_0' + (j+1) + '_pic.jpg';
    }
    
    $("#background_image_set_01").one("load", function() {
      $("#set_01_pic").css("background-image", 'url('+background_image_set_url[0]+')');
      $("#set_01_pic").animate({opacity:1});
    }).attr("src", background_image_set_url[0]);

    $("#background_image_set_02").one("load", function() {
      $("#set_02_pic").css("background-image", 'url('+background_image_set_url[1]+')');
      $("#set_02_pic").animate({opacity:1});
    }).attr("src", background_image_set_url[1]);

    $("#background_image_set_03").one("load", function() {
      $("#set_03_pic").css("background-image", 'url('+background_image_set_url[2]+')');
      $("#set_03_pic").animate({opacity:1});
    }).attr("src", background_image_set_url[2]);

    $("#background_image_set_04").one("load", function() {
      $("#set_04_pic").css("background-image", 'url('+background_image_set_url[3]+')');
      $("#set_04_pic").animate({opacity:1});
    }).attr("src", background_image_set_url[3]);

    $("#background_image_set_05").one("load", function() {
      $("#set_05_pic").css("background-image", 'url('+background_image_set_url[4]+')');
      $("#set_05_pic").animate({opacity:1});
    }).attr("src", background_image_set_url[4]);

});
</script>
