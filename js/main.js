$(document).ready(function() {

    //get in touch with us.
    var GetInTouch = function() {
        $('#work, #idea, #improve, #question').hide();
    }
    GetInTouch();
    
    $('#select').change(function() {
        GetInTouch();
        $('#' + $(this).val()).fadeIn(1000);
    });
    $('.close').click(function() {
        $('.jumbotron').fadeOut(1000);
    });


    //display back to top button & customize header
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#backToTop').fadeIn();
            $('nav').addClass('navbgScrolled');
        } else {
            $('#backToTop').fadeOut();
            $('nav').removeClass('navbgScrolled');
        }
    });

    //back to top
    $('#backToTop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000)
        return false;
    });

    //harmburger menu
    $(".harmburger, .navItems").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".harmburger").toggleClass("change");
        });
    });

    //scroll down animation
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top-80
        }, 1000)
    });

    // invoke the carousel
    $('#myCarousel, #otherCarousel').carousel({
    interval: false
    });

    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
            
        }
        else{
            $(this).carousel('next');
            
        }
    });

    //scroll slides on swipe for touch enabled devices 
    $("#myCarousel").on("touchstart", function(event){
        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function(event){
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });

    //show and hide partner photos desktop
    $("#moji").hide();
    $("#dami").hide();
    $(".samnext").click(function(e) {
        e.preventDefault();            
        $("#sam").fadeOut(1000, function() {
            $("#moji").fadeIn(1200);
        });
    });
    $(".samprev").click(function(e) {
        e.preventDefault();            
        $("#sam").fadeOut(1000, function() {
            $("#dami").fadeIn(1200);
        });            
    });
    
    $(".mojinext").click(function(e) {
        e.preventDefault();            
        $("#moji").fadeOut(1000, function() {
            $("#dami").fadeIn(1200);
        });
    });
    $(".mojiprev").click(function(e) {
        e.preventDefault();            
        $("#moji").fadeOut(1000, function() {    
            $("#sam").fadeIn(1200);
        });
    });
    
    $(".daminext").click(function(e) {
        e.preventDefault();            
        $("#dami").fadeOut(1000, function() {
            $("#sam").fadeIn(1200);
        });
    });
    $(".damiprev").click(function(e) {
        e.preventDefault();            
        $("#dami").fadeOut(1000, function() {
            $("#moji").fadeIn(1200);
        });
    });

    //initialize tooltip
    $('[data--toggle=tooltip]').tooltip();

    //copy to clipboard
    // $(".clickToCopy").click(function(e) {
    //     e.preventDefault();
    //     $(this).siblings('a.email').select();
    //     document.execCommand("copy");
    //     alert("email copied!");
    // });

    //check if element is scrolledinto view
    function isScrolledIntoView(e) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(e).offset().top;
        var elemBottom = elemTop + $(e).outerHeight();

        return ((elemTop < docViewBottom) && (elemBottom > docViewTop));
    }

    //if element is scrolled into view, animate it
    $(window).scroll(function() {
        $('.animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('fadeIntoView');
            }
        });
    });
});