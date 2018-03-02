/*!
 * Timeline v0.0.1
 *
 */

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
	})
    return this;
}


function Timeline(options,$elem) {
	console.log($elem);

}
