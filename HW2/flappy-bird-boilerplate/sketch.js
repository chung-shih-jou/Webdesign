let cvsWrapper = null;
let mesImg;
let baseImg;
let gmImg;
let loading={};
let position={x:0,y:0};
let V={x:2,y:0};
let Ay=0.5;
let angle=0;
let Choice={back:0,bird:0};
let Count={frame:0,count:10};
let center;
let Wrapper;
let flag={start:false, stop:false};
let x={x1:0,x2:0,x3:0};
let rand=[];
let wing=0;
let num={tens:0,units:0};

function preload() {
    Choice.back = round(random(1)); 
    Choice.bird = round(random(2));
    //pipe distance was same
    //rand=[random(100,0),random(100,50),random(100,0)];
    //rand.push(rand[0]-150, rand[1]-150, rand[2]-150);
    //pipe distance was same
    
    //pipe random
    rand=[random(100,0),random(100,50),random(100,0),round(random(1)),round(random(1)),round(random(1))];
    //pipe random
    baseImg = loadImage("assets/sprites/base.png");
    mesImg = loadImage("assets/sprites/message.png");
    gmImg = loadImage("assets/sprites/gameover.png");
    
    
    loading['bird']=['red', 'blue', 'yellow'].map(
        color => ['downflap', 'midflap', 'upflap'].map(
            flap => loadImage(`assets/sprites/${color}bird-${flap}.png`))); 
            
    loading['background']=['day', 'night'].map(
        bg => loadImage(`assets/sprites/background-${bg}.png`)); 
        
    loading['pipe']=['red', 'green'].map(
        color => ['lower', 'upper'].map(
            position => loadImage(`assets/sprites/pipe-${color}-${position}.png`))); 
            
    loading['number']=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(
        number => loadImage(`assets/sprites/${number}.png`)); 
            
    soundObj = loading['sound']=['wing', 'swoosh', 'point', 'hit', 'die'].map(
            sound => loadSound(`assets/audio/${sound}.wav`));
    
            
            
            
      
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    // setup code below
    center={width:cvsWrapper.offsetWidth/2-0.5,height:cvsWrapper.offsetHeight/2};
    Wrapper={width:cvsWrapper.offsetWidth, height:cvsWrapper.offsetHeight};
    position.y=center.height;
    clear = setInterval(wingwing,200);
    image(baseImg,0,Wrapper.height-baseImg.height*Wrapper.width/baseImg.width, Wrapper.width, baseImg.height*Wrapper.width/baseImg.width); //ground

}

function play(){
    
    num.tens==0?image(loading['number'][num.units],center.width-loading['number'][0].width/2,30):image(loading['number'][num.units],center.width,30);
    if( (center.width<center.width*2-x.x3+3 && center.width*2-x.x3<center.width)||
       (center.width<center.width*4-x.x1+3 && center.width*4-x.x1<center.width )||
       (center.width<center.width*3-x.x2+3 && center.width*3-x.x2<center.width )){
       soundObj[2].play();
       number();
       }
    num.tens==0?image(loading['number'][num.units],center.width-loading['number'][0].width/2,30):image(loading['number'][num.tens],center.width-loading['number'][0].width,30);

}


function number(){
    num.units++;
    num.units%10==0?num.tens++:num.units%=10;
    num.units%=10
    }
function pipeRandom(){
    //pipechoice = round(random(1));
    
    [rand[0],rand[3],x.x1] = Random(0,x.x1,4,true);
    [rand[1],rand[4],x.x2] = Random(1,x.x2,3,true);
    [rand[2],rand[5],x.x3] = Random(2,x.x3,2,true);
    
    x.x1+=2;x.x2+=2;x.x3+=2;
}
function pipeDisatnceSame(){
  
    [rand[0],rand[3],x.x1] = Random(0,x.x1,4,false);
    [rand[1],rand[4],x.x2] = Random(1,x.x2,3,false);
    [rand[2],rand[5],x.x3] = Random(2,x.x3,2,false);
     
    x.x1+=2;x.x2+=2;x.x3+=2;
}
function Random(index, value, times,flag){
    let result=[];
    
    if (flag==true){
        result[0] = center.width*times-value<-40?round(random(100,0)):rand[index];
        result[1] = center.width*times-value<-40?round(random(1)):rand[index+3]; 
        result[2] = center.width*times-value<-40?value-=center.width*3:value;
        if (result[1]==0){
            image(loading.pipe[0][0],center.width*times-value,center.height+result[0]);}
        else{
            image(loading.pipe[0][1],center.width*times-value,-result[0]);}
    }
    else{
        result[0] = center.width*times-value<-40?rand[index]=random(100,0):rand[index];
        result[1] = center.width*times-value<-40?rand[index+3]=rand[index]-150:rand[index+3];
        result[2] = center.width*times-value<-40?value-=center.width*3:value;
        image(loading.pipe[0][0],center.width*times-value,center.height+result[0]);
        image(loading.pipe[0][1],center.width*times-value,result[1]);
    }
    return result;
}

