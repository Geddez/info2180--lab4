var boundaries;
window.onload = function () {
    boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBounds;
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function overBounds() {
    if (!hasClass(boundaries[0], "youlose")) {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].className += " youlose";
        }
    }
}
