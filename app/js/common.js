$(function() {

	$('.main_slider').owlCarousel({
		items:1,
		dots:false,
        nav:true,
		loop:true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 300
	});
    $('.news_slider').owlCarousel({
        items:1,
        dots:true,
        nav:true,
        loop:true
    });

    // top search
    $(".search_icon").on("click", function() {
        $(this).siblings('input').toggle(function () {
            if ($(this).is(":visible") == true) {
                $(".search_icon").addClass('active');
            } else {
                $(".search_icon").removeClass('active');
            }
        })
    });

    $(".accordeon dd").hide().prev().click(function() {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
    $('#mob-btn').on('click', function () {
        $('.mob-menu').slideToggle();
    })
});

(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();

//youtube script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '244',
        width: '434',
        videoId: '4elfy_216dI',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
};

var p = document.getElementById ("player");
$(p).hide();

var t = document.getElementById ("thumbnail");
t.src = "img/video-img.png";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
};

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

