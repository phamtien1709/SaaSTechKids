var filename = document.getElementById('fileInput');
var resultOutput = document.getElementById('result');
filename.addEventListener('change', function() {
    var input = filename.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
					resultOutput.innerText = reader.result;
				}
		reader.readAsText(input);
})
