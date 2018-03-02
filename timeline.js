/*!
 * Timeline v0.0.1
 *
 */

 var TIMELINECONSTANTS = {
 	CLASS:'time-line',
 	CLASSPREFIX:'time-line-'
 }

function repeater(arr) {
	return {
		each:function(callback) {
			for (var i = 0; i < arr.length; i++) {
				callback($(arr[i]),i,arr);
			}
		}
	}
}



$.fn.timeline = function(options) {
	repeater(this).each(function(element) {
		var timeLine = new Timeline(options,element);
	});
    return this;
}
function createPanels(mainPanel) {
	var datePanel = document.createElement("div");
	var circlePanel = document.createElement("div");
	var contentPanel = document.createElement("div");
	var panels  = {
		$datePanel:$(datePanel),
		$circlePanel:$(circlePanel),
		$contentPanel:$(contentPanel)
	}

	var prfx = TIMELINECONSTANTS.CLASSPREFIX;

	panels.$datePanel.addClass(prfx+'panel').addClass(prfx+'date-panel');
	panels.$circlePanel.addClass(prfx+'panel').addClass(prfx+'circle-panel');
	panels.$contentPanel.addClass(prfx+'panel').addClass(prfx+'content-panel');



	mainPanel
	.append(datePanel)
	.append(circlePanel)
	.append(contentPanel);


	return panels;
}


function Timeline(options,$elem) {
	var self = this;


	$elem.addClass(TIMELINECONSTANTS.CLASS);
	self.panels = createPanels($elem);

	options.data.forEach(function(event,index) {
		self.renderCircle(event,index);
	});


}

Timeline.prototype.renderDate = function renderCircle(event,index) {

}


Timeline.prototype.renderCircle = function renderCircle(event,index) {

	var self = this;
	var circle = document.createElement("div");
	$circle = $(circle);

	$circle
	.addClass('time-line-circle');


	if(index){
		$circle
		.addClass('time-line-circle-margin');
		
	}

	self.panels.$circlePanel.append(circle);
}
