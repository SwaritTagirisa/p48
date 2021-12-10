var bg,bgImg;
var cursor,cursorImg;
var hairSound,hairSoundt;
var noseSound,noseSoundt;
var eyesSound,eyesSoundt;
var fingersSound,fingerSoundt;
var lobeSound,lobeSoundt;
var mouthSound,mouthSoundt;
var stomachSound,stomachSoundt;
var armSound,armSoundt;
var legSound,legSoundt;
var arrowImg,arrow1Img,arrow1,arrow2,arrow3,arrow4,arrow5,arrow6,arrow7,arrow8,arrow9;
function preload() {
    bgImg = loadImage("boybgImg.png");
    hairSound = loadSound("Hair.mp3");
    noseSound = loadSound("nose.mp3");
    cursorImg = loadImage("cursorImg.png");
    arrowImg = loadImage("arrow1.png");
    arrow1Img = loadImage("leftarrow.png");
    eyesSound = loadSound("eyes.mp3");
    fingersSound = loadSound("fingers.mp3");
    lobeSound = loadSound("lobe.mp3");
    stomachSound = loadSound("stomach.mp3");
    armSound = loadSound("arm.mp3");
    legSound = loadSound("leg.mp3");
    hairSoundt = loadSound("hairt.mp3");
    noseSoundt = loadSound("nose_t.mp3");
    mouthSound = loadSound("mouth.mp3");
    eyesSoundt = loadSound("eyest.mp3");
    fingersSoundt = loadSound("fingerst.mp3");
    lobeSoundt = loadSound("lobet.mp3");
    mouthSoundt = loadSound("moutht.mp3");
    stomachSoundt = loadSound("stomacht.mp3");
    legSoundt = loadSound("legt.mp3");
    armSoundt = loadSound("arm_t.mp3");
}

function setup(){
    createCanvas(1300,800);

    bg = createSprite(500,400);
    bg.addImage(bgImg);
    bg.scale = 1.4;




    nose = createSprite(508,185,25,20)
    nose.visible = false;

    arrow1 = createSprite(330,70,150,20);
    arrow1.addImage(arrowImg);
    arrow1.scale = 0.15;

    arrow2 = createSprite(430,190,150,20);
    arrow2.addImage(arrowImg);
    arrow2.scale = 0.15;

    arrow3 = createSprite(377,155,150,20);
    arrow3.addImage(arrowImg);
    arrow3.scale = 0.15;
    
    arrow4 = createSprite(157,305,150,20);
    arrow4.addImage(arrowImg);
    arrow4.scale = 0.15;

    arrow5 = createSprite(670,185,200,20);
    arrow5.addImage(arrow1Img);
    arrow5.scale = 0.25;

    arrow6 = createSprite(580,210,150,20);
    arrow6.addImage(arrow1Img);
    arrow6.scale = 0.25;

    arrow7 = createSprite(400,400,150,20);
    arrow7.addImage(arrowImg);
    arrow7.scale = 0.15;

    arrow8 = createSprite(670,305,150,20);
    arrow8.addImage(arrow1Img);
    arrow8.scale = 0.25;

    arrow9 = createSprite(620,610,150,20);
    arrow9.addImage(arrow1Img);
    arrow9.scale = 0.25;





}

function draw() {

    background(255);

    cursor.x = World.mouseX;
    cursor.y = World.mouseY;

    
    if(keyDown("h")){
        hairSound.play();
    }

    if(keyDown("1")){
        hairSoundt.play();
    }
    
    if(keyDown("n")){
        noseSound.play();  
    }

    if(keyDown("2")){
        noseSoundt.play();
    }

    if(keyDown("e")){
        eyesSound.play();
    }

    if(keyDown("3")){
        eyesSoundt.play();
    }

    if(keyDown("f")){
        fingersSound.play();
    }

    if(keyDown("4")){
        fingersSoundt.play();
    }

    if(keyDown("v")){
        lobeSound.play();
    }

    if(keyDown("5")){
        lobeSoundt.play();
    }

    if(keyDown("m")){
        mouthSound.play();
    }

    if(keyDown("6")){
        mouthSoundt.play();
    }

    if(keyDown("s")){
        stomachSound.play();
    }

    if(keyDown("7")){
        stomachSoundt.play();
    }

    if(keyDown("a")){
        armSound.play();
    }

    if(keyDown("8")){
        armSoundt.play();
    }

    if(keyDown("l")){
        legSound.play();
    }

    if(keyDown("9")){
        legSoundt.play();
    }

    drawSprites();
    textSize(20);
    fill("red");
    text("h,1",320,65);
    textSize(20);
    fill("red");
    text("n,2",420,185);
    textSize(20);
    fill("red");
    text("e,3",355,150);
    textSize(20);
    fill("red");
    text("f,4",130,295);
    textSize(20);
    fill("red");
    text("v,5",665,176);
    textSize(20);
    fill("red");
    text("m,6",570,200);
    textSize(20);
    fill("red");
    text("s,7",380,395);
    textSize(20);
    fill("red");
    text("a,8",655,295);
    textSize(20);
    fill("red");
    text("l,9",605,600);
    textSize(30);
    fill("blue");
    text("instructions:",635,50);
    textSize(15);
    fill("blue");
    text("1. press the keys to hear the sounds.",635,80);
    textSize(15);
    fill("blue");
    text("2. letters for english sounds and numbers for telugu sounds.",635,100);
}


