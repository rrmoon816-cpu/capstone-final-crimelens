 
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    btn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});
