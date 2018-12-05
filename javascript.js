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
    x.style.display = "block";
    x = document.getElementById("cube3");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
}

function cube3On() {
    "use strict";
    var x = document.getElementById("cube3");
    x.style.display = "block";
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cubepyra");
    x.style.display = "none";
}
        
function cubepyraOn() {
    "use strict";
    var x = document.getElementById("cubepyra");
    x.style.display = "block";
    x = document.getElementById("cube2");
    x.style.display = "none";
    x = document.getElementById("cube3");
    x.style.display = "none";
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