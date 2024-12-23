import { init_1, animate_1 } from './room1.js';
import { init_2, animate_2 } from './room2.js';
import { init_3, animate_3 } from './room3.js';
import { init_4, animate_4 } from './room4.js';
import { init_5, animate_5 } from './room5.js';
import { init_6, animate_6 } from './room6.js';

var current_room = 3;
var last_room = 2;
var temp = 0;
var mid = 0;
let keyPressed = {};
let selectElement, selecting, readElement, yesButton, noButton, endOfRead;



selecting = false;
endOfRead = false;
selectElement = document.getElementById('select1');
readElement = document.getElementById('Read');
yesButton = document.getElementById('yesButton');
noButton = document.getElementById('noButton');

yesButton.addEventListener('click', function() {
    readElement.style.display = 'flex';
    selectElement.style.display = 'none';
    endOfRead = true;
});
noButton.addEventListener('click', function() {
    selectElement.style.display = 'none';
    selecting = false;
});


let face_item = {
    'book_shelf' : false,
};
let item_content = {
    'book_shelf' : selectElement,
};
let room_lit = {
    0 : true,
    1 : true,
    2 : true,
    3 : true,
};
let all_select = {selectElement, readElement};

// Add keyboard listeners
document.addEventListener('keydown', function(event) {
    keyPressed[event.code] = true; 
});
document.addEventListener('keyup', function(event) {
    keyPressed[event.code] = false; 
});

function init(){
    if (current_room != temp){
        if (current_room === 1) {
            init_1(last_room);
        } else if (current_room === 2) {
            init_2(last_room, room_lit);
        } else if (current_room === 3) {
            init_3(last_room);
        } else if (current_room === 4) {
            init_4(last_room);
        } else if (current_room === 5) {
            init_5(last_room);
        } else if (current_room === 6) {
            init_6(last_room);
        }
        temp = current_room
    }
}

function animate(){
    if (current_room === 1) {
        const [info1, info2] = animate_1(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    } else if (current_room === 2) {
        const [info1, info2] = animate_2(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    } else if (current_room === 3) {
        const [info1, info2] = animate_3(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    } else if (current_room === 4) {
        const [info1, info2] = animate_4(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    } else if (current_room === 5) {
        const [info1, info2] = animate_5(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    } else if (current_room === 6) {
        const [info1, info2] = animate_6(current_room, last_room, keyPressed, face_item);
        mid = info1;
        face_item = info2;
    }
    if (mid != current_room){
        last_room = current_room;
        current_room = mid;
    }
}

//init and animate
function animationLoop() {
    requestAnimationFrame(animationLoop);
    if (selecting === false){
        init();
        animate();

        // handle select
        for (const key in face_item) {
            if (face_item[key] === true){
                face_item[key] = false;
                const select = item_content[key]
                select.style.display = 'flex'; 
                selecting = true;
                break;
            }
        }
    }
    else{
        if (keyPressed['Space'] && endOfRead === true) {
            for (const element in all_select){
                all_select[element].style.display = 'none';
            }
            selecting = false;
            endOfRead = false;
        }
    }
}

animationLoop();
