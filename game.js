class Game{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      start(){
        if(gameState==0){
 
          player=new Player()
          player.getCount()

          form=new Form()
          form.display()
  
        }
      }

    play(){
      form.hide()
      board=createSprite(displayWidth/2-10,displayHeight/2-80)
      board.addImage(boardI)

      dice=createSprite(100,200)

      if(mousePressedOver(dice)){
        var rand=Math.round(random(1,6))
        text("number:"+rand,100,100)
      }
    }
}