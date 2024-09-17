function toggleDropDown() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu) {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
        else {
            dropdownMenu.style.display = 'block';
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var dropdownbutton = document.querySelector('.dropdownbutton');
    if (dropdownbutton) {
        dropdownbutton.addEventListener('click', toggleDropDown);
    }
});
