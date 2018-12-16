function setColor3(pos) {
    "use strict";
    if (isHold) {
        var x = document.getElementsByClassName("sticker3");
        x[pos].style.fill = color[hold];
    }
    console.log(pos);
}

function reset3() {
    "use strict";
    var x = document.getElementsByClassName("sticker3");
    for (var i = 0; i < x.length; i++) {
        x[i].style.fill = color[Math.floor(i/9)];
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

function doSolMove3(cube, m) {
    "use strict";
    var temp;
    
    switch (m) {
        // U
        case 0:
            temp = cube.permc[0];
            cube.permc[0] = cube.permc[3];
            cube.permc[3] = cube.permc[2];
            cube.permc[2] = cube.permc[1];
            cube.permc[1] = temp;
            temp = cube.perme[0];
            cube.perme[0] = cube.perme[3];
            cube.perme[3] = cube.perme[2];
            cube.perme[2] = cube.perme[1];
            cube.perme[1] = temp;
            break;
        // R
        case 1:
            cube.orientc[cube.permc[1]] = (cube.orientc[cube.permc[1]] + 1) % 3;
            cube.orientc[cube.permc[2]] = (cube.orientc[cube.permc[2]] + 2) % 3;
            cube.orientc[cube.permc[5]] = (cube.orientc[cube.permc[5]] + 1) % 3;
            cube.orientc[cube.permc[6]] = (cube.orientc[cube.permc[6]] + 2) % 3;
            temp = cube.permc[1];
            cube.permc[1] = cube.permc[2];
            cube.permc[2] = cube.permc[5];
            cube.permc[5] = cube.permc[6];
            cube.permc[6] = temp;
            temp = cube.perme[1];
            cube.perme[1] = cube.perme[6];
            cube.perme[6] = cube.perme[9];
            cube.perme[9] = cube.perme[5];
            cube.perme[5] = temp;
            break;
        // F
        case 2:
            cube.orientc[cube.permc[2]] = (cube.orientc[cube.permc[2]] + 1) % 3;
            cube.orientc[cube.permc[3]] = (cube.orientc[cube.permc[3]] + 2) % 3;
            cube.orientc[cube.permc[4]] = (cube.orientc[cube.permc[4]] + 1) % 3;
            cube.orientc[cube.permc[5]] = (cube.orientc[cube.permc[5]] + 2) % 3;
            cube.oriente[cube.perme[2]] = (cube.oriente[cube.perme[2]] + 1) % 2;
            cube.oriente[cube.perme[6]] = (cube.oriente[cube.perme[6]] + 1) % 2;
            cube.oriente[cube.perme[7]] = (cube.oriente[cube.perme[7]] + 1) % 2;
            cube.oriente[cube.perme[8]] = (cube.oriente[cube.perme[8]] + 1) % 2;
            temp = cube.permc[2];
            cube.permc[2] = cube.permc[3];
            cube.permc[3] = cube.permc[4];
            cube.permc[4] = cube.permc[5];
            cube.permc[5] = temp;
            temp = cube.perme[2];
            cube.perme[2] = cube.perme[7];
            cube.perme[7] = cube.perme[8];
            cube.perme[8] = cube.perme[6];
            cube.perme[6] = temp;
            break;
        // D
        case 3:
            temp = cube.permc[4];
            cube.permc[4] = cube.permc[7];
            cube.permc[7] = cube.permc[6];
            cube.permc[6] = cube.permc[5];
            cube.permc[5] = temp;
            temp = cube.perme[8];
            cube.perme[8] = cube.perme[11];
            cube.perme[11] = cube.perme[10];
            cube.perme[10] = cube.perme[9];
            cube.perme[9] = temp;
            break;
        // L
        case 4:
            cube.orientc[cube.permc[0]] = (cube.orientc[cube.permc[0]] + 2) % 3;
            cube.orientc[cube.permc[3]]=(cube.orientc[cube.permc[3]]+1)%3;
            cube.orientc[cube.permc[4]]=(cube.orientc[cube.permc[4]]+2)%3;
            cube.orientc[cube.permc[7]]=(cube.orientc[cube.permc[7]]+1)%3;
            temp=cube.permc[0];
            cube.permc[0]=cube.permc[7];
            cube.permc[7]=cube.permc[4];
            cube.permc[4]=cube.permc[3];
            cube.permc[3]=temp;
            temp = cube.perme[3];
            cube.perme[3] = cube.perme[4];
            cube.perme[4] = cube.perme[11];
            cube.perme[11] = cube.perme[7];
            cube.perme[7] = temp;
            break;
        // B
        case 5:
            cube.orientc[cube.permc[0]]=(cube.orientc[cube.permc[0]]+1)%3;
            cube.orientc[cube.permc[1]]=(cube.orientc[cube.permc[1]]+2)%3;
            cube.orientc[cube.permc[6]]=(cube.orientc[cube.permc[6]]+1)%3;
            cube.orientc[cube.permc[7]]=(cube.orientc[cube.permc[7]]+2)%3;
            cube.oriente[cube.perme[0]]=(cube.oriente[cube.perme[0]]+1)%2;
            cube.oriente[cube.perme[4]]=(cube.oriente[cube.perme[4]]+1)%2;
            cube.oriente[cube.perme[5]]=(cube.oriente[cube.perme[5]]+1)%2;
            cube.oriente[cube.perme[10]]=(cube.oriente[cube.perme[10]]+1)%2;
            temp=cube.permc[0];
            cube.permc[0]=cube.permc[1];
            cube.permc[1]=cube.permc[6];
            cube.permc[6]=cube.permc[7];
            cube.permc[7]=temp;
            temp = cube.perme[0];
            cube.perme[0] = cube.perme[5];
            cube.perme[5] = cube.perme[10];
            cube.perme[10] = cube.perme[4];
            cube.perme[4] = temp;
            break;

        // U'
        case 6:
            doSolMove3(cube, 0);
            doSolMove3(cube, 12);
            break;
        // R'
        case 7:
            doSolMove3(cube, 1);
            doSolMove3(cube, 13);
            break;
        // F'
        case 8:
            doSolMove3(cube, 2);
            doSolMove3(cube, 14);
            break;
        // D'
        case 9:
            doSolMove3(cube, 3);
            doSolMove3(cube, 15);
            break;
        // L'
        case 10:
            doSolMove3(cube, 4);
            doSolMove3(cube, 16);
            break;
        // B'
        case 11:
            doSolMove3(cube, 5);
            doSolMove3(cube, 17);
            break;

        // U2
        case 12:
            doSolMove3(cube, 0);
            doSolMove3(cube, 0);
            break;
        // R2
        case 13:
            doSolMove3(cube, 1);
            doSolMove3(cube, 1);
            break;
        // F2
        case 14:
            doSolMove3(cube, 2);
            doSolMove3(cube, 2);
            break;
        // D2
        case 15:
            doSolMove3(cube, 3);
            doSolMove3(cube, 3);
            break;
        // L2
        case 16:
            doSolMove3(cube, 4);
            doSolMove3(cube, 4);
            break;
        // B2
        default:
            doSolMove3(cube, 5);
            doSolMove3(cube, 5);
    }
}

function doRULMove(cube, orient, m) {
    if (m % 3 == 2) {
        out = Math.floor(m / 3) * 6 + 4;
    }
    switch (orient) {
        case 0:
            m = doY3(doX3(m, 2));
            break;
        case 1:
            m = doX3(m, 2);
            break;
        case 2:
            m = doY3(doZ3(m));
            break;
        case 3:
            m = doZ3(m);
            break;
        case 4:
            m = doX3(m, 3);
            break;
        case 5:
            m = doY3(doX3(m, 3));
            break;
        case 6:
            m = doY3(m);
            break;
        case 8:
            m = doX3(doY3(m));
            break;
        case 9:
            m = doZ3(m, 3);
            break;
        case 10:
            m = doX3(m);
            break;
        case 11:
            m = doY3(doX3(m));
    }
    doSolMove3(cube, m);
}

function scramble3() {
    "use strict";
    for (var i = 0; i < 100; i++) {
        doMove3(Math.floor(Math.random()*18));
    }
}

function toCubie() {
    "use strict"
    var x = document.getElementsByClassName("sticker3"), cube = [], out = {permc : [], orientc : [], perme : [], oriente : []}, temp;
    for (var i = 0; i < 54; i++) {
        cube.push(x[i].style.fill);
    }
    for (var i = 0; i < 8; i++) {
        out.orientc.push(0);
    }
    for (var i = 0; i < 12; i++) {
        out.oriente.push(0);
    }
    for (var i = 0; i < 8; i++) {
        temp = getCorner(cube, i);
        out.permc.push(temp[0]);
        out.orientc[temp[0]] = temp[1];
    }
    
    for (var i = 0; i < 12; i++) {
        temp = getEdge(cube, i);
        out.perme.push(temp[0]);
        out.oriente[temp[0]] = temp[1];
    }
    
    return out;
}

function copyCube3(cube) {
    var out = {permc : [], orientc : [], perme : [], oriente : []};
    for (var i = 0; i < 8; i++) {
        out.permc.push(cube.permc[i]);
        out.orientc.push(cube.orientc[i]);
    }
    for (var i = 0; i < 12; i++) {
        out.perme.push(cube.perme[i]);
        out.oriente.push(cube.oriente[i]);
    }
    return out;
}

function getCorner(cube, n) {
    var out = [], corner = [];
    switch (n) {
        case 0:
            corner.push(cube[0]);
            corner.push(cube[47]);
            corner.push(cube[36]);
            break;
        case 1:
            corner.push(cube[2]);
            corner.push(cube[11]);
            corner.push(cube[45]);
            break;
        case 2:
            corner.push(cube[8]);
            corner.push(cube[20]);
            corner.push(cube[9]);
            break;
        case 3:
            corner.push(cube[6]);
            corner.push(cube[38]);
            corner.push(cube[18]);
            break;
        case 4:
            corner.push(cube[27]);
            corner.push(cube[24]);
            corner.push(cube[44]);
            break;
        case 5:
            corner.push(cube[29]);
            corner.push(cube[15]);
            corner.push(cube[26]);
            break;
        case 6:
            corner.push(cube[35]);
            corner.push(cube[51]);
            corner.push(cube[17]);
            break;
        default:
            corner.push(cube[33]);
            corner.push(cube[42]);
            corner.push(cube[53]);
    }
    var out = [];
    if (contains(corner, cube[4]) &&
        contains(corner, cube[49]) &&
        contains(corner, cube[40]) &&
        corner[contains(corner, cube[4]) % 3] == cube[49]) {
        out.push(0);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[13]) &&
             contains(corner, cube[49]) &&
             corner[contains(corner, cube[4]) % 3] == cube[13]) {
        out.push(1);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[22]) &&
             contains(corner, cube[13]) &&
             corner[contains(corner, cube[4]) % 3] == cube[22]) {
        out.push(2);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[4]) &&
             contains(corner, cube[40]) &&
             contains(corner, cube[22]) &&
             corner[contains(corner, cube[4]) % 3] == cube[40]) {
        out.push(3);
        out.push(contains(corner, cube[4]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[22]) &&
             contains(corner, cube[40]) &&
             corner[contains(corner,cube[31]) % 3] == cube[22]) {
        out.push(4);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[13]) &&
             contains(corner, cube[22]) &&
             corner[contains(corner, cube[31]) % 3] == cube[13]) {
        out.push(5);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[49]) &&
             contains(corner, cube[13]) &&
             corner[contains(corner, cube[31]) % 3] == cube[49]) {
        out.push(6);
        out.push(contains(corner, cube[31]) - 1);
    }
    else if (contains(corner, cube[31]) &&
             contains(corner, cube[40]) &&
             contains(corner, cube[49]) &&
             corner[contains(corner, cube[31]) % 3] == cube[40]) {
        out.push(7);
        out.push(contains(corner, cube[31]) - 1);
    }
    
    return out;
}

