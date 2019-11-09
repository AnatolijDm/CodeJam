"use strict"

var isEnabled = true;

var textA ="";

var idKey;
var textCl;

function clickKey(idKey, textCl) {
    var txt = 0;
    document.getElementById('b').addEventListener('click', function() {                   
            if (isEnabled) {
                if(txt === 0) {
                textCl = textCl.toUpperCase();
                    txt = 1;
                }
                else if(txt === 1) {
                textCl = textCl.toLowerCase();
                    txt = 0;
                }
            }
        })
document.getElementById(idKey).addEventListener('click', function() {
        if (isEnabled) {
        textA = textA + textCl;
    document.getElementById("text").innerHTML = textA;
        }
    });
}

    function pressKey(key, textK, tag) {
        var txt = 0;
    document.addEventListener('keydown', function(event) {        
        if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {            
            if (isEnabled) {
                b.style.opacity = '0%';
                b.style.animationDelay = '1s';
                textK = textK.toUpperCase();
            }
        }
    })
    document.addEventListener('keyup', function(event) {        
        if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {            
            if (isEnabled) {
                b.style.opacity = '100%';
                b.style.animationDelay = '1s';
                textK = textK.toLowerCase();
            }
        }
    })
    document.addEventListener('keydown', function(event) {        
        if(event.code == 'CapsLock') {            
            if (isEnabled) {
                b.style.opacity = '0%';
                b.style.animationDelay = '1s';
                if(txt === 0) {
                textK = textK.toUpperCase();
                    txt = 1;
                }
                else if(txt === 1) {
                textK = textK.toLowerCase();
                    txt = 0;
                }
            }
        }
    })
    document.addEventListener('keyup', function(event) {
        if(event.code == 'CapsLock') {
            if (isEnabled) {
                b.style.opacity = '100%';
                b.style.animationDelay = '1s';
            }
        }
    })
        document.addEventListener('keydown', function(event)  {
            if  (event.code == key) {
                if (isEnabled) {
                    tag.style.opacity = '0%';
                    tag.style.animationDelay = '1s';
                    textA = textA + textK;
                    document.getElementById("text").innerHTML = textA;
                }
            }
          })
          document.addEventListener('keyup', function(event) {
            if (event.code == key) {
                    if (isEnabled) {
                        tag.style.opacity = '100%';
                        tag.style.animationDelay = '1s';
                    }
                }
              })
        }

    /*function pressKey1(key1, textK1) {
        document.addEventListener('keydown', function(event)  {
        if(event.code == 'CapsLock') {
            if (isEnabled) {
            document.addEventListener('keypress', function(event) {
            if (event.code == key1) {
                if (isEnabled) {
                    textA = textA + textK1.toUpperCase();
                document.getElementById("text").innerHTML = textA;
                }
            }
          })
        }
    }
    })
}*/

        document.addEventListener('keydown', function(event) {
            if (event.code == 'Backspace') {
                if (isEnabled) {
                    q03.style.opacity = '0%';
                    q03.style.animationDelay = '1s';
                    textA = textA.slice(0, -1);
                document.getElementById("text").innerHTML = textA;
                    }
            }
          });

          document.addEventListener('keyup', function(event) {
            if (event.code == 'Backspace') {
                if (isEnabled) {
                    q03.style.opacity = '100%';
                    q03.style.animationDelay = '1s';
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


      pressKey('Backquote', '`', q);
      pressKey('Digit1', '1', q1);
      pressKey('Digit2', '2', q2);
      pressKey('Digit3', '3', q3);
      pressKey('Digit4', '4', q4);
      pressKey('Digit5', '5', q5);
      pressKey('Digit6', '6', q6);
      pressKey('Digit7', '7', q7);
      pressKey('Digit8', '8', q8);
      pressKey('Digit9', '9', q9);
      pressKey('Digit0', '0', q0);
      pressKey('Minus', '-', q01);
      pressKey('Equal', '=', q02);
      pressKey('Tab', ' '+' '+' ', a);
      pressKey('KeyQ', 'q', a1);
      pressKey('KeyW', 'w', a2);
      pressKey('KeyE', 'e', a3);
      pressKey('KeyR', 'r', a4);
      pressKey('KeyT', 't', a5);
      pressKey('KeyY', 'y', a6);
      pressKey('KeyU', 'u', a7);
      pressKey('KeyI', 'i', a8);
      pressKey('KeyO', 'o', a9);
      pressKey('KeyP', 'p', a0);
      pressKey('BracketLeft', '[', a01);
      pressKey('BracketRight', ']', a02);

      pressKey('Enter', '\n', a03);

      pressKey('KeyA', 'a', b1);
      pressKey('KeyS', 's', b2);
      pressKey('KeyD', 'd', b3);
      pressKey('KeyF', 'f', b4);
      pressKey('KeyG', 'g', b5);
      pressKey('KeyH', 'h', b6);
      pressKey('KeyJ', 'j', b7);
      pressKey('KeyK', 'k', b8);
      pressKey('KeyL', 'l', b9);
      pressKey('Semicolon', ';', b0);
      pressKey('Quote', '"', b01);
      pressKey('Backslash', '~', b03);
      
      pressKey('KeyZ', 'z', c1);
      pressKey('KeyX', 'x', c2);
      pressKey('KeyC', 'c', c3);
      pressKey('KeyV', 'v', c4);
      pressKey('KeyB', 'b', c5);
      pressKey('KeyN', 'n', c6);
      pressKey('KeyM', 'm', c7);
      pressKey('Comma', '<', c8);
      pressKey('Period', '>', c9);
      pressKey('Slash', '?', c0);

      pressKey('Space', ' ', d3);

      /*pressKey1('Backquote', '`');
      pressKey1('Digit1', '1');
      pressKey1('Digit2', '2');
      pressKey1('Digit3', '3');
      pressKey1('Digit4', '4');
      pressKey1('Digit5', '5');
      pressKey1('Digit6', '6');
      pressKey1('Digit7', '7');
      pressKey1('Digit8', '8');
      pressKey1('Digit9', '9');
      pressKey1('Digit0', '0');
      pressKey1('Minus', '-');
      pressKey1('Tab', ' '+' '+' ');
      pressKey1('KeyQ', 'Q');
      pressKey1('KeyW', 'W');
      pressKey1('KeyE', 'E');
      pressKey1('KeyR', 'R');
      pressKey1('KeyT', 'T');
      pressKey1('KeyY', 'Y');
      pressKey1('KeyU', 'U');
      pressKey1('KeyI', 'I');
      pressKey1('KeyO', 'O');
      pressKey1('KeyP', 'P');
      pressKey1('BracketLeft', '[');
      pressKey1('BracketRight', ']');

      pressKey1('Enter', '\n');

      pressKey1('KeyA', 'A');
      pressKey1('KeyS', 'S');
      pressKey1('KeyD', 'D');
      pressKey1('KeyF', 'F');
      pressKey1('KeyG', 'G');
      pressKey1('KeyH', 'H');
      pressKey1('KeyJ', 'J');
      pressKey1('KeyK', 'K');
      pressKey1('KeyL', 'L');
      pressKey1('Semicolon', ';');
      pressKey1('Quote', '"');
      pressKey1('Backslash', '|');
      
      pressKey1('KeyZ', 'Z');
      pressKey1('KeyX', 'X');
      pressKey1('KeyC', 'C');
      pressKey1('KeyV', 'V');
      pressKey1('KeyB', 'B');
      pressKey1('KeyN', 'N');
      pressKey1('KeyM', 'M');
      pressKey1('Comma', '<');
      pressKey1('Period', '>');
      pressKey1('Slash', '?');
      pressKey1('Quote', '"');
      pressKey1('Backslash', '|');

      pressKey1('Space', ' ');*/
  
