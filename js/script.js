// Speed used for animations
const SLOW_SPEED = 1000;
const unclickableWindows = [
    '#login-modal', '#toggle-login', '#register-modal', '#toggle-registration',
    '#toggle-inbox-panel', '#inbox-notifications-panel', '#toggle-user-notifications-panel',
    '#user-notifications-panel', '#user-panel', '#toggle-user-panel'
].join(', ');

/**
 * Hides Scroll up button
 */
$("#button--scroll-up").hide();

/**
 * Toggles scroll up button
 */
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
        $("#button--scroll-up").fadeIn("slow");
    } else {
        $("#button--scroll-up").fadeOut("slow");
    }
});

/**
 * Scrolls up when clicked on button
 */
$("#button--scroll-up").click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
});

/**
 * Add Favorite Hover
 */
$(".heart").hover(
    function () {
        $(this).attr("src", "../img/fav-active.png");
    },
    function () {
        $(this).attr("src", "../img/fav-normal.png");
    });

/**
 * Bookmark Hover
 */
$(".read").hover(
    function () {
        $(this).attr("src", "../img/read-later-active.png");
    },
    function () {
        $(this).attr("src", "../img/read-later.png");
    });

/**
 * Shows login modal on screen
 */
$("#toggle-login").click(function (e) {
    $("#login-modal").fadeIn(SLOW_SPEED);
    disableScreen();
});


/**
 * Shows registration modal on screen
 */
$("#toggle-registration").click(function (e) {
    $("#register-modal").fadeIn(SLOW_SPEED);
    disableScreen();
});

$("#toggle-inbox-panel").click(function () {
    $("#inbox-notifications-panel").slideToggle(SLOW_SPEED);
})

$("#toggle-user-notifications-panel").click(function () {
    $("#user-notifications-panel").slideToggle(SLOW_SPEED);
})

$("#toggle-user-panel").click(function () {
    $("#user-panel").slideToggle(SLOW_SPEED);
})

/*
 * Prevents enabling screen when clicking inside these windows
 */
$(unclickableWindows).click(function (e) {
    e.stopPropagation();
});

/**
 * Enables Screen when clicking outside window
 */
$(document).click(function () {
    $('#login-modal').fadeOut(SLOW_SPEED);
    $('#register-modal').fadeOut(SLOW_SPEED);
    $('#inbox-notifications-panel').slideUp(SLOW_SPEED);
    $('#user-notifications-panel').slideUp(SLOW_SPEED);
    $('#user-panel').slideUp(SLOW_SPEED);
    enableScreen();
});

/**
 * Toggles nav button for mobile
 */
$('.toggle-nav').click(function (e) {
    $('.navbar-items').slideToggle(SLOW_SPEED);
});
