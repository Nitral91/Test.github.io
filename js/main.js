$(document).ready(function() {
    $('.start .button').click(function() {
        $('.right-bar').addClass('second');
        $('.footer').css('width', '80%');
        $('.footer ul li').css('margin', '0 30px');
        $('.start').fadeOut();
        $('.second').fadeIn();
    });
    $('.second button.button').click(function() {
        $('.main-page .second').removeClass('visible');
        $('.right-bar').addClass('form');
        $('.right-bar .content').fadeOut();
        $('.form').fadeIn();
    });
    $('.second button').click(function() {
        $('.second button').removeClass('active');
        $(this).addClass('active');
        $('.second button.button').fadeIn();
    });
    $('.var_a').click(function() {
        $('.main-page .second').removeClass('visible');
        $('.main-page .second.var_a').addClass('visible');
    });
    $('.var_b').click(function() {
        $('.main-page .second').removeClass('visible');
        $('.main-page .second.var_b').addClass('visible')
    });
    $('.var_c').click(function() {
        $('.main-page .second').removeClass('visible');
        $('.main-page .second.var_c').addClass('visible')
    });
    $('form .flex label').click(function() {
        $('form .flex label').removeClass('checked');
        $(this).addClass('checked');
    });
});
$(document).click(function () {
    function checkParams() {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        if($('.flex input').is(':checked') && name.length != 0 && email.length != 0 && password.length != 0 && $('#confirm').is(':checked')) {
            $('#submit').removeAttr('disabled');
        } else {
            $('#submit').attr('disabled', 'disabled');
        }
    }
    checkParams();
});
