// Size and color input
let height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width)
});

// function to clear and create grid dynamically using "for" and "while" loops
function makeGrid(row, col){
	$('tr').remove();
	for(var i = 1; i <= row; i++){
		$('#pixelCanvas').append('<tr></tr>');
		let j = 1;
		while (j <= col){
			$('tr').filter(":last").append('<td></td>');
			j++;
		}
	}
	
	//Event listeners to modify grid colors
	$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if(!$(this).attr('style')){
			$(this).attr('style', 'background-color:' + color);
		} else{
			$(this).removeAttr('style');
		}
	});
};
