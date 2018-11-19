


$(document).ready(function() {
	$("#submit").click(function() {
		// processData($("#xLabels").val(), parseInt($("#values").val())
		processData();
		processOptions();
	});
});

var processData = function() {
	var processedData = [
		$("#xLabel1").val(), parseInt($("#value1").val()), 
		$("#xLabel2").val(), parseInt($("#value2").val()), 
		$("#xLabel3").val(), parseInt($("#value3").val()), 
		$("#xLabel4").val(), parseInt($("#value4").val()), 
		$("#xLabel5").val(), parseInt($("#value5").val()), 
		$("#xLabel6").val(), parseInt($("#value6").val()), 
		$("#xLabel7").val(), parseInt($("#value7").val()), 
		$("#xLabel8").val(), parseInt($("#value8").val()), 
		$("#xLabel9").val(), parseInt($("#value9").val()), 
		$("#xLabel10").val(), parseInt($("#value10").val()), 
		$("#xLabel11").val(), parseInt($("#value11").val()), 
		$("#xLabel12").val(), parseInt($("#value12").val()), 
	]
	
	console.log(processedData);
	return processedData;

}

var processOptions = function() {
	var height = parseInt($("#height").val());
	var width = parseInt($("#width").val());
	var barColour = $("#barColour").val();
	var labelColour = $("#labelColour").val();
	var barSpacing = parseInt($("#barSpacing").val());
	var options = [height, width, barColour, labelColour, barSpacing];
	console.log(options)
	return options;
}
// var drawBarChart = function(data, options, element) {

// }

// var configureAxis = function(axisData) {
// 	var xRange = []
// 	var yRange = []
// 	var len = axisData.length;
// 	for (var i = 0; i < len; i++) {

// 	}
// }
