var fundo, fundoImg;
var chaoInvisivel;
var anna, annaImg;
var score = 0;
var life = 4;
var predio, predio1Img,predio2Img,predio3Img;

//Pré-carrega imagens, sons e animações
function preload() {
    fundoImg = loadImage("cidade.webp");
    annaImg = loadAnimation("menina1.png", "menina2.png", "menina3.png");

    predio1Img = loadImage("predio1.png");
    predio2Img = loadImage("predio2.png");
}

//configurar o jogo
function setup() {
  canvas = createCanvas(1200,600);

    fundo = createSprite(100, 150, 5, 5);
    fundo.addImage(fundoImg);
    fundo.scale = 1.3;
    fundo.velocityX = -9;

   // eu quero criar um chao invisivel pra que a "anna" fique sobre ele+
   // sem eu precisar ficar pulando 

  // criando chao invisivel
    chaoInvisivel = createSprite(1000, 600, 400, 10);
    chaoInvisivel.visible = false;

  //criando personagem: anna
    anna = createSprite(179, 530, 20, 20);
    anna.addAnimation("anna", annaImg);
    anna.scale = 0.9;
   
  // eu preciso criar cada predio (a posição) +
  // ou aquela função 65 faz tudo ?
  //criando predio 1

    predio1 = createSprite(179, 530, 20, 20);
    predio1.addAnimation("predio1", predio1Img);
    predio1.scale = 0.9;

  
}

function draw() {
  background("blue,1200,1200");

  if (fundo.x < 50) {
    fundo.x = 600;
  }
  drawSprites();
  // pular quando a tecla space for tocada
  if (keyDown("space") && anna.y >= 100) {
    anna.velocityY = -12;
  }
  anna.velocityY = anna.velocityY + 0.8;
}

// prof eu quero criar os predios em posições
// diferentes mais nem a imagem aparece


function criarObstaculos() {
    if (World.frameCount % 60 === 0) {
      predio = createSprite(400, 50, 40, 50);
  
      predio.addImage(obsTop1);
  
      predio.scale = 0.1;
      predio.velocityY = 4;
  
      //posições y aleatórias para os principais obstáculos
      predio.y = Math.round(random(800, 1000));
  
      
       
      var rand = Math.round(random(1,3));
      switch (rand) {
        case 1:
          predio.addImage(predio1Img);
          break;
        case 2:
          predio.addImage(predio2Img);
          break;
        case 3:
          predio.addImage(predio3Img);
        default:
          break;
      }
  
      //atribuir tempo de vida à variável
      predio.lifetime = 100;
      
    }
  }

  // prof eu não sei como que faz pra colocar som no jogo e +
  // eu ja olhei em alguns projetos como o do t rex +
  // mais nao entendo  
  