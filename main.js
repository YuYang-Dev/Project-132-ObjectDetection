
img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage("Picture1.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
}

function modelLoaded()
{
    console.log("cocossd working :O");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result)
{
    if(error)
        console.log(error);
    else
    {
        console.log(result);
        document.getElementById("status").innerHTML = "Status: Objects Detected";
        objects = result;
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    /* old code
    // Dog
    fill("#0f74f7");
    stroke("#0f74f7");
    text("Dog", 35.2112, 70.523513443);
    noFill(); 

    // Cat
    fill("#0f74f7");
    stroke("#0f74f7");
    text("Cat", 310, 70.523513443);
    noFill(); 

    // Bowl
    fill("#0f74f7");
    stroke("#0f74f7");
    text("Bowl", 272.13123214235223452, 332.331113144965);
    noFill(); 

    rect(30, 60, 300, 350); // Dog
    rect(300, 60, 260, 350); // Cat
    rect(270, 320, 135, 90); // Bowl
    */
}