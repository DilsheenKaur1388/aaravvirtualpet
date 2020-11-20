
var dog,happyDogs;
var database;
var foodS=0, foodStock;
var x;

function preload()
{
  dogs = loadImage("Dog.png");
  happyDogs = loadImage("happydog.png");
}
function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,200,10,10);
  dog.addImage("dog",dogs);
  dog.scale=0.15;
  
 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87)  //maybe add rgb() if this doesn't work
    if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogs);
   
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("red")
  stroke(2);
  text("Food Remaining: "+foodS,100,30);

}
function readStock(data) {
  foodS = data.val();
}
// Sir you there??
// image is not changing
function writeStock(x) {
  if(x <= 0) {
   x= 0;
   }
  else {
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  });
}




