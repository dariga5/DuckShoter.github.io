 var pjs = new PointJS(650, 500 , {backgroundColor:"gray"})
	
     var game = pjs.game;
	 var key = pjs.keyControl;
	 key.initKeyControl();
	 var b = ""; 
	 var p = pjs.vector.point;
	
	 var AIM = game.newCircleObject(   { 
     x : 100, 
     y : 100, 
     radius : 10, 
     fillColor : "#FBFE6F", 
     strokeColor : "#DA4848", 
     strokeWidth : 0.1, 
     angle : 0, 
     alpha : 0.41, 
     visible : true 
   });
	 
	 
	 
	 game.newLoop("myGame", function(){
	 
	 function a1 (key1,key2,name,x,y){ 
	 if(key.isDown(key1) || key.isDown(key2)){
	 name.move(p(x,y) );
	 b = key1 +" или "+ key2;
	 }}
	 
	 a1("D" , "RIGHT" ,AIM,12,0 )
	 a1("A" , "LEFT" ,AIM,-12,0 )
	 a1("S" , "DOWN" ,AIM,0,12 )
	 a1("W" , "UP" ,AIM,0,-12 )
	 
	 
	 
	 
	 
	 AIM.draw();
	 
	 
	 
	 
	 
	 pjs.brush.drawText({
     text :  key.getCountKeysDown()>0?b : b="", 
     x : 10, y : 10, 
     color : "black" ,
	 size: 15
       });
	 
	 })
	 
	 
	 
	game.setLoop("myGame");
	game.start();
	