leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(550, 160);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function draw(){
    document.getElementById("font_size").innerHTML = "Text size :" + difference + "px";
    background('grey');
    fill("blue");
    textSize(difference);
    text("Mayank Sharma", 100, 200)
}
function modelLoaded(){
    console.log("Posenet is intialized");
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist x:" + leftWristX + "Right Wrist X :" + rightWristX + "difference :" + difference);

        
    }   
}