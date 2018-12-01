function Sticker(side,pos,color) {
    
    this.side=side||0;
    this.pos=pos||0;
    this.color=color||'#000000';
    
    this.draw = function(c) {
        var p;
        p = c.getContext("2d");
        p.fillStlye=this.color;
        var x, y;
        // U,R,F,D,L,B
        switch(this.side) {
            case 0:
                x=101;
                y=1;
                break;
            case 1:
                x=201;
                y=101;
                break;
            case 2:
                x=101;
                y=101;
                break;
            case 3:
                x=101;
                y=201;
                break;
            case 4:
                x=1;
                y=101;
                break;
            default:
                x=301;
                y=101;
        }
        switch(this.pos) {
            case 1;
                x+=50;
                break;
            case 2:
                x+=50;
                y+=50;
                break;
            case 3:
                y+=50;
                break;
        }
        p.fillRect(x,y,48,48);
        p.rect(x,y,48,48);
        p.stroke();
    }
}

function drawSticker(c,sticker) {
    var p;
    p = c.getContext("2d");
    p.fillStlye=sticker.color;
    var x, y;
    // U,R,F,D,L,B
    switch(sticker.side) {
        case 0:
            x=101;
            y=1;
            break;
        case 1:
            x=201;
            y=101;
            break;
        case 2:
            x=101;
            y=101;
            break;
        case 3:
            x=101;
            y=201;
            break;
        case 4:
            x=1;
            y=101;
            break;
        default:
            x=301;
            y=101;
    }
    switch(sticker.pos) {
        case 1;
            x+=50;
            break;
        case 2:
            x+=50;
            y+=50;
            break;
        case 3:
            y+=50;
            break;
    }
    p.fillRect(x,y,48,48);
    p.rect(x,y,48,48);
    p.stroke();
}