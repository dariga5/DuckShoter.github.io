 var pjs = new PointJS(650, 500 , {backgroundColor:"gray"})
	
     var game = pjs.game;
	 var key = pjs.keyControl;
	 key.initKeyControl();
	 var b = "";
   	 var  speed = 12;
	
	 var p = pjs.vector.point;
	 var wall1 = game.newRectObject(   { 
     x : 1, 
     y : 1, 
     w : 20, 
     h : 650, 
     fillColor : "red", 
     });
     var wall2 = game.newRectObject(   { 
     x : 1, 
     y : 1, 
     w : 650, 
     h : 20, 
     fillColor : "red", 
      });
     var wall3 = game.newRectObject(   { 
     x : 630, 
     y : 1, 
     w : 20, 
     h : 650, 
     fillColor : "red", 
     });
     var wall4 = game.newRectObject(   { 
     x : 1, 
     y : 460, 
     w : 650, 
     h : 20, 
     fillColor : "red", 
     });
	 
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
    var WALL = [wall1,wall2,wall3,wall4];
     
	var management  = function (){	
     dX = dY = 0;	
	 if(key.isDown("D") || key.isDown("RIGHT")){
		b="D or RIGHT";
       	dX = speed	;		 
	 }
	 if(key.isDown("A") || key.isDown("LEFT")){
		b="A or LEFT";
       	dX = -speed	;		 
	 } 
	 if(key.isDown("W") || key.isDown("UP")){
		b="W or UP";
        dY = -speed	;			 
	 }
	 if(key.isDown("S") || key.isDown("DOWN")){
		b="S or DOWN";
        dY = speed	;	
	 }
	  }
   var COLLISION = function(){
		 
     for(var i in WALL) {
		 
	  if(AIM.isStaticIntersect(WALL[i].getStaticBox())){
		 
		 if(dX == -speed){
		 dX = 0;
		 }
			 
	     if(dX == speed){
		 dX = 0;
		 }
			 
	     if(dY = -speed){
		 dY = 0;
		 }
			 
	     if(dY = -speed){
		 dY = 0;
		 }
     }//if(AIM.isStaticIntersect( wall1.getStaticBox())){
	 }  //for(var i in wall)  
  
	 }	//var COLLISION = function()   
	  
	
	
	 
	 game.newLoop("myGame", function(){
    	 
	 
	
	
	
	
	management();
	COLLISION();
	AIM.move(p(dX,dY));	
	
	
	
	
	
	
	
	AIM.draw();
	wall1.draw();
    wall2.draw();
	wall3.draw();
	wall4.draw();

    AIM.drawStaticBox();
    wall1.drawStaticBox();
    wall2.drawStaticBox();
    wall3.drawStaticBox();
    wall4.drawStaticBox();
   	
	 
 	 
	 
	 
	 
	 
	 
	 pjs.brush.drawText({
     text :  key.getCountKeysDown()>0?b : b="", 
     x : 10, y : 10, 
     color : "black" ,
	 size: 15
       });
	 
	 })
	 
	 
	 
	game.setLoop("myGame");
	game.start();