function preload()
{

}
function setup() {
    canvas= createCanvas(1000, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    
}
function draw() {
    image(video, 200, 50, 600, 400);
    fill(2, 1, 87, 27);
  stroke(127, 63, 120);
    rect(50, 460, 900, 30);
    ellipse(63, 460, 80, 80);
    rect(50, 10, 30, 450);
    ellipse(63, 40, 80, 80);   
    rect(50, 20, 900, 30);
    ellipse(960, 460, 80, 80);
    rect(950, 10, 30, 450);
    ellipse(960, 40, 80, 80); 
}
function take_snapshot(){
    save('Photo_frame_Picture.png');
}
