
 var BACKGROUND = document.createElement("img"); 
   BACKGROUND.setAttribute('src','fon.JPG'); 
 
  //var shot = pjs.wAudio.newAudio("shot.wav", 0.4); 
  
 var pjs = new PointJS(1280, 720 , {background : document.body.appendChild(BACKGROUND)});
	var system = pjs.system;
 
	
     var game = pjs.game;	 
     var p = pjs.vector.point;	
	 var key = pjs.keyControl;
	 key.initKeyControl();
	 var b =  "";
	 
   	 var  speed = 15;
	 var speedD = 12;
	 bullets = 10;
	 score = 0;	
		
	 var wall1 = game.newRectObject(   { 
     x : 5, 
     y : 1, 
     w : 1, 
     h : 478, 
      
     alpha	: 0 
     });
     var wall2 = game.newRectObject(   { 
     x : 1, 
     y : 5, 
     w : 910, 
     h : 1, 
     alpha : 0,
      });
     var wall3 = game.newRectObject(   { 
     x : 903, 
     y : 1, 
     w : 1, 
     h : 478, 
     alpha : 0
     });
     var wall4 = game.newRectObject(   { 
     x : 1, 
     y : 478, 
     w : 903, 
     h : 1, 
     alpha : 0 
     });
	 
	 var AIM =  game.newCircleObject(   { 
     x : 500, 
     y : 300, 
     radius : 10, 
     fillColor : "#FBFE6F", 
     strokeColor : "#DA4848", 
     strokeWidth : 0.1, 
     angle : 0, 
     alpha : 0.41, 
     visible : true 
   });
     var DUCK  = game.newImageObject(   { 
     file : "th_duck_hunt_bird_big.GIF", 
     x : 100, 
     y : 100, 
     w : 62, 
     h : 56, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });
       var insrtuctiv = game.newTextObject({
		 x : 10, 
         y : 500, 
         text : "W-Вверх, A-Влево, S-Вниз , D-Направо , Пробел - стрелять ",    
         style : "bold italic",		 
         size : 20,
		 alpha : 0.8, 
		 color : "black"  
	   });
	 

        var WriteLastBullets = game.newTextObject(   { 
         x : 10, 
         y : 5, 
         text : "Осталось пуль :",
         style : "bold italic",		 
         size : 20,
		 color : "black"
		})	;
		
        var WriteScore  = game.newTextObject(   { 
         x : 10, 
         y : 30, 
         text : "Набранно очков : ", 
		 style : "bold italic",
         size : 20,
		  color : "black"
		});	
	    
	   
	var getRandom = function(){
	return Math.random();						 
		    }    
	 
	 
	 
    var WALL = [wall1,wall2,wall3,wall4];
     
	var management  = function (){	
    dX = dY  = 0;
  	
    	
	 if(key.isDown("D") || key.isDown("RIGHT")){
		b="D or RIGHT";
       	dX =  speed	;		 
	 }
	 if(key.isDown("A") || key.isDown("LEFT")){
		b="A or LEFT";
       	dX =  -speed	;		 
	 } 
	 if(key.isDown("W") || key.isDown("UP")){
		b="W or UP";
        dY =   -speed	;			 
	 }
	 if(key.isDown("S") || key.isDown("DOWN")){
		b="S or DOWN";
        dY =  speed	;	
	 }
	  }
	  
   var COLLISIONAIM = function(){
		 
     for(var i in WALL) {
		 
	  if(WALL[i].isStaticIntersect(AIM.getStaticBoxA(-speed,0,speed))){
		 
		 if(dX == -speed){
		 dX = 0;
		 AIM.setPosition(p(WALL[i].x+WALL[i].w,AIM.y))
		 }
	     } 
		 
	  if(WALL[i].isStaticIntersect(AIM.getStaticBoxD(0,0,speed))){
		 
		 if(dX == speed){
			 
		 dX = 0;
		 AIM.setPosition(p(WALL[i].x - AIM.w,AIM.y))
		 }
	     } 
	  if(WALL[i].isStaticIntersect(AIM.getStaticBoxW(0,-speed,0,speed))){
		 
		 if(dY == -speed){
			 
		 dY = 0;
		 AIM.setPosition(p(AIM.x, WALL[i].y + WALL[i].h))
		 }
	     } 
	  if(WALL[i].isStaticIntersect(AIM.getStaticBoxS(0,0,0,speed))){
		 
		 if(dY == speed){
			 
		 dY = 0;
		 AIM.setPosition(p(AIM.x, WALL[i].y - AIM.h))
		 }
	     } 
		 
		
	     
    
	 }  //for(var i in wall)  
  
	 }	//var COLLISION = function()   
	  
	
	 


      var ColisionDUCK = function(){
		  	  
	   
	   
	   for(var i in WALL) {
		 
	    if(WALL[i].isStaticIntersect(DUCK.getStaticBoxA(-speedD,0,speedD))){
		 
		  if(dx == -speedD){
		  dx = 0;
		  DUCK.setPosition(p(WALL[i].x+WALL[i].w,DUCK.y))
		  }
	      } 
		 
	    if(WALL[i].isStaticIntersect(DUCK.getStaticBoxD(0,0,speedD))){
		 
		  if(dx == speedD){
			 
		 dx = 0;
         DUCK.setPosition(p(WALL[i].x - DUCK.w,DUCK.y))
		 }
	     } 
	    if(WALL[i].isStaticIntersect(DUCK.getStaticBoxW(0,-speedD,0,speedD))){
		 
		 if(dy == -speedD){
			 
		 dy = 0;
		 DUCK.setPosition(p(DUCK.x, WALL[i].y + WALL[i].h))
		 }
	     } 
	  if(WALL[i].isStaticIntersect(DUCK.getStaticBoxS(0,0,0,speedD))){
		 
		 if(dy == speedD){
			 
		 dy = 0;
		 DUCK.setPosition(p(DUCK.x, WALL[i].y - DUCK.h))
		 }
	     } 
		 
		
	     
    
	 }  //for(var i in wall)  
  
	 }//goDUCK
	     
	     
         	 
        
       
			 
			 
			 
        var moveDuck =  function (){
		  dx = dy = 0;			  
          for(i=0;i<=1; i = ColisionDUCK()){
			  
			
					
            if(getRandom()>0.495){
				dx+=speedD;
			}
			
			else{
				dx-=speedD;
			}
			
			if(getRandom()>0.495){
				dy+=speedD;
			}
			
			else{
				dy-=speedD;
			}
			
          
            
             

			
            }//for Duck
						
		  }	//move	
	 
       			 
		   
		   
		   
		   
	   	



	   
	   var shotinq = function(){
		    var a = 1; //пуль за раз
              if(key.isUp("SPACE")){
				   bullets -=a;
				   
			  }   
			  
 			 if(AIM.isStaticIntersect(DUCK.getStaticBox()) && key.isUp("SPACE")){
			  score+=10*a; 
			  
			  }//if AIM = DUCK
			  
			 if(bullets < 0 ){
				  bullets = 0;
				  
                  			 
				  alert("Игра окончена ,пожалуйста, перезапустите страницу чтобы начать заново , вы набрали " + score +  " очков из 100");
			      return bullets ;
			 }
             			 
	   }//shot
		
	
		 
    var draw = function(){
		
    AIM.draw();
	DUCK.draw();
	wall1.draw();
    wall2.draw();
	wall3.draw();
	wall4.draw();
	WriteLastBullets.draw();
	WriteScore.draw();
    insrtuctiv.draw();	
    WriteLastBullets.reStyle({
	   text : "Осталось пуль : " + bullets
    });
    WriteScore.reStyle({
	   text : "Набранно очков : " + score
    });
  
    pjs.brush.drawText({
       text :  key.getCountKeysDown()>0?b : b="Nothing pressed", 
       x : 10, y : 55, 
	   style : "bold italic",
       color : "black" ,
	   size: 20
       });
	   
	  }//draw
	
 
      
	  
	  
	  
	  
	 game.newLoop("myGame", function(){
    	 
		 	 
	shotinq(); 	
	management();	
	COLLISIONAIM();   	
	moveDuck();
	AIM.move(p(dX,dY));	
	DUCK.move(p(dx,dy));	
	draw();
	
	
 
   //AIM.drawStaticBox();  
   //AIM.drawStaticBoxA();
   //AIM.drawStaticBoxD();
   //AIM.drawStaticBoxW();
   //AIM.drawStaticBoxS();
	
	
	//DUCK.drawStaticBox();
	//DUCK.drawStaticBoxW();
	//DUCK.drawStaticBoxA();
	//DUCK.drawStaticBoxS();
	//DUCK.drawStaticBoxD();
	
	
    //wall1.drawStaticBox();
    //wall2.drawStaticBox();
    // wall3.drawStaticBox();
    //wall4.drawStaticBox();
   	
	 	
	 })//myGames
	  
	 
	
	game.setLoop("myGame");
	game.start();