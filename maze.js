var boundaries;
var end;
var start;
var statusState;
var win = false;
var outOfBounds = false;

window.onload = function () {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    end.onmouseover = Win;
    start = document.getElementById("start");
    start.onclick = reset;
    statusState = document.getElementById("status");
    mazeBoundary = document.getElementById("maze");
    mazeBoundary.onmouseleave = Cheat;
    for (var i = 0; i < boundaries.length-1; i++) {
        boundaries[i].onmouseover = overBounds;
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function overBounds() {
    if (!win) { 
        if (!outOfBounds) {
            outOfBounds = true;
            statusState.innerText = 'You Lose!,Click the "S" block to reset and play again.';
            for (var i = 0; i < boundaries.length-1; i++) {
                boundaries[i].className += " youlose";
            }
        }
    }
}

function Win() {
    if (!outOfBounds) {
        win = true;
        statusState.innerText = 'You Win!, Click the "S" block to reset and play again.';
    }
}

function reset() {
    win = false;
    outOfBounds = false;
    statusState.innerText = 'Move your mouse over the "S" block to begin.';
    for (var i = 0; i < boundaries.length-1; i++) {
        boundaries[i].className = "boundary";
    }

}
function Cheat() {
    if (!win) {
        overBounds();
    }
}
