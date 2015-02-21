game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        //this code below loads the background tiles images for making our map in tiled
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        //this code below loads the meta tiles to make our map in tiles
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        //this code below loads the player into our map
        {name: "player", type:"image", src: "data/img/orcSpear.png"},
        {name: "tower", type:"image", src: "data/img/tower_round.svg.png"},
        {name: "creep1", type:"image", src: "data/img/brainmonster.png"},
        {name: "title-screen", type:"image", src: "data/img/title.png"},
        
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        //this code below lets us load or map we made in tiled
        {name: "map", type: "tmx", src: "data/map/map.tmx"}


	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
