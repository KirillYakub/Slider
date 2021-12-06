const $menu = document.querySelector('.panelMenu');
const $panel = document.querySelector('.sidePanel');
const $addButton = document.getElementById('openPanel');
const $closeButton = document.getElementById('closePanel');

let move = false;
let panelWidth = -300;
let coords = { distance: 0, start: 0, current: 0 };

$addButton.addEventListener('click', (e) => {
    $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';
})
$closeButton.addEventListener('click', (e) => {
    $panel.style.cssText = 'transform: translateX(' + -300 + 'px)';
})

$menu.addEventListener('mousedown', function(e) {
    if(e.target != $addButton && e.target != $closeButton){
        coords.start = e.clientX;
        move = true;
    }
});
$menu.addEventListener('mouseup', function(e) {
    move = false;
    panelWidth = coords.distance;
    if (panelWidth >= -150 || panelWidth == 0) {
        $panel.style.cssText = 'transform: translateX(' + 0 + 'px)';
    } else {
        $panel.style.cssText = 'transform: translateX(' + -300 + 'px)';
        panelWidth = -300;
    }
});
$menu.addEventListener('mousemove', function(e) {
    if (move) {
        coords.current = e.clientX;
        coords.distance = panelWidth + coords.current - coords.start;
        coords.distance = (coords.distance >= 0) ? 0 : coords.distance;

        $panel.style.cssText = 'transform: translateX(' + coords.distance + 'px)';
    }
});