$(function () {


    var bgColor = ['#2E8B57', '#FFB6C1', '#DEB887', '#808080', '#6B8E23', '#3CB371', '#D2B48C', '#CD853F'];
    $('.mainVisual .inner').css({ background: bgColor[0] });


    $('.right_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.mainVisual .left_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

        $('.mainVisual .inner').css({ background: bgColor[c] });
        // $('.num').text((c ? c + 1 : 1) + ' / ' + bgColor.length);
    });

    $('.right_slide').slick({
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
    });

    $('.arrows i:nth-child(1)').on('click', function () {
        $('.right_slide').slick('slickPrev')
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.right_slide').slick('slickNext')
    });

    $(window).on('wheel', function (event) {
        console.log(event)
        var wdY = event.originalEvent.deltaY; // 100 , -100 
        if (wdY > 0) {
            $('.topBanner').addClass('on')
        } else {
            $('.topBanner').removeClass('on')
        }
    });

    $('.slides .inner').slick();

    $('.prdSlide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
    });

    $('.gnb button').on('click', function () {
        $('.menubar').slideToggle()
    })
})


