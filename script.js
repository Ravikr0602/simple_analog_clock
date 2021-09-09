 
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  //initialize the clock 
  (function anlog_clock(){ 
      var hours = document.getElementById("hours"),
          minutes = document.getElementById("minutes"),
          seconds = document.getElementById("seconds");
      //set up a loop
      (function loop(){
          requestAnimFrame(loop);
          draw();
      })();
      //position the hands
      function draw(){
          var now = new Date(),//now
              then = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0),
              diffInMil = (now.getTime() - then.getTime()),
              hour = (diffInMil/(1000*60*60)),//hours
              min = (hour*60),//minutes
              sec = (min*60);//seconds
          
          seconds.style.webkitTransform = "rotate(" + (sec * 6) + "deg)";
          hours.style.webkitTransform = "rotate(" + (hour * 30 + (hour / 2)) + "deg)";
          minutes.style.webkitTransform = "rotate(" + (min * 6) + "deg)";
      } 
  })();