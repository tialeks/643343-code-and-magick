/*
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 20;
var CLOUD_Y = 110;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP;*/
window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = 'white';
	ctx.fillRect(100, 10, 420, 270);
	ctx.fillStyle = '#000';
	ctx.font="16px PT Mono";
	ctx.fillText('Ура вы победили!', 210, 50);
	ctx.fillText('Список результатов:', 210, 70);
	for (var i = 0; i < names.length; i++) {
		console.log(names[i], times[i]);
		
	}
/*	var getMaxElement = function(times) {
		var maxElement = times[0];
		for (var i = 0; i < times.length; i++) {
		if (times[i] > maxElement) {
			maxElement = times[i];
		}
		}
		return maxElement;
	};
for (var i = 0; i < names.length; i++) {
	ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	if (names[i] === maxElement) {
	ctx.fillRect(160, 60, 40, 150);
	}
}
	//ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	//ctx.fillText('Вы', 110, 105);
	//ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	//ctx.fillRect(160, 60, 40, 150);
};
*/
