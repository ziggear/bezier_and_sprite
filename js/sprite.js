var sprite = (function(){
	var spr = function(options) {
		var obj = {}
		obj.position = options.position;
		obj.move_speed = options.move_speed;
		obj.context = options.context;
		obj.image = options.image;
		obj.width = options.width;
		obj.height = options.height;
		obj.frames = options.frames;
		obj.duration = options.duration;
		obj.loops = options.loops;
		obj.name = options.name;

		obj.prev_animate_time = 0;
		obj.cur_idx = 0;

		obj.clear = function() {
			var cvs = obj.context.canvas;
			obj.context.clearRect(0,0,cvs.width,cvs.height);
		};

		obj.render = function(pos_x, pos_y, frame_idx) {
			obj.clear();

			var f0 = obj.frames[frame_idx];
			obj.context.drawImage(
				obj.image, 
				f0.x,
				f0.y,
				f0.w,
				f0.h,
				pos_x,
				pos_y,
				obj.width,
				obj.height
			);
		};

		obj.animate = function() {
			window.requestAnimationFrame(obj.animate);

			var now = Math.round(new Date().getTime());

			var cvs = obj.context.canvas
			if(now - obj.prev_animate_time >= obj.duration) {
				obj.render(obj.position.x, obj.position.y, obj.cur_idx);
				obj.cur_idx += 1;
				if(obj.cur_idx == obj.frames.length) {
					obj.cur_idx = 0;
				}
				obj.prev_animate_time = now;
			}
		};

		obj.move = function(x, y) {
			obj.position.x = obj.position.x + x;
			obj.position.y = obj.position.y + y;
		};

		return obj;
	}
	return spr;
}());
