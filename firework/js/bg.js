window.onload=function(){
	var width="500px";
	var height="500px";
	var bg="red";
		var canvas=document.createElement("canvas");
		canvas.height=height;
		canvas.width=width;
		document.body.appendChild(canvas);
		var ctx=canvas.getContext("2d");
		ctx.fillStyle=bg;
		ctx.fillRect(0,0,canvas.width,canvas.height);

}
