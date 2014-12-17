$(document).ready(function() {

	function updateView() {
		var fileContainers = $('.file');
		fileContainer.each('')
			var fileContainer = $(this);
			var fileName = fileContainer.find('.js-selectable-text')
	};

	// For enterpreise
	// $('.file .js-selectable-text');

	// http://stackoverflow.com/questions/13617257/saving-data-in-localstorage-for-a-googlechrome-extension-options-panel-and-acces

	var filterRegex;
	chrome.storage.local.get('filter',function (obj){
	    console.log(obj.filter);
	    filterRegex = obj.filter;
	});

});