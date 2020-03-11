/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

var subtitles= ["Future Neurosurgeon","Young Coder","Co-President of Neighborhood Block Assoc.","Co-founder of The Rusty and River Fields Foundation", "Tennis Player","Lifelong Learner"]
var count = 0;

$(document).ready(function (){
  changeSubtitle();
});

function changeSubtitle() {
  setInterval(function () {
      if (count < subtitles.length - 1) {
          $("#subtitle").html(subtitles[count]);
          count++;
      } else {
          $("#subtitle").html(subtitles[subtitles.length - 1]);
          count = 0;
      }
  }, 1500);
}
