var rect = function(opt) {
	var rect_proto = {};
	rect_proto.x = opt.x;
	rect_proto.y = opt.y;
	rect_proto.w = opt.w;
	rect_proto.h = opt.h;
	return rect_proto;
};

var tile = function(opt) {
	var tile_proto = {};
	tile_proto.origin_rect = opt.origin_rect;
	tile_proto.dest_rect = opt.dest_rect;
	return tile_proto;
};

var world = function(opt) {
	var world_proto = {};
	world_proto.width = opt.width;
	world_proto.height = opt.height;
	world_proto.tiles = opt.tiles;
	return world_proto;
};