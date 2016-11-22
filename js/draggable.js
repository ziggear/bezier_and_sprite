var draggable = (function(){
	var draggable = function(opt){
		var d = {};
		d.id = opt.id;
		d.width = opt.width;
		d.height = opt.height;
		d.color = opt.color;
		d.left = opt.left;
		d.top = opt.top;
		d.prevent_horizontal = opt.prevent_horizontal;
		d.prevent_vertical = opt.prevent_vertical;
		d.will_drag = opt.will_drag;
		d.did_drag = opt.did_drag;
		d.element = undefined;

		d.init = function() {
			var btn = document.createElement('button');
			btn.setAttribute('class', 'draggable');
			btn.setAttribute('id', d.id);
			btn.style.left = d.left + "px";
			btn.style.top = d.top + "px";
			btn.style.width = d.width;
			btn.style.height = d.height;
			btn.style.zIndex = 1000;
			btn.style.position = 'absolute';

			d.element = btn;
			
			d.element.onmousedown = function(ev){
				var element = d.element;

				element.style.cursor="move";
				var e = window.event || ev;
				var x = ev.clientX- element.offsetLeft+(document.documentElement.scrollLeft||document.body.scrollLeft);
	            var y = ev.clientY- element.offsetTop+(document.documentElement.scrollTop||document.body.scrollTop);
	            
				document.onmousemove=function(ev){
			        var ev=window.event||ev;
					if(!d.prevent_horizontal) {
						element.style.left = (ev.clientX-x+document.documentElement.scrollLeft||document.body.scrollLeft)+"px";
					}

					if(!d.prevent_vertical) {
						element.style.top = (ev.clientY-y+document.documentElement.scrollTop||document.body.scrollTop)+"px";
					}

					var rleft = Number(element.style.left.substring(0, element.style.left.length - 2));
					var rtop = Number(element.style.top.substring(0, element.style.top.length - 2));
					console.log(rleft + "," + rtop);
					d.left = rleft;
					d.top = rtop;
					d.will_drag(rleft, rtop);
			    };

				document.onmouseup=function (){
			        document.onmousemove=null;
			        document.onmouseup = null;
			        element.style.cursor="normal";
					var rleft = Number(element.style.left.substring(0, element.style.left.length - 2));
					var rtop = Number(element.style.top.substring(0, element.style.top.length - 2));
					d.left = rleft;
					d.top = rtop;
					d.did_drag(rleft, rtop);
			    }
			};

			
		};

		d.init();
		return d;
	};
	return draggable;
}());