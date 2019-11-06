"use strict"

let isEnabled = true;
let textA ="";

let idKey;
let textCl;

function clickKey(idKey, textCl) {
document.getElementById(idKey).addEventListener('click', function() {
        if (isEnabled) {
        textA = textA + textCl;
    document.getElementById("text").innerHTML = textA;
        }
    });
}


let key;
let textK;
    function pressKey(key, textK) {
    document.addEventListener('keydown', function(event) {
        /*if(event.code == 'CapsLock' && event.code == key) {
            if (isEnabled) {
                textA = textA + textK.toUpperCase();
                document.getElementById("text").innerHTML = textA;
                }
            }  else */if (event.code == key) {
            if (isEnabled) {
                textA = textA + textK;
            document.getElementById("text").innerHTML = textA;
            }
        }
      })
    }

   /* document.onkeydown = function(e) {
               e = e || window.event;
            if (e.CapsLock && e.keyCode == key) {
              alert('Shift + A');
            }
            return true;
          }*/
        

        document.addEventListener('keydown', function(event) {
            if (event.code == 'Backspace') {
                if (isEnabled) {
                    textA = textA.slice(0, -1);
                document.getElementById("text").innerHTML = textA;
                    }
            }
          });

          document.getElementById('q03').addEventListener('click', function() {
            if (isEnabled) {
            textA =  textA.slice(0, -1);
        document.getElementById("text").innerHTML = textA;
            }
        });

          clickKey('q', '`');
          clickKey('q1', '1');
          clickKey('q2', '2');
          clickKey('q3', '3');
          clickKey('q4', '4');
          clickKey('q5', '5');
          clickKey('q6', '6');
          clickKey('q7', '7');
          clickKey('q8', '8');
          clickKey('q9', '9');
          clickKey('q0', '0');
          clickKey('q01', '-');
          clickKey('q02', '=');

          clickKey('a', ' '+' '+' ');
          clickKey('a1', 'q');
          clickKey('a2', 'w');
          clickKey('a3', 'e');
          clickKey('a4', 'r');
          clickKey('a5', 't');
          clickKey('a6', 'y');
          clickKey('a7', 'u');
          clickKey('a8', 'i');
          clickKey('a9', 'o');
          clickKey('a0', 'p');
          clickKey('a01', '[');
          clickKey('a02', ']');
    
          clickKey('a03', '\n');
    
          clickKey('b1', 'a');
          clickKey('b2', 's');
          clickKey('b3', 'd');
          clickKey('b4', 'f');
          clickKey('b5', 'g');
          clickKey('b6', 'h');
          clickKey('b7', 'j');
          clickKey('b8', 'k');
          clickKey('b9', 'l');
          clickKey('b0', ';');
          clickKey('b01', '"');
          clickKey('b02', '|');
          clickKey('b03', '~');
          
          clickKey('c1', 'z');
          clickKey('c2', 'x');
          clickKey('c3', 'c');
          clickKey('c4', 'v');
          clickKey('c5', 'b');
          clickKey('c6', 'n');
          clickKey('c7', 'm');
          clickKey('c8', '<');
          clickKey('c9', '>');
          clickKey('c0', '?');
          clickKey('c01', '*');
          clickKey('c02', '+');
          clickKey('c03', '_');
    
          clickKey('d3', ' ');


      pressKey('Backquote', '`');
      pressKey('Digit1', '1');
      pressKey('Digit2', '2');
      pressKey('Digit3', '3');
      pressKey('Digit4', '4');
      pressKey('Digit5', '5');
      pressKey('Digit6', '6');
      pressKey('Digit7', '7');
      pressKey('Digit8', '8');
      pressKey('Digit9', '9');
      pressKey('Digit0', '0');
      pressKey('Minus', '-');
      pressKey('Tab', ' '+' '+' ');
      pressKey('KeyQ', 'q');
      pressKey('KeyW', 'w');
      pressKey('KeyE', 'e');
      pressKey('KeyR', 'r');
      pressKey('KeyT', 't');
      pressKey('KeyY', 'y');
      pressKey('KeyU', 'u');
      pressKey('KeyI', 'i');
      pressKey('KeyO', 'o');
      pressKey('KeyP', 'p');
      pressKey('BracketLeft', '[');
      pressKey('BracketRight', ']');

      pressKey('Enter', '\n');

      pressKey('KeyA', 'a');
      pressKey('KeyS', 's');
      pressKey('KeyD', 'd');
      pressKey('KeyF', 'f');
      pressKey('KeyG', 'g');
      pressKey('KeyH', 'h');
      pressKey('KeyJ', 'j');
      pressKey('KeyK', 'k');
      pressKey('KeyL', 'l');
      pressKey('Semicolon', ';');
      pressKey('Quote', '"');
      pressKey('Backslash', '|');
      
      pressKey('KeyZ', 'z');
      pressKey('KeyX', 'x');
      pressKey('KeyC', 'c');
      pressKey('KeyV', 'v');
      pressKey('KeyB', 'b');
      pressKey('KeyN', 'n');
      pressKey('KeyM', 'm');
      pressKey('Comma', '<');
      pressKey('Period', '>');
      pressKey('Slash', '?');
      pressKey('Quote', '"');
      pressKey('Backslash', '|');

      pressKey('Space', ' ');

  
