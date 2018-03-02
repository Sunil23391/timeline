/*!
 * Timeline v0.0.1
 *
 */

'use strict';

var TIMELINECONSTANTS = {
	CLASS:'time-line',
	CLASSPREFIX:'time-line-'
}


function repeater(arr) {
    return {
        each: function(callback) {
            for (var i = 0; i < arr.length; i++) {
                callback($(arr[i]), i, arr);
            }
        }
    }
}

function twoDigitsNum(num) {
	if(num<10)
		return "0"+num;
	else
		return ""+num;
}

function formatDate(date,format) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    /* Year Formatting*/

    var formattedYear = format.replace(/(?!y)y(?!y)/,year);
    	formattedYear = formattedYear.replace(/(?!y)yy(?!y)/,year%100);
    	formattedYear = formattedYear.replace(/(?!y)yyyy(?!y)/,year);

    /*Month Formatting*/
    var formattedMonth = formattedYear.replace('M',monthIndex+1);
    	formattedMonth = formattedYear.replace('MM',twoDigitsNum(monthIndex+1));


    // console.log(format,formattedMonth);

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}



$.fn.timeline = function(options) {
	repeater(this).each(function(element) {
		var timeLine = new Timeline(options,element);
	});
    return this;
}


function Timeline(options,$elem) {
	var self = this;
	self.formatDate = options.formatDate;


	$elem.addClass(TIMELINECONSTANTS.CLASS);
	self.panels = self.createPanels($elem);

	options.data.forEach(function(event,index) {
		self.renderDate(event,index);
		self.renderCircle(event,index);
	});


}





Timeline.prototype.createPanels = function createPanels(mainPanel) {
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







Timeline.prototype.renderDate = function renderCircle(event,index) {
	var self = this;
	var dateBox = document.createElement("div");
	var $dateBox = $(dateBox);
	if(self.formatDate && self.formatDate.status)
		$dateBox.html(formatDate(new Date(event.date),self.formatDate.format));
	else
		$dateBox.html(event.date);

	if(index){
		$dateBox
		.addClass('time-line-item-margin');
		
	}

	self.panels.$datePanel.append(dateBox);
}


Timeline.prototype.renderCircle = function renderCircle(event,index) {

	var self = this;
	var circle = document.createElement("div");
	var $circle = $(circle);

	$circle
	.addClass('time-line-circle');


	if(index){
		$circle
		.addClass('time-line-item-margin');
	}

		

	self.panels.$circlePanel.append(circle);
}
