status = "";
video = "";

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}

function preload()
{
  video = createVideo('video.mp4');
  video.hide();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
}

function modelloaded()
{
    console.log('modelloaded');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
