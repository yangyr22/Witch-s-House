import { init_1, animate_1 } from './room1.js';
import { init_2, animate_2 } from './room2.js';

var current_room = 1;
var last_room = 1;
var temp = 0;
var mid = 0;

function animationLoop() {
    requestAnimationFrame(animationLoop);
    if (current_room != temp){
        if (current_room === 1) {
            init_1(last_room);
        } else if (current_room === 2) {
            init_2(last_room);
        }
        temp = current_room
    }
    if (current_room === 1) {
        mid = animate_1(current_room, last_room);
        // console.log('start', current_room);
    } else if (current_room === 2) {
        mid = animate_2(current_room, last_room);
    }
    if (mid != current_room){
        last_room = current_room;
        current_room = mid;
    }
}

animationLoop();
