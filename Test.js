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

/*
Update V1.0.2:
Changing of ID
Setting of background in JS

# HabstabEngine
A Javascript Game Engine Created By Me

So, yeah i made a js libary not so suprising.

Anyways..
Part 1(The Basics): 

HTML:
<body>
  <div id="player"></div>
</body>

CSS:
#player{
background-color:red
}

JS:
player = document.getElementById('player') 
Rect = new Obj(0,0,100,100,'red') //Cretes an 'Object' with x is 0 y is 0 width is 100 height is 100 and background is red(Will be used later)


function Update() {
    Setup(player,Rect) //Shows a red square
}

//You should see a red square appear

Anyways... You might wonder what the 'red' was used for in the Rect = new Obj(0,0,100,100,'red')
it is used to set the background color to red without styling or CSS

Part 2(IDK):
Instead of using:

CSS:
#player{
background-color:red
}

JS:
player = document.getElementById('player') 
Rect = new Obj(0,0,100,100,'red') //Cretes an 'Object' with x is 0 y is 0 width is 100 height is 100 and background is red(Will be used later)


function Update() {
    Setup(player,Rect) //Shows a red square
}

You can use:
JS:
player = document.getElementById('player')
Rect = new Obj(0,0,100,100,'red')


function Update() { 
    Setup(player,Rect) //Sets up the Object
    SetupBg(player,Rect) //Sets up the background
}

 //You should also see a red square qppear
 
 Part 3(HELP MEEEEEEEEE):
 You can also change the x and y position of the object by writing:
 
JS:
player = document.getElementById('player')
Rect = new Obj(0,0,100,100,'red')


function Update() {
    Setup(player,Rect)
    SetupBg(player,Rect)
    Rect.MoveX(1) //Moves the x of the object by 1
}

//Or

JS:
player = document.getElementById('player')
Rect = new Obj(0,0,100,100,'red')


function Update() {
    Setup(player,Rect)
    SetupBg(player,Rect)
    Rect.MoveY(1) //Moves the y of the object by 1
}
*/
 


