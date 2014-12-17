$(document).ready(function() {
	var input = "<input id='diffToggleInput' type='text' placeholder='Enter filter here' />"
	var button = "<button id='diffToggleButton' style='margin-left:1em;'>Toggle Hidden Diffs</button>"

	$('#toc').prepend(input + button);

	var filterText = $('#diffToggleInput').val();

	// Checks to make sure there is a val then hides and adds hidden-diff class
	var filterInit = function(filterText) {
		if (filterText != '') {
			$('.file .js-selectable-text').each(function() {
				var fileName = $(this).text();
				if (fileName.indexOf(filterText) > -1) {
					$(this).closest('.file').addClass('hidden-diff').hide();
				};
			});
		};
	};

	filterInit(filterText);

	// Button toggle
	$('#files_bucket').on('click', '#diffToggleButton', function() {
		$('.hidden-diff').show().removeClass('hidden-diff');
		filterText = $('#diffToggleInput').val();
		filterInit(filterText);
	});

	// Input watch
	$('#diffToggleInput').on('change', function(){
		$('.hidden-diff').show().removeClass('hidden-diff');
		filterText = $('#diffToggleInput').val();
		filterInit(filterText);
	});

});


var recetxt=""
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	recetxt=request.greeting
});
alert(recetxt)


// http://stackoverflow.com/questions/13617257/saving-data-in-localstorage-for-a-googlechrome-extension-options-panel-and-acces

var storesRegexPattern;
chrome.storage.local.get('storesRegexPattern',function (obj){
    console.log(obj.storesRegexPattern);
    storesRegexPattern = obj.storesRegexPattern;
});