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

function reset2() {
    "use strict";
    var x = document.getElementsByClassName("sticker2");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/4)];
    }
}

function reset3() {
    "use strict";
    var x = document.getElementsByClassName("sticker3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/9)];
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
        temp = x[15].style.fill;
        x[15].style.fill = x[24].style.fill;
        x[24].style.fill = x[42].style.fill;
        x[42].style.fill = x[51].style.fill;
        x[51].style.fill = temp;
        temp = x[17].style.fill;
        x[17].style.fill = x[26].style.fill;
        x[26].style.fill = x[44].style.fill;
        x[44].style.fill = x[53].style.fill;
        x[53].style.fill = temp;
        temp = x[27].style.fill;
        x[27].style.fill = x[33].style.fill;
        x[33].style.fill = x[35].style.fill;
        x[35].style.fill = x[29].style.fill;
        x[29].style.fill = temp;
        temp = x[16].style.fill;
        x[16].style.fill = x[25].style.fill;
        x[25].style.fill = x[43].style.fill;
        x[43].style.fill = x[52].style.fill;
        x[52].style.fill = temp;
        temp = x[28].style.fill;
        x[28].style.fill = x[30].style.fill;
        x[30].style.fill = x[34].style.fill;
        x[34].style.fill = x[32].style.fill;
        x[32].style.fill = temp;
        break;
    case 4:
        temp = x[0].style.fill;
        x[0].style.fill = x[53].style.fill;
        x[53].style.fill = x[27].style.fill;
        x[27].style.fill = x[18].style.fill;
        x[18].style.fill = temp;
        temp = x[6].style.fill;
        x[6].style.fill = x[47].style.fill;
        x[47].style.fill = x[33].style.fill;
        x[33].style.fill = x[24].style.fill;
        x[24].style.fill = temp;
        temp = x[36].style.fill;
        x[36].style.fill = x[42].style.fill;
        x[42].style.fill = x[44].style.fill;
        x[44].style.fill = x[38].style.fill;
        x[38].style.fill = temp;
        temp = x[3].style.fill;
        x[3].style.fill = x[50].style.fill;
        x[50].style.fill = x[30].style.fill;
        x[30].style.fill = x[21].style.fill;
        x[21].style.fill = temp;
        temp = x[37].style.fill;
        x[37].style.fill = x[39].style.fill;
        x[39].style.fill = x[43].style.fill;
        x[43].style.fill = x[41].style.fill;
        x[41].style.fill = temp;
        break;
    case 5:
        temp = x[0].style.fill;
        x[0].style.fill = x[11].style.fill;
        x[11].style.fill = x[35].style.fill;
        x[35].style.fill = x[42].style.fill;
        x[42].style.fill = temp;
        temp = x[2].style.fill;
        x[2].style.fill = x[17].style.fill;
        x[17].style.fill = x[33].style.fill;
        x[33].style.fill = x[36].style.fill;
        x[36].style.fill = temp;
        temp = x[45].style.fill;
        x[45].style.fill = x[51].style.fill;
        x[51].style.fill = x[53].style.fill;
        x[53].style.fill = x[47].style.fill;
        x[47].style.fill = temp;
        temp = x[1].style.fill;
        x[1].style.fill = x[14].style.fill;
        x[14].style.fill = x[34].style.fill;
        x[34].style.fill = x[39].style.fill;
        x[39].style.fill = temp;
        temp = x[46].style.fill;
        x[46].style.fill = x[48].style.fill;
        x[48].style.fill = x[52].style.fill;
        x[52].style.fill = x[50].style.fill;
        x[50].style.fill = temp;
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

function scramble2() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMove2(Math.floor(Math.random()*18));
    }
}

function scramble3() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMove3(Math.floor(Math.random()*18));
    }
}

function isSolved2(state) {
    "use strict";
    var out = true;
    for (var i = 0; i < 6; i++) {
        if (!(state[4*i] == state[4*i+1] && state[4*i+1] == state[4*i+2] && state[4*i+1] == state[4*i+3])) {
            out = false;
            break;
        }
    }
    
    return out;
}

