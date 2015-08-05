// JavaScript Document
$(document).ready(function(){
						   
	$('textarea').change(counter);
    $('textarea').keydown(counter);
    $('textarea').keypress(counter);
    $('textarea').keyup(counter);
    $('textarea').blur(counter);
    $('textarea').focus(counter);
	$("#clear").click(function(){
							   
					$('textarea').val("");
					 $('#wordvalue').html(0);
        			$('#charactervalue').html(0);
					$('#paragraphvalue').html(0);
										
					});

});
counter = function() {
    var value = $('textarea').val();
    
    if (value.length == 0) {
        $('#wordvalue').html(0);
        $('#charactervalue').html(0);
		$('#paragraphvalue').html(0);
         return;
    }
	
	 
    var regex = /\s+/gi;
	var par_regx=/\n\n+/g;
	var partab_regx=/\n\s+/g;
	
	
    var totalChars = value.length;
    var charCount = value.trim().length;
    if(charCount!=0)
   {
    var par_value= value.trim().split(partab_regx).length;
    var par_count = value.trim().split(par_regx).length;
     var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    }
    var charCountNoSpace = value.replace(regex, '').length;
	
    $('#wordvalue').html(wordCount);
    $('#charactervalue').html(charCountNoSpace);
	$('#paragraphvalue').html(par_value);
};
