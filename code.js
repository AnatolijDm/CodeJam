"use strict"

let isEnabled = true;
let textA ="";

document.querySelector('.keyQ').addEventListener('click', function() {
        if (isEnabled) {
        textA = textA + '`';
    document.getElementById("text").innerHTML = textA;
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.code == 'Backquote') {
            if (isEnabled) {
                textA = textA + '`';
            document.getElementById("text").innerHTML = textA;
                }
        }
      });