function copyCube2() {
    var x = document.getElementsByClassName("sticker2"), out=[];
    for (var i = 0; i < 24; i++) {
        out.push(x[i].style.fill);
    }
    return out;
}

function solveByMove2(cube, maxlen, lastmove, currlen) {
    var solution, partial,
        tempcube, done = false;
    for (var i = 0; i < 9; i++) {
        if (lastmove % 3 != i % 3 || currlen == 1) {
            solution = [];
            tempcube=[];
            for(var j=0;j<24;j++){
                tempcube.push(cube[j]);
            }
            doRUF2(tempcube, i);
            solution.push(i);
            if(currlen==maxlen && isSolved2(tempcube)){
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial=solveByMove2(tempcube, maxlen, i, currlen+1);
                if(trySolution2(tempcube, partial)) {
                    for(var j=0;j<partial.length;j++){
                        solution.push(partial[j]);
                    }
                    done=true;
                    break;
                }
            }
        }
    }
    
    if(!done){
        solution=[-1];
    }
    return solution;
    
}

function completeSolve2() {
    var solution;
    
    for (var i = 1; i < 12; i++) {
        console.log(i);
        solution = solveByMove2(copyCube2(),i,0,1);
        if (solution[0]!=-1) {
            break;
        }
    }
    for(var i=0;i<solution.length;i++){
        console.log(solution[i]);
    }
    return solution;
}

function trySolution2(cube, solution) {
    for (var i = 0; i < solution.length; i++) {
        doRUF2(cube, solution[i]);
    }
    
    return isSolved2(cube);
}

function translate2(solution) {
    var out = [];
    for(var i=0;i<solution.length;i++){
        switch(solution[i]){
            case 0:
                out.push('U');
                break;
            case 1:
                out.push('R');
                break;
            case 2:
                out.push('F');
                break;
            case 3:
                out.push("U'");
                break;
            case 4:
                out.push("R'");
                break;
            case 5:
                out.push("F'");
                break;
            case 6:
                out.push('U2');
                break;
            case 7:
                out.push('R2');
                break;
            default:
                out.push('F2');
        }
    }
    return out;
}

function translate3(solution) {
    var out = [], temp;
    for (var i = 0; i < solution.length; i++) {
        switch (solution[i] % 6) {
            case 0:
                temp = 'U';
                break;
            case 1:
                temp = 'R';
                break;
            case 2:
                temp = 'F';
                break;
            case 3:
                temp = 'D';
                break;
            case 4:
                temp = 'L';
                break;
            default:
                temp = 'B';
                break;
        }
        switch (Math.floor(solution[i] / 6)) {
            case 1:
                temp += "'";
                break;
            case 2:
                temp += '2';
        }
        
        out.push(temp);
        temp = '';
    }
    return out;
}

