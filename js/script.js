$(document).ready(function() {
    $(document).on('click', '.appli-rt-content .tab li', function() {
        var ind = $(this).index();
        $('.appli-rt-content .tab li').removeClass('selected');
        $(this).addClass('selected');
        $('.appli-tofillform').addClass('hide');
        $('.appli-tofillform').eq(ind).removeClass('hide');
    });


    $(document).on('click', '#saveInfo,.saveprofile', function() {
        $('.appli-ai-container').load('/templates/myprofile.html');
    });

    $(document).on('click', '#choosecountry', function() {
        $('.appli-ai-container').load('/templates/recommendationcountry.html');
    });
    $(document).on('click', '#choosemajor', function() {
        $('.appli-ai-container').load('/templates/recommendationcourse.html');
    });

    $(document).on('click', '#belowoptions', function() {
        $(this).parent().find('ul').slideDown();
    });


    $(document).on('click', '#dashboard', function() {
        $('nav ul li').removeClass('active');
        $('.appli-ai-container').load('/templates/dashboard.html');
        $(this).addClass('active');
    });

    var accordsuitable = function() {
        $(".accord-arrow").click(function() {
            $(this).parent().parent('.Rtable-row').find(".accordion-container").slideToggle();
            $(this).parent().parent('.Rtable-row').prevAll(".Rtable-row").find(".accordion-container").slideUp();
            $(this).parent().parent('.Rtable-row').nextAll(".Rtable-row").find(".accordion-container").slideUp();
            $(this).parent().parent('.Rtable-row').toggleClass('selected');
            $(this).parent().parent('.Rtable-row').prevAll(".Rtable-row").removeClass('selected');
            $(this).parent().parent('.Rtable-row').nextAll(".Rtable-row").removeClass('selected');
        });
    }




    $(document).on('click', '#myprogram', function() {
        $('.appli-ai-container').load('/templates/myprograms.html', function() {
            accordsuitable();

            $(".left-menu-nav li p").click(function() {
                if ($(this).hasClass('suitablePg')) {
                    $('.appli-right').load('/templates/suitableprograms.html', function() {
                        $('.appli-ai-myprograms .breadcrumbs a').text('My Programs/Suitable Programs');
                        accordsuitable();
                    });
                } else if ($(this).hasClass('applicationMg')) {
                    $('.appli-right').load('/templates/applicationtracking.html', function() {
                        $('.appli-ai-myprograms .breadcrumbs a').text('My Programs/Application Management/Application Tracking');
                        $('.card button').on('click', function() {
                            $('.appli-ai-myprograms .breadcrumbs a').text('My Programs/Application Management/Application Tracking/MIT');
                            $('.appli-right').load('/templates/university-mit.html', function() {

                            });
                        });
                    });
                }
                $(this).parent('.parent-li').find(".sub-menu").slideToggle();
                $(this).parent('.parent-li').prevAll(".parent-li").find(".sub-menu").slideUp();
                $(this).parent('.parent-li').nextAll(".parent-li").find(".sub-menu").slideUp();
                $(this).parent('.parent-li').toggleClass('selected');
                $(this).parent('.parent-li').prevAll(".parent-li").removeClass('selected');
                $(this).parent('.parent-li').nextAll(".parent-li").removeClass('selected');
            });
        });
        $('nav ul li').removeClass('active');
        $(this).addClass('active');
    });
});