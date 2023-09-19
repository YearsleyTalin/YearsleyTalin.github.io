$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
      var difficulty = prompt("What difficulty do you want? 'easy' 'normal' or 'hard'");
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(0,650,50,2)
createPlatform(50,550,50,2)
createPlatform(99,0,2,652)
createPlatform(0,450,50,2)
createPlatform(50,350,50,2)
createPlatform(0,250,50,2)
createPlatform(50,150,50,2)
createPlatform(100,650,50,2)
createPlatform(150,550,50,2)
createPlatform(199,100,2,652)
createPlatform(100,450,50,2)
createPlatform(150,350,50,2)
createPlatform(100,250,50,2)
createPlatform(150,150,50,2)
createPlatform(200,100,50,2)
createPlatform(249,100,2,85)
createPlatform(250,300,50,2)
createPlatform(249,300,2,450)
// createPlatform(200,400,50,2)
createPlatform(370,150,125,2)
createPlatform(0,0,3,750)
createPlatform(0,0,1400,3)
createPlatform(1397,0,3,750)
createPlatform(0,747,1400,3)
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable('eagle',205,115,0,0)
createCollectable('eagle',5,700,0,0)
createCollectable('eagle',485,105,0,0)



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
if (difficulty === "easy") {
  createCannon('bottom',165,6000,15,15)
  createCannon('right',440,10000,300,300)
  createCannon('bottom',365,4500,15,15)
  createCannon('bottom',390,5000,15,15)
  createCannon('bottom',415,5500,15,15)
}
if (difficulty === "normal") {
  createCannon('bottom',165,3000,15,15)
  createCannon('right',440,5000,300,300)
  createCannon('bottom',365,2250,15,15)
  createCannon('bottom',390,2500,15,15)
  createCannon('bottom',415,2750,15,15)
}

if (difficulty === "hard") {
  createCannon('bottom',165,3000,50,50)
  createCannon('right',440,5000,300,300)
  createCannon('bottom',365,2250,25,25)
  createCannon('bottom',390,2500,25,25)
  createCannon('bottom',415,2750,25,25)
}



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
