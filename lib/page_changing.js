$("#toggle").click(
	function () {
		$("#toggle").toggleClass("left");
		$(".circle").toggleClass("left");
		changeToggleText($("#toggle-content"));
	}
);

function changeToggleText(toggleObject){
	toggleText = toggleObject.text();
	if ( toggleText == "ESTIMATE") {
		toggleObject.text("ACTUAL");
	}
	else{
		toggleObject.text("ESTIMATE");
	}
}