function doRUF2(x, n) {
    "use strict";
    var temp;
    switch (n) {
    case 0:
        temp = x[0];
        x[0] = x[3];
        x[3] = x[2];
        x[2] = x[1];
        x[1] = temp;
        temp = x[4];
        x[4] = x[20];
        x[20] = x[16];
        x[16] = x[8];
        x[8] = temp;
        temp = x[5];
        x[5] = x[21];
        x[21] = x[17];
        x[17] = x[9];
        x[9] = temp;
        break;
    case 1:
        temp = x[1];
        x[1] = x[9];
        x[9] = x[13];
        x[13] = x[23];
        x[23] = temp;
        temp = x[2];
        x[2] = x[10];
        x[10] = x[14];
        x[14] = x[20];
        x[20] = temp;
        temp = x[4];
        x[4] = x[7];
        x[7] = x[6];
        x[6] = x[5];
        x[5] = temp;
        break;
    case 2:
        temp = x[2];
        x[2] = x[17];
        x[17] = x[12];
        x[12] = x[7];
        x[7] = temp;
        temp = x[3];
        x[3] = x[18];
        x[18] = x[13];
        x[13] = x[4];
        x[4] = temp;
        temp = x[8];
        x[8] = x[11];
        x[11] = x[10];
        x[10] = x[9];
        x[9] = temp;
        break;
            
    case 3:
        temp = x[0];
        x[0] = x[1];
        x[1] = x[2];
        x[2] = x[3];
        x[3] = temp;
        temp = x[4];
        x[4] = x[8];
        x[8] = x[16];
        x[16] = x[20];
        x[20] = temp;
        temp = x[5];
        x[5] = x[9];
        x[9] = x[17];
        x[17] = x[21];
        x[21] = temp;
        break;
    case 4:
        temp = x[1];
        x[1] = x[23];
        x[23] = x[13];
        x[13] = x[9];
        x[9] = temp;
        temp = x[2];
        x[2] = x[20];
        x[20] = x[14];
        x[14] = x[10];
        x[10] = temp;
        temp = x[4];
        x[4] = x[5];
        x[5] = x[6];
        x[6] = x[7];
        x[7] = temp;
        break;
    case 5:
        temp = x[2];
        x[2] = x[7];
        x[7] = x[12];
        x[12] = x[17];
        x[17] = temp;
        temp = x[3];
        x[3] = x[4];
        x[4] = x[13];
        x[13] = x[18];
        x[18] = temp;
        temp = x[8];
        x[8] = x[9];
        x[9] = x[10];
        x[10] = x[11];
        x[11] = temp;
        break;
            
    case 6:
        temp = x[0];
        x[0] = x[2];
        x[2] = temp;
        temp = x[1];
        x[1] = x[3];
        x[3] = temp;
        temp = x[4];
        x[4] = x[16];
        x[16] = temp;
        temp = x[8];
        x[8] = x[20];
        x[20] = temp;
        temp = x[5];
        x[5] = x[17];
        x[17] = temp;
        temp = x[9];
        x[9] = x[21];
        x[21] = temp;
        break;
    case 7:
        temp = x[1];
        x[1] = x[13];
        x[13] = temp;
        temp = x[23];
        x[23] = x[9];
        x[9] = temp;
        temp = x[2];
        x[2] = x[14];
        x[14] = temp;
        temp = x[20];
        x[20] = x[10];
        x[10] = temp;
        temp = x[4];
        x[4] = x[6];
        x[6] = temp;
        temp = x[5];
        x[5] = x[7];
        x[7] = temp;
        break;
    case 8:
        temp = x[2];
        x[2] = x[12];
        x[12] = temp;
        temp = x[7];
        x[7] = x[17];
        x[17] = temp;
        temp = x[3];
        x[3] = x[13];
        x[13] = temp;
        temp = x[4];
        x[4] = x[18];
        x[18] = temp;
        temp = x[8];
        x[8] = x[10];
        x[10] = temp;
        temp = x[9];
        x[9] = x[11];
        x[11] = temp;
        break;
    }
}

function solvedc(x, n) {
    "use strict";
    var out = false;
    switch (n) {
        case 0:
            if (x[0] == color[0] && x[36] == color[4] && x[47] == color[5]) {
                out = true;
            }
            break;
        case 1:
            if (x[2]==color[0]&&x[11]==color[1]&&x[45]==color[5]){
                out = true;
            }
            break;
        case 2:
            if (x[8]==color[0]&&x[9]==color[1]&&x[20]==color[2]){
                out = true;
            }
            break;
        case 3:
            if (x[6]==color[0]&&x[18]==color[2]&&x[38]==color[4]){
                out = true;
            }
            break;
        case 4:
            if (x[24]==color[2]&&x[27]==color[3]&&x[44]==color[4]){
                out = true;
            }
            break;
        case 5:
            if (x[26]==color[2]&&x[15]==color[1]&&x[29]==color[3]){
                out = true;
            }
            break;
        case 6:
            if (x[17]==color[1]&&x[35]==color[3]&&x[51]==color[5]){
                out = true;
            }
            break;
        default:
            if (x[33]==color[3]&&x[42]==color[4]&&x[53]==color[5]){
                out = true;
            }
    }
    
    return out;
    
}

