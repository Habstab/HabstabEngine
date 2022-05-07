//The functions
class Obj{
    constructor(x,y,w,h,bg){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.bg = bg;
    }
    GetBg(){
        return this.bg 
    }
    SetBg(s1){
        this.bg = s1
    }
    SetWidth(s1){
        this.w = s1
    }
    SetHeight(s1){
        this.h = s1
    }
    ChangeWidth(s1){
        this.w += s1
    }
    ChangeHeight(s1){
        this.h += s1
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

class Hp{
    constructor(x,y,w,h,hp,bg){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.hp = hp;
        this.bg = bg;
    }
    GetBg(){
        return this.bg 
    }
    SetBg(s1){
        this.bg = s1
    }
    SetWidth(s1){
        this.w = s1
    }
    SetHeight(s1){
        this.h = s1
    }
    SetHp(s1){
        this.hp = s1
    }
    ReduceHp(s1){
        this.hp -= s1
    }
    AddHp(s1){
        this.hp += s1
    }
    SetX(n1, n2){
        this.x = n1 / n2
    }
    SetY(n1, n2){
        this.y = n1 / n2
    }
    GetX(){
        return this.x
    }
    GetY(){
        return this.y
    }
    GetHp(){
        return this.hp
    }
    ChangeWidthByHp(h1){
        this.w = this.hp * h1
    }
    GetWidth(){
        return this.w
    }
    GetHeight(){
        return this.h
    }
}

function ChangeId(obj, id) {
    document.getElementById(obj).id = id
}

function Setup(o1,o2){
    o1.style.position = 'absolute';
    o1.style.left = o2.GetX().toString() + 'px';
    o1.style.bottom = o2.GetY().toString() + 'px';
    o1.style.width = o2.GetWidth().toString() + 'px';
    o1.style.height = o2.GetHeight().toString() + 'px';
}

function SetupBg(o1,o2){
    o1.style.backgroundColor = o2.GetBg();
}
function StopGame(){
    clearInterval(Game)
}


let FPS = 24;
const Game = setInterval(Update,FPS)
//End
