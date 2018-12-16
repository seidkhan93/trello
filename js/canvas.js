
$(function(){
	
	var dials = $(".dial");
	
	for (i=0; i < dials.length; i++){
		var width = (typeof $(dials[i]).attr("data-width") != 'undefined') ? Math.round($(dials[i]).attr("data-width")) : 80;
		var procent = (Number($(dials[i]).html()) > 0 && Number($(dials[i]).html()) < 100) ? Math.round(Number($(dials[i]).html()) * 10)/10 : 0;
		var lineWidth = (typeof $(dials[i]).attr("data-lineWidth") != 'undefined') ? Number($(dials[i]).attr("data-lineWidth")) : width / 10;
		var size = (width+lineWidth)*2;
		var lineRound = (typeof $(dials[i]).attr("data-lineRound") != 'undefined') ? true : false;
		var borderColor = $(dials[i]).css("border-color");
		var color = $(dials[i]).css("color");
		
		
		$(dials[i]).css({"width": size + 'px', "height": size + 'px', "font-size": Math.floor((width-lineWidth) / 4) + 'px'});
		
		$(dials[i]).html('<canvas id="dial' + i + '" width="' + size + '" height="' + size + '"></canvas><p>' + procent + '%</p>');
		
		$("p", dials[i]).css({"line-height": size + 'px'});
		var canvas = document.getElementById("dial" + i);
    var context = canvas.getContext("2d");
		
		var radian = 2*Math.PI*procent/100;
		
		context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 0, 2*Math.PI, false);
		context.lineWidth = lineWidth;
		context.strokeStyle = '#f5f7fa';
		context.stroke();
		context.beginPath();
		
 context.arc(width/2+lineWidth/2, width/2+lineWidth/2, width/2, 1.5 * Math.PI, radian+1.5 * Math.PI, false); 
	  context.strokeStyle = color; 
		
		if (lineRound == true && lineWidth < width) context.lineCap = "round";
    context.stroke();
	}
});

