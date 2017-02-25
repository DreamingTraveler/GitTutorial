var GameMap = function(){
   this.width = 70;
   this.height = 40;

   this.position = {
       x: 30,
       y: 350
   }

   this.map = [[1,2,0,2,1],[2,0,1,0,2],[0,1,2,1,0],[2,0,1,0,2],[1,2,0,2,1]];

   this.load = function(){
     this.greenPic = new Framework.Sprite(define.imagePath + 'green.png');
     this.bluePic = new Framework.Sprite(define.imagePath + 'blue.png');
   };

   this.initialize = function(){

   };

   this.update = function(){

   };

   this.draw = function(ctx){
        for(i = 0; i < 5; i++){
          for(j = 0; j < 5; j++){
            var picPosition = {
                x: this.position.x + this.width*i,
                y: this.position.y + this.height*j
            }

            switch(this.map[i][j]){
              case 0:
                  break;
              case 1:
                  this.greenPic.position = picPosition;
                  this.greenPic.draw(ctx);
                  break;
              case 2:
                  this.bluePic.position = picPosition;
                  this.bluePic.draw(ctx);
                  break;
            }
          }
        }
   };

};