function ready(){
    
        V.y+=Ay;
        translate(0,50);
        rotate(angle);
        scale(1.5)*image(loading.bird[Choice.bird][wing],-loading.bird[0][0].width/2,-loading.bird[0][0].height/2);
        position.y += V.y;
        
        if (angle<Math.PI/4){
            angle+=0.05;
        }
}

function gameOver(){
    //soundObj[2].play()
    push();
    if (position.y>Wrapper.height-baseImg.height*Wrapper.width/baseImg.width-60){ //ground
        flag.stop=true;
        translate(center.width-gmImg.width/2,center.height-gmImg.height/2);
        image(gmImg,0,0);
    }
    // pipe random
    else if( (rand[2]+rand[5]==rand[2] && position.y+51>center.height+rand[2] && center.width<center.width*2-x.x3+52 && center.width*2-x.x3<center.width)||
             (rand[0]+rand[3]==rand[0] && position.y+51>center.height+rand[0] && center.width<center.width*4-x.x1+52 && center.width*4-x.x1<center.width )||
             (rand[1]+rand[4]==rand[1] && position.y+51>center.height+rand[1] && center.width<center.width*3-x.x2+52 && center.width*3-x.x2<center.width ))
    {
        flag.stop=true;
        translate(center.width-gmImg.width/2,center.height-gmImg.height/2);
        image(gmImg,0,0);
    }
    else if( (rand[2]+rand[5]!=rand[2] && position.y+34<-rand[2]+320 && center.width<center.width*2-x.x3+52 && center.width*2-x.x3<center.width)||
             (rand[0]+rand[3]!=rand[0] && position.y+34<-rand[0]+320 && center.width<center.width*4-x.x1+52 && center.width*4-x.x1<center.width )||
             (rand[1]+rand[4]!=rand[1] && position.y+34<-rand[1]+320 && center.width<center.width*3-x.x2+52 && center.width*3-x.x2<center.width ))
    {
        flag.stop=true;
        translate(center.width-gmImg.width/2,center.height-gmImg.height/2);
        image(gmImg,0,0);
    }
    else if(position.y<-30)
    {
        flag.stop=true;
        translate(center.width-gmImg.width/2,center.height-gmImg.height/2);
        image(gmImg,0,0);
    }
    // pipe random
    
    pop();
}


function beginning(){
     
        
        scale(1.5)*image(mesImg,-mesImg.width/2,-mesImg.height/2);
        image(mesImg,-mesImg.width/2,-mesImg.height/2);
        translate(0,50);
        image(loading.bird[Choice.bird][wing],-loading.bird[0][0].width/2,-loading.bird[0][0].height/2);
        
}
function wingwing(){

    wing++;
    wing %= 3;

}

function draw() {
    // Render function (called per frame.)
    
    if (flag.stop){
        //clearInterval(clear);
        soundObj[3].play();
        soundObj[4].play();
        noLoop();
    }
    else{
    
        push();
        if (position.x>=cvsWrapper.offsetWidth){position.x=0;} //背景橫向移動
        image(loading.background[Choice.back],position.x-Wrapper.width,0,Wrapper.width,Wrapper.height);    //background
        image(loading.background[Choice.back],position.x,0,Wrapper.width,Wrapper.height); 
        
        position.x+=V.x;
        translate(center.width,position.y);
        
        if (flag.start){
            ready();
            pop();
            play();
            //pipeDisatnceSame();
            pipeRandom();
            image(baseImg,0,Wrapper.height-baseImg.height*Wrapper.width/baseImg.width, Wrapper.width, baseImg.height*Wrapper.width/baseImg.width);
        }
        else{
           beginning();
        }
        Count.frame=Count.frame<Count.count*3?Count.frame:Count.frame-=Count.count*3;
        Count.frame+=1;
    }
    gameOver();
    
    
}

function keyPressed() {
    //space
    if (keyCode==13){   
        flag.start=true;
        if (flag.stop){
            position={x:center.width,y:center.height};
            V={x:2,y:0};
            Ay=0.5;
            angle=0;
            flag={start:false, stop:false};
            x={x1:0,x2:0,x3:0};
            num={tens:0,units:0};
            loop();
        }
    }
    //beginning
    if (keyCode==32 && flag.stop==false){   
        V.y=-8;
        angle = -Math.PI/4;
        soundObj[0].play();
    }
    
    
}