function solvede(x, n) {
    "use strict";
    var out = false;
    switch(n) {
        case 0:
            if (x[1]==color[0]&&x[46]==color[5]){
                out = true;
            }
            break;
        case 1:
            if (x[5]==color[0]&&x[10]==color[1]){
                out = true;
            }
            break;
        case 2:
            if (x[7]==color[0]&&x[19]==color[2]){
                out = true;
            }
            break;
        case 3:
            if (x[3]==color[0]&&x[37]==color[4]){
                out = true;
            }
            break;
        case 4:
            if (x[39]==color[4]&&x[50]==color[5]){
                out = true;
            }
            break;
        case 5:
            if (x[14]==color[1]&&x[48]==color[5]){
                out = true;
            }
            break;
        case 6:
            if (x[12]==color[1]&&x[23]==color[2]){
                out = true;
            }
            break;
        case 7:
            if (x[21]==color[2]&&x[41]==color[4]){
                out = true;
            }
            break;
        case 8:
            if (x[25]==color[2]&&x[28]==color[3]){
                out = true;
            }
            break;
        case 9:
            if (x[16]==color[1]&&x[32]==color[3]){
                out = true;
            }
            break;
        case 10:
            if (x[33]==color[3]&&x[52]==color[5]){
                out = true;
            }
            break;
        default:
            if (x[30]==color[3]&&x[43]==color[4]){
                out = true;
            }
    }
    
    return out;
    
}

function doX3(m, n = 1) {
    
    var out = m;
    for (var i=0;i<n;i++) {
        switch (out % 6) {
            case 0:
                out +=5;
                break;
            case 2:
                out -= 2;
                break;
            case 3:
                out -= 1;
                break;
            case 5:
                out -= 2;
        }
    }
    
    return out;
    
}

function doY3(m, n = 1) {
    
    var out = m;
    for (var i=0;i<n;i++) {
        switch (out % 6) {
            case 1:
                out += 1;
                break;
            case 2:
                out += 2;
                break;
            case 4:
                out += 5;
                break;
            case 5:
                out -= 4;
        }
    }
    
    return out;
    
}

function doZ3(m, n = 1) {
    
    var out = m;
    for (var i = 0; i < n; i++) {
        switch (out % 6) {
            case 0:
                out += 1;
                break;
            case 1:
                out += 2;
                break;
            case 3:
                out += 1;
            case 4:
                out -= 4;
        }
    }
    
    return out;
    
}

// Slot 0 is least corner, others are counter-clockwise determined
function RUFRotate(m, cross = 0, slot = 0) {
    m = Math.floor(m / 3) * 6 + m % 3;
    switch (cross) {
        case 0:
            m = doY3(doX3(m, 2), 3);
            break;
        case 1:
            m = doX3(doY3(m), 3);
            break;
        case 2:
            m = doX3(m, 3);
            break;
        case 3:
            m = doY3(m, 3);
            break;
        case 4:
            m = doZ3(doX3(m, 2), 3);
            break;
        default:
            m = doX3(doY3(m, 2));
    }
    m = doY3(m, slot);
}

