$(document).ready(function() {
    $('#showcase').on('click', function() {
        $('.showcase_overlay').show();
        if (screen.width <= 1024) {
            $('.showcase_overlay').animate({ "bottom": "0%" });
        } else {
            $('.showcase_overlay').animate({ "right": "0%" });
            $('#showcase, .hamburger_icon').hide();
        }
    });
    $('#showcase_close').on('click', function() {
        if (screen.width <= 1024) {
            $('.showcase_overlay').animate({ "bottom": "-100%" });
        } else {
            $('.showcase_overlay').animate({ "right": "-100%" }, function() {
                $('#showcase, .hamburger_icon').show();
            });
        }
        $('.showcase_overlay').show();
    });
    $('.cookie_policy_close').on('click', function(){
        $('.cookie_policy').hide();
    });
    document.getElementById("scrollBlock").style.overflowY = "scroll";
    document.getElementById("scrollBlock").style.overflowX = "hidden";
});