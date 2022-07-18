noseX = 0;
noseY=0;
rightWristX = 0;
leftWristX = 0;
difference = 0;


function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);;
 poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
console.log('poseNet is intialised');

}
function gotPoses(results)
{
    if (results.lenght > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        rightWristX= results[0].pose.rightWrist.x;
        leftWristX= results[0].pose.leftWrist.x;
        console.log("noseX = " + noseX + "noseY" + noseY);
        console.log("rightWristX=" + rightWristX + "leftWristX =" + leftWristX);
        difference= floor(leftWristX- rightWristX);
        console.log("difference= " + difference);

    }
}
function draw()
{
    background('#808080');

    fill('#f90093');
   textSize(difference);
   text('harshita', 50,400);
}