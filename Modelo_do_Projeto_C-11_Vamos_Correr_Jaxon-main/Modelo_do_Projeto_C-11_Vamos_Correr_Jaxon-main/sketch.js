var boy,path;
var boyImg,pathImg;
var leftBoundary,rightBoundary;

function preload(){
  //imagens pré-carregadas
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
    boyImg= loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png");
      pathImg= loadAnimation("path.png")
}

function setup(){
createCanvas(200,200);
  // crie Boundary (Limite) esquerdo
   leftBoundary=createSprite(0,0,100,800); leftBoundary.visible = false;
    //crie Boundary direito 
      rightBoundary=createSprite(410,0,100,800); rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4; 
  // menino se movendo no eixe X com o mouse
   boy.x = World.mouseX;
    edges= createEdgeSprites();
     boy.collide(edges[3]);
      boy.collide(leftBoundary);
       boy.collide(rightBoundary);
//código para reiniciar o fundo 
if(path.y > 400 ){
path.y = height/2;
 }
 drawSprites();
}






