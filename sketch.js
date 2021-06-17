var iss,issImage
var astro,astro_bathing,astro_brushing,astro_drinking
var astro_eating,astro_gyming,astroImage

function preload()
{
  issImage= loadImage("iss.png")
  astro_bathing = loadAnimation("bath1.png","bath2.png")
  astro_brushing = loadAnimation("brush.png")
  astro_drinking = loadAnimation("drink1.png","drink2.png")
  astro_eating = loadAnimation("eat1.png","eat2.png")
  astro_gyming = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  astroImage = loadImage("move.png")
}

function setup()
{
  createCanvas(400,400);
  iss = createSprite(200, 200);
  iss.addImage(issImage)
  iss.scale=0.1
  
  astro = createSprite(200,200)
  astro.addImage(astroImage)
  astro.scale=0.1
  
  astro.addAnimation("astroBathing",astro_bathing)
  astro.addAnimation("astroBrushing",astro_brushing)
  astro.addAnimation("astroDrinking",astro_drinking)
  astro.addAnimation("astroEating",astro_eating)
  astro.addAnimation("astroGyming",astro_gyming)
}

function draw() {
  background(255,255,255); 
  
  if (keyWentDown("LEFT_ARROW"))
    {
      astro.changeAnimation("astroBathing",astro_bathing)
    }
  
  if (keyWentDown("RIGHT_ARROW"))
    {
      astro.changeAnimation("astroEating",astro_eating)
    }
  
  if (keyWentDown("DOWN_ARROW"))
    {
      astro.changeAnimation("astroGyming",astro_gyming)
    }
  
  if (keyWentDown("UP_ARROW"))
    {
      astro.changeAnimation("astroBrushing",astro_brushing)
    }
  
  if (keyWentDown("space"))
    {
      astro.changeAnimation("astroDrinking",astro_drinking)
    }
  
  
  drawSprites();
}