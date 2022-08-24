function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(200,175);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,75,75,350,350);
    circle(50,50,70);
    circle(450,50,70);
    circle(50,450,70);
    circle(450,450,70);
    rect(25,85,50,[330]);
    rect(425,85,50,[330]);
    rect(85,25,330,[50]);
    rect(85,425,330,[50]);
}
function take_snapshot(){
    save('captured_image.png');
}