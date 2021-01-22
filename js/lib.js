/**
 * Disables scrolling
 */
function disableScroll() {
    $(window).scroll(function () {
        window.scrollTo(0, 0);
    });
}

/**
 * Enables scrolling
 */
function enableScroll() {
    $(window).off('scroll');
}

/**
 * Disables screen
 */
function disableScreen() {
    let $disabled = $("<div></div>", {id: "disabled-screen"});
    $(document.body).append($disabled);
    disableScroll();
}

/**
 * Enables screen
 */
function enableScreen() {
    $("#disabled-screen").remove();
    enableScroll();
}