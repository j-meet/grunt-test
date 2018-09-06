$(document).ready(function () {
    /* $('.timeline').css('margin-top', $(window).height()+'px');*/
    /*var html = "";
    $('.tl-year').each(function () {
        html += '<li><a href="#' + $(this).attr('id') + '">' + $(this).attr('id') + '</a></li>'
        console.log(html)
    })
    $('.navigation-links ul').append(html);*/

    /*animate on click of secondary nav*/
    $(document).on('click', '.navigation-links a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('.content a[type="button"]').click(function () {
        $('.landing-module').addClass('moveTop');
        $(window).scrollTop(1);
        $('.social-icons li').addClass('text-black')
        $('.back').addClass('text-black')
        $('.navigation-links').removeClass('opacity0');
    })


    $('.social-icons li').each(function () {
        if ($(this).offset().top > $('.landing-module').height()) {
            $(this).addClass('text-black')
        } else {
            $(this).removeClass('text-black')
        }
    })


    if ($('.back').offset().top > $('.landing-module').height()) {
        $('.back').addClass('text-black')
    } else {
        $('.back').removeClass('text-black')
    }

    if ($('.navigation-links').offset().top > $('.landing-module').height()) {
        $('.navigation-links').removeClass('opacity0');
    } else {
        $('.navigation-links').addClass('opacity0');
    }
})

function handleScroll() {
    /*$('.social-icons li').each(function () {
        if ($(this).offset().top > $('.landing-module').height()) {
            $(this).addClass('text-black')
        } else {
            $(this).removeClass('text-black')
        }
    })

    if ($('.back').offset().top > $('.landing-module').height()) {
        $('.back').addClass('text-black')
    } else {
        $('.back').removeClass('text-black')
    }*/

    /*if ($('.navigation-links').offset().top > $('.landing-module').height()) {
        $('.navigation-links').removeClass('opacity0');
    } else {
        $('.navigation-links').addClass('opacity0');
    }*/






}
var scrollTimer = null;
var isExpanded = true;
var lastScrollTop = 0;

$(window).scroll(function () {

    if ($('.social-icons').offset().top > $('.timeline').offset().top + $('.timeline').height()) {
        $('.social-icons').css('opacity', '0');
    } else {
        $('.social-icons').css('opacity', '1');
    }
    /*if ($(window).scrollTop() < $('.landing-module').height()) {
                $('.landing-module').addClass('shown');
                 $("html, body").animate({
                     scrollTop: $('.landing-module').height()
               }, 600)
                
//                if (scrolled) {
//                    $("html, body").animate({
//                        scrollTop: $('.landing-module').height()
//                    }, 600)
//                    scrolled = false;
//                }
//                else{
//                    $("html, body").animate({
//                        scrollTop: 0
//                    }, 600)
//                    scrolled = true;
//                }
            }
            else{
                $('.landing-module').removeClass('shown');
            }*/

    /**
     * Run functions after scrolling has stopped
     * @param  {Function} callback The function to run after scrolling
     */

    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('#sky').css('transform', 'translate(55px, 55px)');
        $('#Fill-10').css('transform', 'translate(-25px, 0px)');
        // downscroll code
    } else {
        $('#sky').css('transform', 'translate(80px, 55px)');
        $('#Fill-10').css('transform', 'translate(0px, 0px)');
        // upscroll code
    }
    lastScrollTop = st;







});




var scrollStop = function (callback) {

    // Make sure a valid callback was provided
    if (!callback || Object.prototype.toString.call(callback) !== '[object Function]') return;

    // Setup scrolling variable
    var isScrolling;

    // Listen for scroll events
    window.addEventListener('scroll', function (event) {

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {

            // Run the callback
            callback();

        }, 66);

    }, false);

};

// Example
scrollStop(function () {
    //$('.tl-img-paragraph').addClass('floating')

    $('.tl-year').each(function () {
        var that = $(this);
        if ($(window).scrollTop() > that.offset().top - $('.navigation-links').position().top) {
            $('.tl-year').removeClass('active');
            $('.tl-year').removeClass('opacity50');
            that.addClass('active');
            $('.navigation-links li a').each(function () {
                if ($(this).attr('href') == ('#' + that.attr('id'))) {
                    $('.navigation-links li').removeClass('active');
                    $('.navigation-links li').addClass('opacity70').addClass('opacity50').addClass('opacity30');
                    $(this).parent().addClass('active').removeClass('opacity50').removeClass('opacity70').removeClass('opacity30');
                    $(this).parent().prev().removeClass('opacity70').removeClass('opacity50').removeClass('opacity30');
                    $(this).parent().next().removeClass('opacity70').removeClass('opacity50').removeClass('opacity30');
                    $(this).parent().prev().prev().removeClass('opacity50').removeClass('opacity30');
                    $(this).parent().next().next().removeClass('opacity50').removeClass('opacity30');
                    $(this).parent().prev().prev().prev().removeClass('opacity30').removeClass('opacity70');
                    $(this).parent().next().next().next().removeClass('opacity30').removeClass('opacity70');
                }
            })
            //$('.navigation-links ul').css('top', '-' + $('.navigation-links li.active').position().top + 'px')
        }
    })

    if ($(window).scrollTop() == 0) {
        //$('.landing-module').animate({ marginTop: '0px'});
        $('.landing-module').removeClass('moveTop')
        $('.social-icons li').removeClass('text-black')
        $('.back').removeClass('text-black')
        $('.navigation-links').addClass('opacity0');
        isExpanded = true;
    } else if (isExpanded) {
        //$('.landing-module').animate({ marginTop: '-'+$(window).height() + 'px' });
        $('.landing-module').addClass('moveTop');
        $(window).scrollTop(1);
        $('.social-icons li').addClass('text-black')
        $('.back').addClass('text-black')
        $('.navigation-links').removeClass('opacity0');
        isExpanded = false;
    }
});