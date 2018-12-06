function holder(n) {
    "use strict";
    var x = document.getElementById("hold");
    hold = n;
    isHold = true;
}

function setColor2(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("sticker2");
        x[pos].style.fill = color[hold];
        state[pos] = hold;
    }
}

function setColor3(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("sticker3");
        x[pos].style.fill = color[hold];
        state[pos] = hold;
    }
}

function setColorpyra(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("stickerpyra");
        x[pos].style.fill = color[hold];
        state[pos] = hold;
    }
}

function cube2On() {
    "use strict";
    var x = document.getElementById("cube2");
    x.style.display = "inline";
    x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function cube3On() {
    "use strict";
    var x = document.getElementById("cube3");
    x.style.display = "inline";
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
}
        
function cubepyraOn() {
    "use strict";
    var x = document.getElementById("cubepyra");
    x.style.display = "inline";
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementsByClassName("move2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x = document.getElementsByClassName("move3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function doMove2(n) {
    "use strict";
    var x = document.getElementsByClassName("sticker2"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[3].style.fill;
        x[3].style.fill = x[2].style.fill;
        x[2].style.fill = x[1].style.fill;
        x[1].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[20].style.fill;
        x[20].style.fill = x[16].style.fill;
        x[16].style.fill = x[8].style.fill;
        x[8].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[21].style.fill;
        x[21].style.fill = x[17].style.fill;
        x[17].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        break;
    case 1:
        temp = x[1].style.fill;
        x[1].style.fill = x[9].style.fill;
        x[9].style.fill = x[13].style.fill;
        x[13].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[10].style.fill;
        x[10].style.fill = x[14].style.fill;
        x[14].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[7].style.fill;
        x[7].style.fill = x[6].style.fill;
        x[6].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        break;
    case 2:
        temp = x[2].style.fill;
        x[2].style.fill = x[17].style.fill;
        x[17].style.fill = x[12].style.fill;
        x[12].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[18].style.fill;
        x[18].style.fill = x[13].style.fill;
        x[13].style.fill = x[4].style.fill;
        x[4].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[11].style.fill;
        x[11].style.fill = x[10].style.fill;
        x[10].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        break;
    case 3:
        temp = x[6].style.fill;
        x[6].style.fill = x[10].style.fill;
        x[10].style.fill = x[18].style.fill;
        x[18].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[11].style.fill;
        x[11].style.fill = x[19].style.fill;
        x[19].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[15].style.fill;
        x[15].style.fill = x[14].style.fill;
        x[14].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        break;
    case 4:
        temp = x[0].style.fill;
        x[0].style.fill = x[22].style.fill;
        x[22].style.fill = x[12].style.fill;
        x[12].style.fill = x[8].style.fill;
        x[8].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[21].style.fill;
        x[21].style.fill = x[15].style.fill;
        x[15].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[19].style.fill;
        x[19].style.fill = x[18].style.fill;
        x[18].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        break;
    case 5:
        temp = x[0].style.fill;
        x[0].style.fill = x[5].style.fill;
        x[5].style.fill = x[14].style.fill;
        x[14].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[6].style.fill;
        x[6].style.fill = x[15].style.fill;
        x[15].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[23].style.fill;
        x[23].style.fill = x[22].style.fill;
        x[22].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
            
    case 6:
        temp = x[0].style.fill;
        x[0].style.fill = x[1].style.fill;
        x[1].style.fill = x[2].style.fill;
        x[2].style.fill = x[3].style.fill;
        x[3].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[8].style.fill;
        x[8].style.fill = x[16].style.fill;
        x[16].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[9].style.fill;
        x[9].style.fill = x[17].style.fill;
        x[17].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
    case 7:
        temp = x[1].style.fill;
        x[1].style.fill = x[23].style.fill;
        x[23].style.fill = x[13].style.fill;
        x[13].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[20].style.fill;
        x[20].style.fill = x[14].style.fill;
        x[14].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[5].style.fill;
        x[5].style.fill = x[6].style.fill;
        x[6].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        break;
    case 8:
        temp = x[2].style.fill;
        x[2].style.fill = x[7].style.fill;
        x[7].style.fill = x[12].style.fill;
        x[12].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[4].style.fill;
        x[4].style.fill = x[13].style.fill;
        x[13].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[9].style.fill;
        x[9].style.fill = x[10].style.fill;
        x[10].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        break;
    case 9:
        temp = x[6].style.fill;
        x[6].style.fill = x[22].style.fill;
        x[22].style.fill = x[18].style.fill;
        x[18].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[23].style.fill;
        x[23].style.fill = x[19].style.fill;
        x[19].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[13].style.fill;
        x[13].style.fill = x[14].style.fill;
        x[14].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        break;
    case 10:
        temp = x[0].style.fill;
        x[0].style.fill = x[8].style.fill;
        x[8].style.fill = x[12].style.fill;
        x[12].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[11].style.fill;
        x[11].style.fill = x[15].style.fill;
        x[15].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[17].style.fill;
        x[17].style.fill = x[18].style.fill;
        x[18].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    case 11:
        temp = x[0].style.fill;
        x[0].style.fill = x[19].style.fill;
        x[19].style.fill = x[14].style.fill;
        x[14].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[16].style.fill;
        x[16].style.fill = x[15].style.fill;
        x[15].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[21].style.fill;
        x[21].style.fill = x[22].style.fill;
        x[22].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
            
    case 12:
        temp = x[0].style.fill;
        x[0].style.fill = x[2].style.fill;
        x[2].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[3].style.fill;
        x[3].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
    case 13:
        temp = x[1].style.fill;
        x[1].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        temp = x[23].style.fill;
        x[23].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[7].style.fill;
        x[7].style.fill = temp;
        break;
    case 14:
        temp = x[2].style.fill;
        x[2].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        temp = x[4].style.fill;
        x[4].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        break;
    case 15:
        temp = x[6].style.fill;
        x[6].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[22].style.fill;
        x[22].style.fill = x[10].style.fill;
        x[10].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[23].style.fill;
        x[23].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[13].style.fill;
        x[13].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        break;
    case 16:
        temp = x[0].style.fill;
        x[0].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[11].style.fill;
        x[11].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[17].style.fill;
        x[17].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    default:
        temp = x[0].style.fill;
        x[0].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        temp = x[19].style.fill;
        x[19].style.fill = x[5].style.fill;
        x[5].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[6].style.fill;
        x[6].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[21].style.fill;
        x[21].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
    }
}

function doMove3(n) {
    "use strict";
    var x = document.getElementsByClassName("sticker3"),
        temp;
    switch (n) {
    case 0:
        temp = x[0].style.fill;
        x[0].style.fill = x[6].style.fill;
        x[6].style.fill = x[8].style.fill;
        x[8].style.fill = x[2].style.fill;
        x[2].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[45].style.fill;
        x[45].style.fill = x[36].style.fill;
        x[36].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[11].style.fill;
        x[11].style.fill = x[47].style.fill;
        x[47].style.fill = x[38].style.fill;
        x[38].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[3].style.fill;
        x[3].style.fill = x[7].style.fill;
        x[7].style.fill = x[5].style.fill;
        x[5].style.fill = temp;  
        temp = x[10].style.fill;
        x[10].style.fill = x[46].style.fill;
        x[46].style.fill = x[37].style.fill;
        x[37].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        break;
    case 1:
        temp = x[2].style.fill;
        x[2].style.fill = x[20].style.fill;
        x[20].style.fill = x[29].style.fill;
        x[29].style.fill = x[51].style.fill;
        x[51].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[26].style.fill;
        x[26].style.fill = x[35].style.fill;
        x[35].style.fill = x[45].style.fill;
        x[45].style.fill = temp;
        temp = x[9].style.fill;
        x[9].style.fill = x[15].style.fill;
        x[15].style.fill = x[17].style.fill;
        x[17].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[5].style.fill;
        x[5].style.fill = x[23].style.fill;
        x[23].style.fill = x[32].style.fill;
        x[32].style.fill = x[48].style.fill;
        x[48].style.fill = temp;  
        temp = x[10].style.fill;
        x[10].style.fill = x[12].style.fill;
        x[12].style.fill = x[16].style.fill;
        x[16].style.fill = x[14].style.fill;
        x[14].style.fill = temp;
        break;
    case 2:
        temp = x[6].style.fill;
        x[6].style.fill = x[44].style.fill;
        x[44].style.fill = x[29].style.fill;
        x[29].style.fill = x[9].style.fill;
        x[9].style.fill = temp;
        temp = x[8].style.fill;
        x[8].style.fill = x[38].style.fill;
        x[38].style.fill = x[27].style.fill;
        x[27].style.fill = x[15].style.fill;
        x[15].style.fill = temp;
        temp = x[18].style.fill;
        x[18].style.fill = x[24].style.fill;
        x[24].style.fill = x[26].style.fill;
        x[26].style.fill = x[20].style.fill;
        x[20].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[41].style.fill;
        x[41].style.fill = x[28].style.fill;
        x[28].style.fill = x[12].style.fill;
        x[12].style.fill = temp;
        temp = x[19].style.fill;
        x[19].style.fill = x[21].style.fill;
        x[21].style.fill = x[25].style.fill;
        x[25].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        break;
    case 3:
        temp = x[6].style.fill;
        x[6].style.fill = x[10].style.fill;
        x[10].style.fill = x[18].style.fill;
        x[18].style.fill = x[22].style.fill;
        x[22].style.fill = temp;
        temp = x[7].style.fill;
        x[7].style.fill = x[11].style.fill;
        x[11].style.fill = x[19].style.fill;
        x[19].style.fill = x[23].style.fill;
        x[23].style.fill = temp;
        temp = x[12].style.fill;
        x[12].style.fill = x[15].style.fill;
        x[15].style.fill = x[14].style.fill;
        x[14].style.fill = x[13].style.fill;
        x[13].style.fill = temp;
        break;
    case 4:
        temp = x[0].style.fill;
        x[0].style.fill = x[22].style.fill;
        x[22].style.fill = x[12].style.fill;
        x[12].style.fill = x[8].style.fill;
        x[8].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[21].style.fill;
        x[21].style.fill = x[15].style.fill;
        x[15].style.fill = x[11].style.fill;
        x[11].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[19].style.fill;
        x[19].style.fill = x[18].style.fill;
        x[18].style.fill = x[17].style.fill;
        x[17].style.fill = temp;
        break;
    case 5:
        temp = x[0].style.fill;
        x[0].style.fill = x[5].style.fill;
        x[5].style.fill = x[14].style.fill;
        x[14].style.fill = x[19].style.fill;
        x[19].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[6].style.fill;
        x[6].style.fill = x[15].style.fill;
        x[15].style.fill = x[16].style.fill;
        x[16].style.fill = temp;
        temp = x[20].style.fill;
        x[20].style.fill = x[23].style.fill;
        x[23].style.fill = x[22].style.fill;
        x[22].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        break;
            
    case 6:
        for(var i=0; i < 3; i++){
            doMove3(0);
        }
        break;
    case 7:
        for(var i=0; i < 3; i++){
            doMove3(1);
        }
        break;
    case 8:
        for(var i=0; i < 3; i++){
            doMove3(2);
        }
        break;
    case 9:
        for(var i=0; i < 3; i++){
            doMove3(3);
        }
        break;
    case 10:
        for(var i=0; i < 3; i++){
            doMove3(4);
        }
        break;
    case 11:
        for(var i=0; i < 3; i++){
            doMove3(5);
        }
        break;
            
    case 12:
        doMove3(0);
        doMove3(0);
        break;
    case 13:
        doMove3(1);
        doMove3(1);
        break;
    case 14:
        doMove3(2);
        doMove3(2);
        break;
    case 15:
        doMove3(3);
        doMove3(3);
        break;
    case 16:
        doMove3(4);
        doMove3(4);
        break;
    default:
        doMove3(5);
        doMove3(5);
    }
}