function missingSlot(cube) {
    var out;
    // U Cross
    if (thisCrossSolved(cube, 0) && numPairsSolved(cube, 0) >= 3) {
        if (!(solvedc(0) && solvede(4))) {
            out = 0;
        }
        else if (!(solvedc(1) && solvede(5))) {
            out = 1;
        }
        else if (!(solvedc(2) && solvede(6))) {
            out = 2;
        }
        else {
            out = 3;
        }
    }
    // R cross
    else if (thisCrossSolved(cube, 1) && numPairsSolved(cube, 1) >= 3) {
        if (!(solvedc(1) && solvede(0))) {
            out = 4;
        }
        else if (!(solvedc(6) && solvede(10))) {
            out = 5;
        }
        else if (!(solvedc(5) && solvede(8))) {
            out = 6;
        }
        else {
            out = 7;
        }
    }
    // F cross
    else if (thisCrossSolved(cube, 2) && numPairsSolved(cube, 2) >= 3) {
        if (!(solvedc(2) && solvede(1))) {
            out = 8;
        }
        else if (!(solvedc(5) && solvede(9))) {
            out = 9;
        }
        else if (!(solvedc(4) && solvede(11))) {
            out = 10;
        }
        else {
            out = 11;
        }
    }
    // D cross
    else if (thisCrossSolved(cube, 3) && numPairsSolved(cube, 3) >= 3) {
        if (!(solvedc(4) && solvede(7))) {
            out = 12;
        }
        else if (!(solvedc(5) && solvede(6))) {
            out = 13;
        }
        else if (!(solvedc(6) && solvede(5))) {
            out = 14;
        }
        else {
            out = 15;
        }
    }
    // L cross
    else if (thisCrossSolved(cube, 4) && numPairsSolved(cube, 4) >= 3) {
        if (!(solvedc(0) && solvede(0))) {
            out = 16;
        }
        else if (!(solvedc(3) && solvede(2))) {
            out = 17;
        }
        else if (!(solvedc(4) && solvede(8))) {
            out = 18;
        }
        else {
            out = 19;
        }
    }
    // B cross
    else {
        if (!(solvedc(0) && solvede(3))) {
            out = 20;
        }
        else if (!(solvedc(8) && solvede(11))) {
            out = 21;
        }
        else if (!(solvedc(6) && solvede(9))) {
            out = 22;
        }
        else {
            out = 23;
        }
    }

    return out;
}

function copyCube3() {
    var x = document.getElementsByClassName("sticker3"), out=[];
    for (var i = 0; i < 54; i++) {
        out.push(x[i].style.fill);
    }
    return out;
}

function completeSolve() {
    var solution = [], temp, cube = copyCube3();
    solution = solveCross(cube);
    for (var i = 1; i < 4; i++) {
        console.log(i);
        if (numPairsSolved(cube) < i) {
            for (var j = 1; j < 11; j++) {
                console.log(j);
                temp = [];
                temp = solveF2LByMove(cube, i , j);
                if (temp[0] != -1) {
                    break;
                }
            }
            for (var j = 0; j < temp.length; j++) {
                doSolMove3(cube,temp[j]);
                solution.push(temp[j]);
            }
        }
    }
    if (numPairsSolved(cube) < 4) {
        var missing = missingSlot(cube),
            cross = Math.floor(missing / 4),
            slot = missing % 4;
            console.log(cross+' '+slot);
        for (var j = 1; j < 11; j++) {
            console.log(j);
            temp=[];
            temp = solveF2L4ByMove(cube, cross, slot, j);
            if (temp[0] != -1) {
                break;
            }
        }
        for (var j = 0; j < temp.length; j++) {
            doSolMove3(cube, temp[j]);
            solution.push(temp[j]);
        }
    }
    console.log(solution);
    return solution;
    
}

// Solves up to 3 pairs (4th is slow)
function solveF2LByMove(cube, n, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 18; i++) {
        if (currlen == 1 || lastmove % 6 != i % 6) {
            solution = [];
            temp = [];
            for (var j = 0; j < 54; j++) {
                temp.push(cube[j]);
            }
            doSolMove3(temp, i);
            solution.push(i);
            if (currlen == maxlen && numPairsSolved(temp) >= n) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveF2LByMove(temp, n, maxlen, i, currlen + 1);
                if (partial[0] != -1) {
                    for (var j = 0; j < partial.length; j++) {
                        solution.push(partial[j]);
                    }
                    done = true;
                    break;
                }
            }
        }
    }
    
    if(!done){
        solution=[];
        solution.push(-1);
    }
    
    return solution;
}

