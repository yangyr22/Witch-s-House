import { init_1, animate_1 } from './room1.js';
import { init_2, animate_2 } from './room2.js';
import { init_3, animate_3 } from './room3.js';
import { init_4, animate_4 } from './room4.js';
import { init_4_deep, animate_4_deep } from './room4_deep.js';
import { init_5, animate_5 } from './room5.js';
import { init_6, animate_6 } from './room6.js';

var current_room = 2;
var last_room = 0;
var temp = 0;
var mid = 0;
let keyPressed = {};
let items = [];
let message = "";
let is_4_deep = true;
let selectElement, selecting, readElement, yesButton, noButton, endOfRead;
let clockElement, clockResultElement, yesButton2, noButton2;
let paperElement, paperResultElement, yesButton3, noButton3;
let pumpkinElement, pumpkinResultElement, yesButton4, noButton4;



selecting = false;
endOfRead = false;
selectElement = document.getElementById('select1');
readElement = document.getElementById('Read');
yesButton = document.getElementById('yesButton_read');
noButton = document.getElementById('noButton_read');

clockElement = document.getElementById('clock');
clockResultElement = document.getElementById('clockResult');
yesButton2 = document.getElementById('yesButton_clock');
noButton2 = document.getElementById('noButton_clock');


paperElement = document.getElementById('paper');
paperResultElement = document.getElementById('paperResult');
yesButton3 = document.getElementById('yesButton_paper');
noButton3 = document.getElementById('noButton_paper');


pumpkinElement = document.getElementById('pumpkin');
pumpkinResultElement = document.getElementById('pumpkinResult');
yesButton4 = document.getElementById('yesButton_pumpkin');
noButton4 = document.getElementById('noButton_pumpkin');


yesButton.addEventListener('click', function() {
    readElement.style.display = 'flex';
    selectElement.style.display = 'none';
    endOfRead = true;
});
noButton.addEventListener('click', function() {
    selectElement.style.display = 'none';
    selecting = false;
});

yesButton2.addEventListener('click', function() {
    clockResultElement.style.display = 'flex';
    clockElement.style.display = 'none';
    endOfRead = true;
    items.push('king_key');
    done['clock'] = true;
    message = "get_down";
});
noButton2.addEventListener('click', function() {
    clockElement.style.display = 'none';
    selecting = false;
    message = "get_down";
});

yesButton3.addEventListener('click', function() {
    paperResultElement.style.display = 'flex';
    paperElement.style.display = 'none';
    endOfRead = true;
    message = "chasing";
});
noButton3.addEventListener('click', function() {
    clockElement.style.display = 'none';
    selecting = false;
    message = "chasing";
});


yesButton4.addEventListener('click', function() {
    pumpkinResultElement.style.display = 'flex';
    pumpkinElement.style.display = 'none';
    endOfRead = true;
    done['pumpkin'] = true;
    room_lit[1] = true;
});
noButton4.addEventListener('click', function() {
    pumpkinElement.style.display = 'none';
    selecting = false;
});


let face_item = {
    'book_shelf' : false,
    'clock' : false,
    'paper' : false,
    'paper' : false,
};
let item_content = {
    'book_shelf' : selectElement,
    'clock' : clockElement,
    'paper' : paperElement,
    'pumpkin' : pumpkinElement,
};
let done = {
    'book_shelf' : false,
    'clock' : false,
    'paper' : false,
    'pumpkin' : false,
}
let room_lit = {
    0 : false,
    1 : false,
    2 : false,
    3 : false,
};
let all_select = {
    selectElement, readElement, 
    clockElement, clockResultElement, 
    paperElement, paperResultElement,
    pumpkinElement, pumpkinResultElement,
};

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
        } else if (current_room === 4 && is_4_deep ===false) {
            init_4(last_room);
        } else if (current_room === 4 && is_4_deep === true) {
            init_4_deep(last_room);
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
        const [info1, info2] = animate_1(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 2) {
        const [info1, info2] = animate_2(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 3) {
        const [info1, info2] = animate_3(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 4 && is_4_deep ===false) {
        const [info1, info2] = animate_4(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 4 && is_4_deep ===true) {
        const [info1, info2] = animate_4_deep(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 5) {
        const [info1, info2] = animate_5(current_room, last_room, keyPressed, face_item, message);
        mid = info1;
        face_item = info2;
    } else if (current_room === 6) {
        const [info1, info2] = animate_6(current_room, last_room, keyPressed, face_item, message);
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
            if (face_item[key] === true && done[key] === false){
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
