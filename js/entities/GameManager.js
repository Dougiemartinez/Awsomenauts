game.GameManager = Object.extend({
	//constructor function
	init: function(x, y, settings){
		//sets timer
		this.now = new Date().getTime();
		//keeps track of last time creep was made
		this.lastCreep = new Date().getTime();
                this.paused = false;
		//keeps the function updating
		this.alwaysUpdate = true;
	},

	update: function(){
		//keeps track of timer
		this.now = new Date().getTime();

		if(game.data.player.dead){
			me.game.world.removeChild(game.data.player);
			me.state.current().resetPlayer(10, 0);
		}

		//checks to make sure there is a multiple of ten. makes sure its been at least a second since last creep has been made
		if(Math.round(this.now/1000)%20 === 0 && (this.now - this.lastCreep >= 1000)){
			game.data.gold += 1;
                        //adds gold to the game
                        console.log("Current gold: " + game.data.gold);
		}

		//updates
		return true;
	}
});


