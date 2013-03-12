$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
});

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