function solveF2L4ByMove(cube, cross, slot, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial, temp, done = false;
    for (var i = 0; i < 9; i++) {
        if (currlen == 1 || lastmove % 3 != i % 3) {
            solution = [];
            temp = [];
            for (var j = 0; j < 54; j++) {
                temp.push(cube[j]);
            }
            doSolMove3(temp, RUFRotate(i, cross, slot));
            solution.push(RUFRotate(i, cross, slot));
            if (currlen == maxlen && numPairsSolved(temp) == 4) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveF2L4ByMove(temp, cross, slot, maxlen, i, currlen + 1);
                if (partial[0] != -1) {
                    for (var j = 0; j < partial.length; j++) {
                        solution.push(partial[j]);
                    }
                    done = true;
                    break;
                }
            }
        }
    }
    if (!done) {
        solution = [];
        solution.push(-1);
    }    
    return solution;
}

function solveCross(cube) {
    var solution = [], temp;
    if (!crossSolved(cube)) {
        for (var j = 1; j < 9; j++) {
            console.log(i);
            temp = [];
            temp = solveCrossByMove(cube, j);
            if (temp[0] != -1) {
                break;
            }
        }
        for (var j = 0; j < temp.length; j++) {
            doSolMove3(cube, temp[j]);
            solution.push(temp[j]);
        }
    }
    return solution;
}

function solveCrossByMove(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 18; i++) {
        if (currlen == 1 || lastmove % 6 != i % 6) {
            solution = [];
            temp = [];
            for (var j = 0; j < 54; j++) {
                temp.push(cube[j]);
            }
            doSolMove3(temp, i);
            solution.push(i);
            if (currlen == maxlen && crossSolved(cube)) {
                done = true;
                break;
            }
            else if (currlen < maxlen) {
                partial = solveCrossByMove(temp, maxlen, i, currlen + 1);
                if (partial[0] != -1) {
                    for (var j = 0; j < partial.length; j++) {
                        solution.push(partial[j]);
                    }
                    done = true;
                    break;
                }
            }
        }
    }
    
    if (!done) {
        solution = [];
        solution.push(-1);
    }
    return solution;
}

function crossSolved(cube) {
    var out = false;
    for (var i = 0; i < 6; i++) {
        if (thisCrossSolved(cube, i)) {
            out = true;
                break;
        }
    }
    return out;
}

function thisCrossSolved(cube, n) {
    var out = false;
    if (!n && solvede(cube,0) && solvede(cube,1) && solvede(cube,2) && solvede(cube,3)) {
        out = true;
    }
    else if (n==1&&solvede(cube,1)&&solvede(cube,5)&&solvede(cube,6)&&solvede(cube,9)){
        out=true;
    }
    else if (n==2&&solvede(cube,2)&&solvede(cube,6)&&solvede(cube,7)&&solvede(cube,8)){
        out=true;
    }
    else if (n==3&&solvede(cube,8)&&solvede(cube,9)&&solvede(cube,10)&&solvede(cube,11)){
        out=true;
    }
    else if (n==4&&solvede(cube,3)&&solvede(cube,4)&&solvede(cube,7)&&solvede(cube,11)){
        out=true;
    }
    else if (n==5&&solvede(cube,0)&&solvede(cube,4)&&solvede(cube,5)&&solvede(cube,10)){
        out=true;
    }
    
    return out;
}

