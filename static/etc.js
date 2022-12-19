$(document).ready(function(){
	btop();
	showHide();
	
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
	3000);
});

});
$('.lightbox').click(function(e) {lightbox('data')});
function lightbox (data) {	
		if($('.lightbox').size() == 0){
		var theShadow = $('<div id="lightbox-shadow"></div>');
		var theLightbox = $('<div class="lightbox"></div>');
		$('body').append(theShadow);
		$('body').append(theLightbox);
	}
	var el = $('.lightbox');
	el.empty();
	el.append(data);
	el.addClass('lightbox');
	$('#lightbox-shadow').show();
	el.css({
	    position: 'fixed',
	    left: ($(window).width()
	        - el.outerWidth()) / 2,
	    top: ($(window).height()
		    - el.outerHeight()) / 2
	});

    $(window).resize(function() {
        el.css({
        position: 'fixed',
        left: ($(window).width()
	        - el.outerWidth()) / 2,
	    top: ($(window).height()
	        - el.outerHeight()) / 2
	    });
	});

	// To initially run the function:
	$(window).resize();
	el.show();
	$('#lightbox-shadow').show();
}
$(document).keyup(function(e) {
  if (e.keyCode == 13) { $('.save').click(); }     // enter
  if (e.keyCode == 27) {
 		$("#ldt_note").removeClass("lightbox").hide();
		$('body').removeClass("underlay");
		$('.lightbox').removeAttr('style');
		$('.lightbox').hide();
		$('#lightbox-shadow').hide();
  }   // esc
});
function btop(){
	$('body').append('<img id="mod_scroll_top" style="position: fixed; top: 0%; right: 0%;" src="http://2.bp.blogspot.com/_rKG-ziTSNUQ/TPu7_pKmm8I/AAAAAAAACaQ/4XaTpq9sS2g/s1600/merry+christmas+blogger+banner.gif"/>');
	$(window).scroll(function(){
		var current_scroll = $(window).scrollTop();
		if(current_scroll !== 0)  {$('#mod_scroll_top').fadeIn()}
		else $('#mod_scroll_top').fadeOut();
	});
	$('#mod_scroll_top, .topd').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
			},500);
	});
};
 // Shortcode Toggle
function showHide() {
	$('.toggle').hide();
	$('.toggleLink').click(function(e){
		$(this).next().slideToggle();
		e.preventDefault();
	});
}
jQuery('document').ready(function($){
	var commentform=$('#ldt_note'); // find the comment form
	commentform.prepend('<div id="comment-status" ></div>'); // add info panel before the form to provide feedback or errors
	var statusdiv=$('#comment-status'); // define the infopanel
	
	commentform.submit(function(){
			//serialize and store form data in a variable
			var formdata=commentform.serialize();
			//Add a status message
			statusdiv.html('<p>Processing...</p>');
			//Extract action URL from commentform
			var formurl=commentform.attr('action');
			//Post Form with data
			$.ajax({
				type: 'post',
				url: formurl,
				data: formdata,
				error: function(XMLHttpRequest, textStatus, errorThrown){
					statusdiv.html('<p class="ajax-error" >You might have left one of the fields blank, or be posting too quickly</p>');
				},
				success: function(data, textStatus){
					if(data=="success")
						statusdiv.html('<p class="ajax-success" >Thanks for your comment. We appreciate your response.</p>');
					else
						statusdiv.html('<p class="ajax-error" >Please wait a while before posting your next comment</p>');
					commentform.find('textarea[name=comment]').val('');
				}
			});
			$('#main').before('<div class="note">' + $('#comment').val() + '</div>');
			return false;
		
	});
});
jQuery(document).ready(function($) {
	$("#ldt_note").hide();
	$('#addNote').click(function(e) {
		//prevent default action (hyperlink)
		e.preventDefault();
		$("#ldt_note").addClass("lightbox").show();		
	});

});
$(document).ready(function() {
	$("#panel").css({'position':'relative','overflow':'hidden'});
	$("#panel > div:gt(0)").hide();
	
$('#scroller-header a').click(function (e) {
	e.preventDefault();
	$('#scroller-header a').removeClass('active');
	$(this).addClass('active');
	$("#panel > div").hide();

	var link_name = $(this).attr('href');
	$(link_name).show();
	
	return false;		
		
});
	
});
//
jQuery('.open-content').slideToggle(1000, function(){
   var offset = jQuery('.open-content').offset();
   var y = offset.top + jQuery('.open-content').height();
   var wheight = $(window).height()
   var scroll = y - wheight;
   $(document).animate({scrollTop:scroll}, 500);
});
//
jQuery(document).ready(function(){
    jQuery('.ajax').click(function(e){
     	e.preventDefault();
     	var $input = $( this );     	
        doAjaxRequest($input);
     });
});
function doAjaxRequest($input){
     // here is where the request will happen
     var post = $input.attr("data-id");
     var fn = $input.attr("fn");
     jQuery.ajax({
          url: MyAjax.ajaxurl,
          data:{
               'action':'ldt_do_ajax',
               'fn': fn,
               'count': post
               },
          dataType: 'JSON',
  			beforeSend:function(){
			    // this is where we append a loading image
			    $('#lightbox').html('<div class="loading"><img src="/images/loading.gif" alt="Loading..." /></div>');
			  },
          success: callback,
		  error:function(){
		    // failed request; give feedback to user
		    $('#lightbox').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
		  }
     });
}
function callback(string, status) {
	lightbox(string);
}
/* scroll events */
$("#splash").on("mousewheel", function (e) {
    if (e.deltaY <= 0) {
        $('#splash').animate({
            height: 0
        }, 500);
    }
});
$("#content").on("mousewheel", function (e) {
    if (e.deltaY > 0 && $(this).scrollTop() <= 0) {
        $('#splash').animate({
            height: '100%'
        }, 500);
    }
});

/* click events */
$("#splash-footer").on("click", function () {
    $('#splash').animate({
        height: 0
    }, 500);
});
$("#content-header").on("click", function () {
    $('#splash').animate({
        height: '100%'
    }, 500);
});