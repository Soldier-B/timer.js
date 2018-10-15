var $timer = (function(){
	var timer = null;
	return Object.freeze({
		start: function(){ timer = +(new Date()); },
		stop: function(){
			var elapsed = timer ? ((new Date()) - (new Date(timer))) / 1000 : 0;
			return (timer = null), elapsed;
		}
	});
})();