function getEdge(cube, n) {
    var out = [], edge = [];
    switch (n) {
        case 0:
            edge.push(cube[1]);
            edge.push(cube[46]);
            break;
        case 1:
            edge.push(cube[5]);
            edge.push(cube[10]);
            break;
        case 2:
            edge.push(cube[7]);
            edge.push(cube[19]);
            break;
        case 3:
            edge.push(cube[3]);
            edge.push(cube[37]);
            break;
        case 4:
            edge.push(cube[50]);
            edge.push(cube[39]);
            break;
        case 5:
            edge.push(cube[48]);
            edge.push(cube[14]);
            break;
        case 6:
            edge.push(cube[23]);
            edge.push(cube[12]);
            break;
        case 7:
            edge.push(cube[21]);
            edge.push(cube[41]);
            break;
        case 8:
            edge.push(cube[28]);
            edge.push(cube[25]);
            break;
        case 9:
            edge.push(cube[32]);
            edge.push(cube[16]);
            break;
        case 10:
            edge.push(cube[34]);
            edge.push(cube[52]);
            break;
        default:
            edge.push(cube[30]);
            edge.push(cube[43]);
    }
    var out = [];
    if (contains(edge, cube[4]) &&
        contains(edge, cube[49])) {
        out.push(0);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[13])) {
        out.push(1);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[22])) {
        out.push(2);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[4]) &&
        contains(edge, cube[40])) {
        out.push(3);
        out.push(contains(edge, cube[4]) - 1);
    }
    else if (contains(edge, cube[49]) &&
        contains(edge, cube[40])) {
        out.push(4);
        out.push(contains(edge, cube[49]) - 1);
    }
    else if (contains(edge, cube[49]) &&
        contains(edge, cube[13])) {
        out.push(5);
        out.push(contains(edge, cube[49]) - 1);
    }
    else if (contains(edge, cube[22]) &&
        contains(edge, cube[13])) {
        out.push(6);
        out.push(contains(edge, cube[22]) - 1);
    }
    else if (contains(edge, cube[22]) &&
        contains(edge, cube[40])) {
        out.push(7);
        out.push(contains(edge, cube[22]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[22])) {
        out.push(8);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[13])) {
        out.push(9);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[49])) {
        out.push(10);
        out.push(contains(edge, cube[31]) - 1);
    }
    else if (contains(edge, cube[31]) &&
        contains(edge, cube[40])) {
        out.push(11);
        out.push(contains(edge, cube[31]) - 1);
    }
    
    return out;
}