function numPairsSolved(cube, n = 6) {
    var temp, out=0;
    
    if (thisCrossSolved(cube, 0)) {
        if (solvedc(cube,0) && solvede(cube,4)){
            out++;
        }
        if (solvedc(cube,1) && solvede(cube,5)){
            out++;
        }
        if (solvedc(cube,2) && solvede(cube,6)){
            out++;
        }
        if (solvedc(cube,3) && solvede(cube,7)){
            out++;
        }
    }
    if (n > 1 && thisCrossSolved(cube,1)) {
        if(solvedc(cube,1)&&solvede(cube,0)){
            temp++;
        }
        if(solvedc(cube,2)&&solvede(cube,2)){
            temp++;
        }
        if(solvedc(cube,5)&&solvede(cube,8)){
            temp++;
        }
        if(solvedc(cube,6)&&solvede(cube,10)){
            temp++;
        }
        if (temp>out){
            out=temp;
        }
    }
    if (n>2&&thisCrossSolved(cube,2)) {
        if(solvedc(cube,2)&&solvede(cube,1)){
            temp++;
        }
        if(solvedc(cube,3)&&solvede(cube,3)){
            temp++;
        }
        if(solvedc(cube,4)&&solvede(cube,11)){
            temp++;
        }
        if(solvedc(cube,5)&&solvede(cube,9)){
            temp++;
        }
        if (temp>out){
            out=temp;
        }
    }
    if (n>3&&thisCrossSolved(cube,3)) {
        if(solvedc(cube,4)&&solvede(cube,7)){
            temp++;
        }
        if(solvedc(cube,5)&&solvede(cube,6)){
            temp++;
        }
        if(solvedc(cube,6)&&solvede(cube,5)){
            temp++;
        }
        if(solvedc(cube,7)&&solvede(cube,4)){
            temp++;
        }
        if (temp>out){
            out=temp;
        }
    }
    if (n>4&&thisCrossSolved(cube,4)) {
        if(solvedc(cube,0)&&solvede(cube,0)){
            temp++;
        }
        if(solvedc(cube,3)&&solvede(cube,2)){
            temp++;
        }
        if(solvedc(cube,4)&&solvede(cube,8)){
            temp++;
        }
        if(solvedc(cube,7)&&solvede(cube,10)){
            temp++;
        }
        if (temp>out){
            out=temp;
        }
    }
    if (n>5&&thisCrossSolved(cube,5)) {
        if(solvedc(cube,0)&&solvede(cube,3)){
            temp++;
        }
        if(solvedc(cube,1)&&solvede(cube,1)){
            temp++;
        }
        if(solvedc(cube,6)&&solvede(cube,9)){
            temp++;
        }
        if(solvedc(cube,7)&&solvede(cube,11)){
            temp++;
        }
        if (temp>out){
            out=temp;
        }
    }
    
    return out;
}

