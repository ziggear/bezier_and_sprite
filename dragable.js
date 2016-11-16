var dragable = (function(){
	var dragable = function(opt){
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

		d.element = function() {
			return document.getElementById(d.id);
		};

		d.init = function() {
			var element = d.element();
			element.style.position = 'absolute';
			element.style.width = d.width;
			element.style.height = d.height;
			element.style.top = d.top;
			element.style.left = d.left;
			element.style.zIndex = 1000;
			
			element.onmousedown = function(ev){

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
					d.will_drag(rleft, rtop);
			    };

				document.onmouseup=function (){
			        document.onmousemove=null;
			        document.onmouseup = null;
			        element.style.cursor="normal";
					var rleft = Number(element.style.left.substring(0, element.style.left.length - 2));
					var rtop = Number(element.style.top.substring(0, element.style.top.length - 2));
					d.did_drag(rleft, rtop);
			    }
			};

			
		};

		d.place = function() {
			var e = document.getElementById(d.id);
			e.style.top = d.top;
			e.style.left = d.left;
		};

		d.init();
		return d;
	};
	return dragable;
}());