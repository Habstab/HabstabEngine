//The functions
class Object{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    MoveX(n1){
        this.x += n1
    }
    MoveY(n1){
        this.y += n1
    }
    SetX(n1){
        this.x = n1
    }
    SetY(n1){
        this.y = n1
    }
    GetX(){
        return this.x
    }
    CheckCollision(o1,o2,n1, n2){
       if (o1.x < o2.x + o2.w &&
            o1.x + o1.w > o2.x  && o1.y < o2.y + o2.h &&
            o1.y + o1.h > o2.y) {
                this.MoveX(n1)
                this.MoveY(n2)
        }
    }
    GetY(){
        return this.y
    }
    GetWidth(){
        return this.w
    }
    GetHeight(){
        return this.h
    }
}

function Setup(o1,o2){
    o1.style.position = 'absolute';
    o1.style.left = o2.GetX().toString() + 'px';
    o1.style.bottom = o2.GetY().toString() + 'px';
    o1.style.width = o2.GetWidth().toString() + 'px';
    o1.style.height = o2.GetHeight().toString() + 'px';
}
function StopGame(){
    clearInterval(Game)
}
let FPS = 24;
const Game = setInterval(Update,FPS)
//End




