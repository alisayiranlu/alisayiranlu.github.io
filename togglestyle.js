function toggleStyle() {
    var file = document.getElementById('themeStylesheet');
    if (file.href.indexOf('landingcss.css') !== -1) {
        file.href = 'secondstyle.css';
        localStorage.setItem('theme', 'secondstyle');
    }
    else {
        file.href = "landingcss.css";
        localStorage.setItem('theme', 'landingcss');
    }
}
window.addEventListener('DOMContentLoaded', function () {
    var currTheme = localStorage.getItem('theme');
    var file = document.getElementById('themeStylesheet');
    if (file && currTheme) {
        if (currTheme === 'secondstyle') {
            file.href = 'secondstyle.css';
        }
        else {
            file.href = 'landingcss.css';
        }
    }
});
var toggleButton = document.getElementById('toggleButton');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleStyle);
}
