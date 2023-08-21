nosex=0;
nosey=0;
function preload(){
    nariz=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenetiniciar");
}
function gotPoses(results){
    if(results .length>0 ){
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
    }

}
function draw(){
image(video,0,0,300,300);
image(nariz,nosex,nosey,30,30)    
}
function takeSnapshot(){
    save("minhaselfe.png");
}