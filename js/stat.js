
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var BAR_GAP = 50;
var BAR_X = 140;
var BAR_Y = 90;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_GAP = 25;
var TEXT_Y = BAR_Y + BAR_HEIGHT + TEXT_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
	var maxElemeth = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			var maxElement = arr[i];
		}
	}
	return maxElement;
};
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  for (i = 0; i < players.length; i++) {

  ctx.fillText(players[i], BAR_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
  ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, Math.round((BAR_HEIGHT / maxTime) * times[i]));
  }

};
