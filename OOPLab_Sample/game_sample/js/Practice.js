var Practice = function(){
    this.load = function(){
        this.pic = new Framework.Sprite(define.imagePath + '169.bmp');
        this.pic.position = {
            x: 1250,
            y: 100
        }
        this.pic.rotation = 0;

        this.position = {
           x: 1250,
           y: 100
        }
        this.rotation = 0;
    };

    this.initialize = function(){

    };

    this.update = function(){
        // if(this.pic.position.x === 100){
        //     this.rotateState = 0;
        // }
        //
        // if(this.pic.position.x === 1250){
        //     this.rotateState = 1;
        // }
        //
        // if(this.rotateState === 0){
        //   this.position.x ++;
        //   this.rotation ++;
        // }
        // else if(this.rotateState === 1){
        //   this.position.x --;
        //   this.rotation --;
        // }
        // //this.rotation ++;
        //
        // this.pic.position = this.position;
        // this.pic.rotation = this.rotation;

    }

    this.keydown = function(e, list){
        if(e.key === 'Right'){
          this.pic.position.x += 15;
          this.pic.rotation += 15;
        }
        if(e.key === 'Left'){
          this.pic.position.x -= 15;
          this.pic.rotation -= 15;
        }
    }

    this.draw = function(ctx){
        this.pic.draw(ctx);
    };
};
