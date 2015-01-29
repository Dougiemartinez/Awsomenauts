game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //this code sets the hight and width of the players
                image: "player",
                width: 64,
                height: 64,
                spritewitdh: "64",
                spriteheight: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
        }]);
    //this code changes the x and y values of our player 
        this.body.setVelocity(5, 20);
        //this code makes the screen follow my player
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
           
        this.renderable.addAnimation("idle", [78]);
        //this code sets the images for how our player moves on the game
        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
        
        this.renderable.setCurrentAnimation("idle");
    
    },
    
    update: function(delta){
        //makes our player move to the right when we click on the right key
        if(me.input.isKeyPressed("right")){
            //adds to the position of my ex by adding the velocity defined above in Setvelocity() and multiplying it by
            //me.timer.tick. makes the movement look smooth
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            //this code flips our players direction
            this.flipX(true);
        }else{
            this.body.vel.x = 0;
        }
        if(this.body.vel.x !== 0){
            //this code sets the animation to walk and to stop
        if(!this.renderable.isCurrentAnimation("walk")){
           this.renderable.setCurrentAnimation("walk");
        }
    }else{
        this.renderable.setCurrentAnimation("idle")
        
    }
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
    }   
    
});

game.PlayerBaseEntity = me.Entity.extend({
    init : function(x, y,  settings){
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                width: 100,
                height: 100,
                spritewidth: "100",
                spriteheight: "100",
                getShape: function(){
                    return (new me.Rect(0, 0, 100, 100)).toPolygon();
                }
            }]);
            this.broken = false;
            this.health = 10;
            this.alwaysUpdate = true;
            this.body.onCollision = this.onCollision.bind(this);
        
            this.type = "PlayerBaseEntity";
            //loads our image for the player base
            this.renderable.addAnimation("idle", [0]);
            this.renderable.addAnimation("broken", [1]);
            this.renderable.setCurrentAnimation("idle");
        },
    
    upadate: function(){
        if(this.health<=0){
            this.broken = true;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollision: function(){
        
    }
    
});

game.EnemyBaseEntity = me.Entity.extend({
    init : function(x, y,  settings){
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                width: 100,
                height: 100,
                spritewidth: "100",
                spriteheight: "100",
                getShape: function(){
                    return (new me.Rect(0, 0, 100, 100)).toPolygon();
                }
            }]);
            this.broken = false;
            this.health = 10;
            this.alwaysUpdate = true;
            this.body.onCollision = this.onCollision.bind(this);
        
            this.type = "EnemyBaseEntity";
            // makes the enemy base appear broken on the enamy side
            this.renderable.addAnimation("idle", [0]);
            this.renderable.addAnimation("broken", [1]);
            this.renderable.setCurrentAnimation("idle");
            
    },
    
    upadate: function(){
        if(this.health<=0){
            this.broken = true;
            this.renderable.setCurrentAnimation("broken");
            
        }
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollision: function(){
        
    }
    
});