var el = document.getElementsByTagName('.dvv')[0];

var options = {
	ease: 0.1,
  magneticForce: 0.6
};

var mouse = {
	x: 0,
  y: 0
};

var pos = {
	cx: 0,
  cy: 0,
  tx: 0,
  ty: 0,
  x: 0,
  y: 0
};

var sizes = el.getBoundingClientRect();

observe();
update();

function observe(){
  window.addEventListener('resize', resizeHandler, false);
  el.addEventListener('mousemove', mouseMoveHandler, false);
  el.addEventListener('mouseleave', mouseLeaveHandler, false);
}

function resizeHandler(){
  sizes = el.getBoundingClientRect();
}

function mouseMoveHandler(e){
  //sizes
  
  mouse.x = e.pageX;
	mouse.y = e.pageY;
  
  // center
  
  pos.cx = sizes.left + ( sizes.width / 2 );
	pos.cy = sizes.top + ( sizes.height / 2 );
  
  // dist
  
	var distX = ( mouse.x - sizes.left ) - ( sizes.width / 2 );
  var distY = ( mouse.y - sizes.top ) - ( sizes.height / 2 );
  
  pos.tx = distX - ( distX * (1 - options.magneticForce) );
  pos.ty = distY - ( distY * (1 - options.magneticForce) );
      
}

function mouseLeaveHandler(e){
  pos.tx = 0;
  pos.ty = 0;
}

function render(){
  
  pos.x += (pos.tx - pos.x) * options.ease;
  pos.y += (pos.ty - pos.y) * options.ease;
  
  var transform2 = 'translateX(' +  pos.x + 'px) translateY(' + pos.y + 'px)';
        
  el.style.webkitTransform = transform2;
  el.style.MozTransform = transform2;
  el.style.msTransform = transform2;
  el.style.OTransform = transform2;
  el.style.transform = transform2;
 

}

function update(){
 	render();
	window.requestAnimationFrame(update);
}

