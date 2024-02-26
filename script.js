document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('dynmapFrame');

    function enterFullscreen() {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }

    iframe.src = "http://earthmap.naturalsmp.xyz:8123/";

    enterFullscreen();
});
