window.onload = function () {
    var boundary1 = document.getElementById("boundary1");
    boundary1.onmouseover = function () {
        if (!hasClass(boundary1, "youlose")) {
            boundary1.className += " youlose";
        }

    }

}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}