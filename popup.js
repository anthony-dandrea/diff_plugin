function loadPreviousSetting() {
	console.log('loadPreviousSetting running.');

	// Get current filter setting
	chrome.storage.local.get('filter', function(obj){
		if (obj) {
			document.getElementById('filterInput').value = obj.filter;
		}
	});
};

function getFilterSetting() {
	console.log('getFilterSetting running.');

	// Get text input value for filter
	var filter = document.getElementById('filterInput').value;
	console.log('Filter:', filter);

	// Set filter value
	chrome.storage.local.set({'filter': filter});

};

window.onload = function (){
	loadPreviousSetting();
	document.getElementsByTagName('button').onclick = getFilterSetting;
};
