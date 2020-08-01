(function () {
    'use strict';

    var recommendation = document.querySelector('.recommendation');
    var isVisible = false;

    var timeOut;
    function scrollToTop() {
        if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
            window.scrollBy(0, -50);
            timeOut = setTimeout(scrollToTop, 10);
        }
        else clearTimeout(timeOut);
    }
})();
