var boundaries;
var end;

window.onload = function () {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    end.onmouseover = Win;
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

function Win() {
    if (!hasClass(boundaries[0], "youlose")) {
        alert("You Win, Congratulations!!!");
    }
}
