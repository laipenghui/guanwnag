/* 
* @Author:   SSD
* @Date:   2015-11-07 9:04
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-07 11:09
*/

/*自适应字体*/
$(function(){
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $('html').width();
		if (htmlWidth >= 720) {
			$("html").css({
				"font-size" : "28px"
			});
		} else {
			$("html").css({
				"font-size" :  28 / 720 * htmlWidth + "px"
			});
		}
	}infinite();
});

