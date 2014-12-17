$(document).ready(function() {

	// http://stackoverflow.com/questions/13617257/saving-data-in-localstorage-for-a-googlechrome-extension-options-panel-and-acces

	var filterRegex;
	chrome.storage.local.get('filter',function (obj){
	    console.log(obj.filter);
	    filterRegex = obj.filter;
	});

});