function doSolMove3(x, n) {
    "use strict";
    var temp;
    switch (n) {
    case 0:
        temp = x[0];
        x[0] = x[6];
        x[6] = x[8];
        x[8] = x[2];
        x[2] = temp;
        temp = x[9];
        x[9] = x[45];
        x[45] = x[36];
        x[36] = x[18];
        x[18] = temp;
        temp = x[11];
        x[11] = x[47];
        x[47] = x[38];
        x[38] = x[20];
        x[20] = temp;
        temp = x[1];
        x[1] = x[3];
        x[3] = x[7];
        x[7] = x[5];
        x[5] = temp;  
        temp = x[10];
        x[10] = x[46];
        x[46] = x[37];
        x[37] = x[19];
        x[19] = temp;
        break;
    case 1:
        temp = x[2];
        x[2] = x[20];
        x[20] = x[29];
        x[29] = x[51];
        x[51] = temp;
        temp = x[8];
        x[8] = x[26];
        x[26] = x[35];
        x[35] = x[45];
        x[45] = temp;
        temp = x[9];
        x[9] = x[15];
        x[15] = x[17];
        x[17] = x[11];
        x[11] = temp;
        temp = x[5];
        x[5] = x[23];
        x[23] = x[32];
        x[32] = x[48];
        x[48] = temp;  
        temp = x[10];
        x[10] = x[12];
        x[12] = x[16];
        x[16] = x[14];
        x[14] = temp;
        break;
    case 2:
        temp = x[6];
        x[6] = x[44];
        x[44] = x[29];
        x[29] = x[9];
        x[9] = temp;
        temp = x[8];
        x[8] = x[38];
        x[38] = x[27];
        x[27] = x[15];
        x[15] = temp;
        temp = x[18];
        x[18] = x[24];
        x[24] = x[26];
        x[26] = x[20];
        x[20] = temp;
        temp = x[7];
        x[7] = x[41];
        x[41] = x[28];
        x[28] = x[12];
        x[12] = temp;
        temp = x[19];
        x[19] = x[21];
        x[21] = x[25];
        x[25] = x[23];
        x[23] = temp;
        break;
    case 3:
        temp = x[15];
        x[15] = x[24];
        x[24] = x[42];
        x[42] = x[51];
        x[51] = temp;
        temp = x[17];
        x[17] = x[26];
        x[26] = x[44];
        x[44] = x[53];
        x[53] = temp;
        temp = x[27];
        x[27] = x[33];
        x[33] = x[35];
        x[35] = x[29];
        x[29] = temp;
        temp = x[16];
        x[16] = x[25];
        x[25] = x[43];
        x[43] = x[52];
        x[52] = temp;
        temp = x[28];
        x[28] = x[30];
        x[30] = x[34];
        x[34] = x[32];
        x[32] = temp;
        break;
    case 4:
        temp = x[0];
        x[0] = x[53];
        x[53] = x[27];
        x[27] = x[18];
        x[18] = temp;
        temp = x[6];
        x[6] = x[47];
        x[47] = x[33];
        x[33] = x[24];
        x[24] = temp;
        temp = x[36];
        x[36] = x[42];
        x[42] = x[44];
        x[44] = x[38];
        x[38] = temp;
        temp = x[3];
        x[3] = x[50];
        x[50] = x[30];
        x[30] = x[21];
        x[21] = temp;
        temp = x[37];
        x[37] = x[39];
        x[39] = x[43];
        x[43] = x[41];
        x[41] = temp;
        break;
    case 5:
        temp = x[0];
        x[0] = x[11];
        x[11] = x[35];
        x[35] = x[42];
        x[42] = temp;
        temp = x[2];
        x[2] = x[17];
        x[17] = x[33];
        x[33] = x[36];
        x[36] = temp;
        temp = x[45];
        x[45] = x[51];
        x[51] = x[53];
        x[53] = x[47];
        x[47] = temp;
        temp = x[1];
        x[1] = x[14];
        x[14] = x[34];
        x[34] = x[39];
        x[39] = temp;
        temp = x[46];
        x[46] = x[48];
        x[48] = x[52];
        x[52] = x[50];
        x[50] = temp;
        break;
            
    case 6:
        for(var i=0; i < 3; i++){
            doSolMove3(x,0);
        }
        break;
    case 7:
        for(var i=0; i < 3; i++){
            doSolMove3(x,1);
        }
        break;
    case 8:
        for(var i=0; i < 3; i++){
            doSolMove3(x,2);
        }
        break;
    case 9:
        for(var i=0; i < 3; i++){
            doSolMove3(x,3);
        }
        break;
    case 10:
        for(var i=0; i < 3; i++){
            doSolMove3(x,4);
        }
        break;
    case 11:
        for(var i=0; i < 3; i++){
            doSolMove3(x,5);
        }
        break;
            
    case 12:
        doSolMove3(x,0);
        doSolMove3(x,0);
        break;
    case 13:
        doSolMove3(x,1);
        doSolMove3(x,1);
        break;
    case 14:
        doSolMove3(x,2);
        doSolMove3(x,2);
        break;
    case 15:
        doSolMove3(x,3);
        doSolMove3(x,3);
        break;
    case 16:
        doSolMove3(x,4);
        doSolMove3(x,4);
        break;
    default:
        doSolMove3(x,5);
        doSolMove3(x,5);
    }
}