var bezier = (function(){
	var point = function(x, y, draggable, is_control) {
		var bp = {};
		bp.x = x;
		bp.y = y;
		bp.draggable = draggable;
		bp.is_control = is_control;
		return bp;
	}

	var curve = function(points, ctr_points) {
		var b = {};
		b.points = points;
		b.ctr_points = ctr_points;
		return b;
	};
	return {point: point, curve: curve};
}());