function contains(s, c) {
    var out = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == c) {
            out = i + 1;
            break;
        }
    }
    return out;
}

function isValid3() {
    "use strict"
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

function solvedc(cube, c) {
    "use strict";
    return (cube.permc[c] == c && !cube.orientc[c]);
}

function solvede(cube, e) {
    "use strict";
    return (cube.perme[e] == e && !cube.oriente[e]);
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

function completeSolve() {
    var solution = [], temp, cube = toCubie();
    if (!crossSolved(cube)) {
        solution = solveCross(cube);
        for (var i = 0; i < solution.length; i++) {
            doSolMove3(cube, solution[i]);
        }
        console.log(translate3(solution));
    }
    for (var i = 1; i < 4; i++) {
        if (numPairsSolved(cube) < i) {
            console.log(translate3(solution));
            for (var j = 1; j < 11; j++) {
                console.log(j);
                temp = [];
                temp = solveF2LByMove(cube, i, j);
                if (temp[0] != -1) {
                    break;
                }
            }
            for (var j = 0; j < temp.length; j++) {
                doSolMove3(cube, temp[j]);
                solution.push(temp[j]);
            }
        }
    }
    console.log(solution);
    return solution;
}

function solveCross(cube) {
    var solution = [], temp;
    if (!crossSolved(cube)) {
        for (var i = 1; i < 9; i++) {
            temp = [];
            temp = solveCrossByMove(cube, i);
            if (temp[0] != -1) {
                break;
            }
        }
        for (var i = 0; i < temp.length; i++) {
            doSolMove3(cube, temp[i]);
            solution.push(temp[i]);
        }
    }
    return solution;
}

function solveCrossByMove(cube, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 18; i++) {
        if (currlen == 1 || lastmove % 6 != i % 6) {
            solution = [];
            temp = copyCube3(cube);
            doSolMove3(temp, i);
            solution.push(i);
            if (currlen == maxlen && crossSolved(temp)) {
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
    if (!n && solvede(cube, 0) && solvede(cube, 1) && solvede(cube, 2) && solvede(cube, 3)) {
        out = true;
    }
    else if (n == 1 && solvede(cube, 1) && solvede(cube, 5) && solvede(cube, 6) && solvede(cube, 9)) {
        out = true;
    }
    else if (n == 2 && solvede(cube, 2) && solvede(cube, 6) && solvede(cube, 7) && solvede(cube, 8)) {
        out = true;
    }
    else if (n == 3 && solvede(cube, 8) && solvede(cube, 9) && solvede(cube, 10) && solvede(cube, 11)) {
        out = true;
    }
    else if (n == 4 && solvede(cube, 3) && solvede(cube, 4) && solvede(cube, 7) && solvede(cube, 11)) {
        out = true;
    }
    else if (n == 5 && solvede(cube, 0) && solvede(cube, 4) && solvede(cube, 5) && solvede(cube, 10)) {
        out = true;
    }
    return out;
}

// Based off orientation of cube in pair 0 
function findOrient(cube, cross, e) {
    var out = cube.oriente[e];
    switch (cross) {
        case 0:
        case 1:
        case 3:
        case 4:
            out++;
            break;
        case 2:
            if (!e || e == 10) {
                out++;
            }
            break;
        case 5:
            if (e == 2 || e == 8) {
                out++;
            }    
    }
    console.log(out);
    return out % 2;
}

// Solves up to 3 pairs (4th is slow)
function solveF2LByMove(cube, n, maxlen, lastmove = 0, currlen = 1) {
    var solution, partial = [], temp, done = false;
    for (var i = 0; i < 18; i++) {
        if (currlen == 1 || lastmove % 6 != i % 6) {
            solution = [];
            temp = copyCube3(cube);
            console.log(temp.permc);
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
    
    if (!done) {
        solution=[];
        solution.push(-1);
    }
    
    return solution;
}

function numPairsSolved(cube, n = 6) {
    var temp, out = 0;
    
    if (thisCrossSolved(cube, 0)) {
        if (solvedc(cube, 0) && solvede(cube, 4)) {
            out++;
        }
        if (solvedc(cube, 1) && solvede(cube, 5)) {
            out++;
        }
        if (solvedc(cube, 2) && solvede(cube, 6)) {
            out++;
        }
        if (solvedc(cube, 3) && solvede(cube, 7)) {
            out++;
        }
    }
    if (n > 0 && thisCrossSolved(cube, 1)) {
        if (solvedc(cube, 1) && solvede(cube, 0)) {
            temp++;
        }
        if (solvedc(cube, 2) && solvede(cube, 2)) {
            temp++;
        }
        if (solvedc(cube, 5) && solvede(cube, 8)) {
            temp++;
        }
        if (solvedc(cube, 6) && solvede(cube, 10)) {
            temp++;
        }
        if (temp > out) {
            out = temp;
        }
    }
    temp = 0;
    if (n > 1 && thisCrossSolved(cube, 2)) {
        if (solvedc(cube, 2) && solvede(cube, 1)) {
            temp++;
        }
        if (solvedc(cube, 3) && solvede(cube, 3)) {
            temp++;
        }
        if (solvedc(cube, 4) && solvede(cube, 11)) {
            temp++;
        }
        if (solvedc(cube, 5) && solvede(cube, 9)) {
            temp++;
        }
        if (temp > out) {
            out=temp;
        }
    }
    temp = 0;
    if (n > 2 && thisCrossSolved(cube, 3)) {
        if (solvedc(cube, 4) &&solvede(cube,7)){
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
    temp = 0;
    if (n > 3 && thisCrossSolved(cube,4)) {
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
            out = temp;
        }
    }
    temp = 0;
    if (n > 4 && thisCrossSolved(cube, 5)) {
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