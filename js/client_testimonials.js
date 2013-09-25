var currentBox = "box01";

$("#" + currentBox).css({"background-color":"#26EBC9"});
$("#" + currentBox + " td").css({"font-weight":"bold"});

showHtml(currentBox);

var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
var click_event = isMobile ? "touchstart" : "click";

$(".miniBox, .doubleBox").bind(click_event, function(){
	var id=$(this).attr('id');
	
	if (currentBox == id) return;
	if ($("#testimonialText").css("opacity") <= 0.6) return;

	$("#" + currentBox).css({"background-color":"#949499"});
	$("#" + currentBox + " td").css({"font-weight":"normal"});

	$(this).css({"background-color":"#26EBC9"});
	$("#" + id + " td").css({"font-weight":"bold"});

	currentBox = id;
	showHtml(id);
});

function showTheTestimonial(id){
	var returnHtml = new Array();
	returnHtml[0] = "";
	returnHtml[1] = "";

	switch(id)
	{
		case "box01":
			returnHtml[0] = "I Love My New Smile!<br/>—JULIE";
			returnHtml[1] = "Hey Dr. Apa!<br/>I just wanted to write to you and tell you how much I LOVE my teeth! I can’t thank you enough for the amazing<br/> job you did! I didn’t get a chance to tell you in the office, and I know you are super busy, so I didn’t want to bother<br/> you when I left, but I wanted to take the time to write to you, and tell you how ecstatic I am with my new smile! It<br/> has made all the difference in the world, and my smile looks so natural! No one would ever think I have veneers,<br/> they would just assume I have gorgeous teeth! You really are an artist, and you are the best at what you do. I am<br/> so grateful that you were the one that worked on my teeth, and I can’t wait to come in and get the bottom done!<br/> Also, thank you so much for giving me a discount, it really means a lot to me, and it’s a big deal. I look forward to<br/> seeing you soon, and I hope that the girls in the office saved you a cupcake or two! Thanks again so much! ";
			break;
		case "box02":
			returnHtml[0] = "Thank You—This Means So Much<br/>—RODNI";
			returnHtml[1] = "Dear Dr. Apa,<br/>Thank you so much for seeing me on Wednesday. I can&#39;t even begin to tell you what this means to me. When I was<br/> a medical student, I went for emergent dental work with a female dentist who was also one of the professors at<br/> the dental school. During my root canal, she said to me, &ldquo;Omigod&#33; You are supposed to be a professional. How<br/> can you let this happen, having such poor dentition&#63;&rdquo; That has really stuck with me over the years. Certainly, I<br/> didn&#39;t intend for this to happen, but going through med school with children, having married at seventeen…you<br/> have to make certain sacrifices. When you mentioned that factors like these are why you haven&#39;t had children,<br/> etc…you were so right&#33; It is a struggle. I am finally getting to a point where I can venture to think about doing this<br/> for myself and I am BEYOND excited&#33; I can&#39;t even imagine smiling without feeling like I have this horrible &ldquo;missing<br/> teeth&rdquo; jawline. &#40;You know, the whole…&ldquo;you can take the girl out of the trailer park, but you can&#39;t…&rdquo; look&#41;.<br/><br/> I so enjoyed meeting you and immediately felt at ease. I appreciate your non-judgmental attitude. That means so<br/> much to me. I was very nervous making such a big expensive trip for a dental visit thinking, &ldquo;Man, what if this guy<br/> is some pompous ass that makes me feel horrible&#63;&rdquo; Unfortunately, many of the dental students I remember were<br/> the silver spoon crowd. But you made me feel at ease, and I appreciate that.<br/><br/>Oh, interestingly, we went to the 3 Guys Cafe for lunch and one of the waiters saw my envelope from the office<br/> and asked, &ldquo;Hey you goin to see Larry&#63; Or Mike&#63;&rdquo; I said I was going to see you and he said that you did his wife&#39;s<br/> smile. He showed me a beautiful wedding photo of the two of them on his Palm Pre and was so pleased with<br/> everything. I thought that was a great compliment. I am working out all of the details to try to get my work<br/> planned as soon as I can. I am so incredibly excited, you have no idea&#33; Thank you so much, for everything&#33; I will<br/> hopefully see you soon.";
			break;
		case "box03":
			returnHtml[0] = "I Felt Like a VIP<br/>—VENESA";
			returnHtml[1] = "Dear Dr. Rosenthal and Dr. Apa,<br/>I would like to let you know how much I enjoyed my latest experience with you and your team (except, of course,<br/> for those 12 hours of post bonding&#33;) As usual, everyone was professional, pleasant and attentive. I may not be a<br/> celebrity, but I felt like a &ldquo;VIP&rdquo; anyway&#33; I love my new smile&#33; Thank you for helping me achieve it.";
			break;
		case "box04":
			returnHtml[0] = "Thank You Doesn’t Seem Like Enough<br/>—STAN";
			returnHtml[1] = "To Jackie, Dr. Apa, Dr. Rosenthal,<br/>Thank you so much for my fabulous smile&#33; I feel so much better about myself and am so grateful that Paul<br/> referred me to you&#33; I hope you know how much your thoughtfulness has meant to me. God Bless&#33;";
			break;		
		case "box05":
			returnHtml[0] = "Four Years Later And I Coudn’t Be Happier<br/>—CAROL";
			returnHtml[1] = "Dear Dr. Rosenthal, Dr. Apa and the lovely ladies who comprise your staff,<br/>Another testimonial&#33; I couldn&rsquo;t be any more pleased, even if my new smile was gracing the cover of a magazine.<br/><br/>This was not an easy decision for me to undertake. Indeed, it took close to four years for me to find the time and<br/> the courage. But the results are wonderful and I have no doubt that it was the way to go. Your sunny dispositions,<br/> bright smiles and caring demeanors helped at every appointment. And the lovely gift certificate to Paul<br/> Labrecoue was unnecessary but most appreciated. Many thanks to you all.";
			break;	
		case "box06":
			returnHtml[0] = "I Am So Happy With The Outcome!<br/>—LUANA";
			returnHtml[1] = "Dr. Apa,<br/>I just wanted to thank you for making me look so great&#33; Please let me know if I can do anything to help you look<br/> good too&#33; A BIG thank you to your amazing staff as well.";
			break;	
		case "box07":
			returnHtml[0] = "My Smile is &#35;1<br/>—BROOKE";
			returnHtml[1] = "Dear Dr. Rosenthal,<br/>I want to thank you for changing my life by giving me a smile that gives me confidence and finally the ability to<br/> smile. I just won two gigantic awards at my national meetings and had to go on the stage and give a speech. I<br/> didn&rsquo;t know I won ahead of time so I had no idea I would have to do that. I am petrified on stage but managed to<br/> do it thanks to my new smile. My short off the cuff speech thanked a couple of people and then I said that before<br/> this job I always thought I was a &#35;2, my job allowed me to set a goal, achieve it and win &#35;1 for my sales in 2008. I<br/> could not have done this without my smile. Thank you&#33;";
			break;	
		case "box08":
			returnHtml[0] = "Thanks To The Entire Group<br/>—Kathryn";
			returnHtml[1] = "Dr. Apa & the entire Rosenthal Apa Group,<br/>Thank you so much for changing my life&#33; You are the best&#33; Thank you for always making me feel like a queen<br/> everytime I have an appointment. Finally, thank you for giving me a smile that I&rsquo;m not afraid to show&#33;";
			break;
		case "box09":
			returnHtml[0] = "I Appreciate Your Concern For My Health<br/>—TEVFIK";
			returnHtml[1] = "Dear Dr. Rosenthal,<br/>I wanted to take this opportunity to thank you for doing such a great job. Your care for my health made this<br/> process so much less painful. Your professionalism in this field could only be compared to such great talent as A.<br/> Einstein in human understanding of science. I greatly appreciate your concern for my health.";
			break;	
		case "box10":
			returnHtml[0] = "Thank You and God Bless<br/>—MAYLEN";
			returnHtml[1] = "Dr. Michael Apa,<br/>Thank you for making me and other people look and feel better. God blessed you with a talent and you are using<br/> it. I wish you all the health, love and happiness in your life.";
			break;	
		case "box11":
			returnHtml[0] = "Ever Grateful<br/>—KELLY";
			returnHtml[1] = "Dr. Apa and Rosenthal,<br/>There are very few people in the world you can depend on…apparently your DENTIST is one if not THE &#35;1<br/> of them&#33;";
			break;
		case "box12":
			returnHtml[0] = "Thank You From The Depths of My Heart<br/>—SANDRA";
			returnHtml[1] = "Dear Dr. Rosenthal,<br/>Words can not express the joy and happiness that I feel you have given to me&#33; Your continuous acts of kindness<br/> blew me away. I know that you will get a 100 fold right back to you for your amazing heart. You have made one<br/> girl—so happy. It&rsquo;s easy to say thank you, but it&rsquo;s harder to convey the deep and heartfelt gratitude I really feel<br/> today—but maybe, having said this much, by now I&rsquo;ve let you know your thoughtfulness means more to me than<br/> words will ever show.";
			break;
		case "box13":
			returnHtml[0] = "Thank You For My Smile<br/>—CAROLINE";
			returnHtml[1] = "Dear Larry,<br/>Thank you so much for taking so much time and thoughtful consideration on my smile. I&rsquo;m really very happy with<br/> the results, have no tenderness and consider myself lucky to have taken an impulsive moment&sbquo; corrected and put<br/> back together in such a seamless way. I will always be grateful to you and your amazing staff&#33;";
			break;
	}

	return returnHtml;
}

function showHtml(id){
	var containerTitle = $("#testimonialTitle");
	var container = $("#testimonialText");
	var innerHtml = new Array();

	innerHtml = showTheTestimonial(id);

	container.fadeOut(function() {


		containerTitle.html(innerHtml[0]);
		container.html(innerHtml[1]);
	});

	container.fadeIn();
}

$(document).ready(function() {
    $("#loadingBox_RA").fadeOut(100);

});
